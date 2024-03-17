import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.chatbot import chat
from api.analytics import charts 
from api.top_brokers import table
from api.datamodels import Question, TableQuery



logger = logging.getLogger(__name__)
logger.addHandler(logging.StreamHandler())
logger.setLevel(logging.DEBUG)

app = FastAPI()

# Set up CORS middleware, adjust origins as necessary
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], # Or wherever your Next.js app is served
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.post("/api/top-broker")
def top_broker(table_query: TableQuery):
    '''gives the top broker for given year and market-type'''
    return table.top_broker(table_query)

@app.get("/api/analytics/bar-graph-gwp")
def all_brokers_bar_graph():
    '''get the bar graph for all the brokers'''
    return charts.all_brokers_gwp_bar()
    
@app.get("/api/analytics/pie-2021-gwp")
def all_brokers_2021_gwp_pie():
    '''get the pie chart of GWP for all the brokers for 2021'''
    return charts.gwp_yearwise(year="2021")

@app.get("/api/analytics/pie-2022-gwp")
def all_brokers_2022_gwp_pie():
    '''get the pie chart of GWP for all the brokers for 2022'''
    return charts.gwp_yearwise(year="2022")

@app.post("/api/bot")
def bot(question: Question):
    '''interact with chatbot'''
    return chat.bot(question)