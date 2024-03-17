import os
import logging
from openai import OpenAI

from api.configs import (
    PARENT_TEXT_PATH
)
from api.datamodels import Question

logger = logging.getLogger(__name__)



openai_key = os.getenv("OPENAI_API_KEY")
assert openai_key, "Add your OpenAI key to the environment"

client = OpenAI(api_key=openai_key)

file = client.files.create(
    file=open(PARENT_TEXT_PATH, "rb"),
    purpose="assistants"
)
logger.info("Added file to bot.")

my_assistants_ids = {
    assistant.name: assistant.id for assistant in client.beta.assistants.list().data
    }
if "Broker Manager 2" not in my_assistants_ids:
    # creating an assistant
    assistant = client.beta.assistants.create(
        name="Broker Manager 2",
        instructions="You are a customer support chatbot. Use your knowledge base to best respond to customer queries.",
        tools=[{"type": "retrieval"}],
        model="gpt-3.5-turbo-0125"
    )
else:
    logger.info("Assistant already exists, using assistant by the name Broker Manager 2", )
    assistant = client.beta.assistants.retrieve(my_assistants_ids["Broker Manager 2"])
logger.info("Created Assistant.")



def bot(question: Question):
    '''interact with chatbot'''

    # creating a thread
    thread = client.beta.threads.create(
        messages=[
            {
                "role": "user",
                "content": question.question,
                "file_ids": [file.id]
            }
        ]
    )
    logger.info("Created Thread")

    # add the message
    message = client.beta.threads.messages.create(
        thread_id=thread.id,
        role="user",
        content=question.question
    )
    logger.info("Created Message.")

    # create a run
    run = client.beta.threads.runs.create(
        thread_id=thread.id,
        assistant_id=assistant.id
    )
    logger.info("Created Run.")

    # retrieve the run
    run = client.beta.threads.runs.retrieve(
        thread_id=thread.id,
        run_id=run.id
    )
    logger.info("Retrieving Run.")

    # taking messages
    thread_messages = client.beta.threads.messages.list(thread.id)
    logger.info("Taking messages.")

    answer = thread_messages.data[0].content[0].text.value

    
    for message in thread_messages.data:
        for content in message.content:
            print(content)
    #         answer += content.text.value
    
    logger.debug("Got the answer - %s", answer)
    logger.info("Got the answer.")
    
    # # modify the assistant
    # assistant = client.beta.assistants.update(
    #     assistant_id=assistant.id,
    #     tools=[{"type": "retrieval"}]
    # )          
    # print(type(question.question))
    # answer = ""
    return {"Bot": str(answer)}
    