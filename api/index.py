import os
from fastapi import FastAPI
from fastapi import Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
from langchain_community.document_loaders.csv_loader import CSVLoader
import openai
from openai import OpenAI
import logging

logger = logging.getLogger(__name__)
logger.addHandler(logging.StreamHandler())
logger.setLevel(logging.DEBUG)

app = FastAPI()
os.environ["OPENAI_API_KEY"] = "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"

client = OpenAI()

# loading data
data_path = "../data/data.txt"

def convert_str(name: str):
    return name.lower().replace(" ", "_")

parent_csv = pd.read_csv("../data/data_dashboard.csv")
parent_csv["Year"] = parent_csv["Year"].astype(str)
parent_csv = parent_csv.rename(mapper=convert_str, axis=1)

file = client.files.create(
    file=open(data_path, "rb"),
    purpose="assistants"
)
# print("added file to bot.")
logger.info("Added file to bot.")
    

# Set up CORS middleware, adjust origins as necessary
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Or wherever your Next.js app is served
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Question(BaseModel):
    question: str
    
class TableQuery(BaseModel):
    year: str
    marketType: str

def process_str(string):
    return string.lower().replace(" ", "_")

def to_json(data):
    '''jsonify the dataframe'''
    records = [record[1].to_dict() for record in data.iterrows()]
    return records


@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}



@app.post("/api/top-broker")
def top_broker(
    table_query: TableQuery
):
    '''gives the top broker for given year and market-type'''
    
    year = table_query.year
    marketType = table_query.marketType
    
    print(f"year: {year}, market type: {marketType}")
    data = parent_csv
    # filter parent csv
    if marketType in ["Open Market", "Facilities"]:
        data = data.loc[parent_csv["market_type"] == marketType]
    print(data.head(2))
    data = data.loc[data["year"] == year]
    print("after year", data.head(2))
    
    # sorting by GWP to get top brokers 
    data = data.sort_values(by="gwp", ascending=False)
    
    # getting top 10
    data = data.head(10)
    
    # resetting index
    data["id"] = list(range(10))
    
    # get json of the df
    record_dict = to_json(data)
    print("json:", record_dict)
    return record_dict



@app.post("/api/bot")
def bot(
    question: Question
):
    '''interact with chatbot'''
    
    # os.environ["OPENAI_API_KEY"] = "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"
    
    # client = OpenAI()
    # data_path = "../data/data.txt"
    
    # file = client.files.create(
    #     file=open(data_path, "rb"),
    #     purpose="assistants"
    # )
    # # print("added file to bot.")
    # logger.info("Added file to bot.")
    
    # creating an assistant
    # creating an assistant
    assistant = client.beta.assistants.create(
        name="Broker Manager",
        instructions="You are a customer support chatbot. Use your knowledge base to best respond to customer queries.",
        tools=[{"type": "retrieval"}],
        model="gpt-3.5-turbo-0125"
    )
    logger.info("Created Assistant.")

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
    