from fastapi import FastAPI
from fastapi import Form
import pandas as pd
from langchain_community.document_loaders.csv_loader import CSVLoader


app = FastAPI()

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
    year: str | int = '2021',
    market_type: str = "open_type"
):
    '''gives the top broker for given year and market-type'''
    
    # parent_csv = pd.read_csv("")
    pass

@app.post("/api/bot")
def bot(
    question: str = Form(None)
):
    '''interact with chatbot'''
    
    return {"Query": question}
    