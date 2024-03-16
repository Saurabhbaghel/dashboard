from fastapi import FastAPI
from fastapi import Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
from langchain_community.document_loaders.csv_loader import CSVLoader


app = FastAPI()

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
    year: str | int
    market_type: str

def process_str(string):
    return string.lower().replace(" ", "_")

def to_json(data):
    records = []
    id = 0
    for doc in data:
        d = {}
        text = doc.page_content   
        text = text.replace("\n", ",")
        get_key_val = lambda x: x.split(": ")
        for comb_text in text.split(","):
            key, val = get_key_val(comb_text)
            val = float(val) if any(n.isdecimal() for n in val) and key != "Year" else str(val)
            d.update({process_str(key): val})
        records.append(d)
        id += 1
        
    records.pop(0)
    return records

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.get("/api/top-broker")
def top_broker(
    # year: str | int = '2021',
    # market_type: str = "open_type"
    table_query: TableQuery
):
    '''gives the top broker for given year and market-type'''
    
    # parent_csv = pd.read_csv("")
    pass

@app.post("/api/bot")
def bot(
    question: Question
):
    '''interact with chatbot'''
    print(question.question)
    return {"Query": question.question}
    