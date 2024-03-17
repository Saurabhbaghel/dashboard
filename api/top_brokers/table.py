import os
import logging

import pandas as pd

from api.datamodels import TableQuery
from api.configs import PARENT_CSV_PATH
from api.utils import to_json, convert_str

logger = logging.getLogger(__name__)

parent_csv = pd.read_csv(PARENT_CSV_PATH)
parent_csv["Year"] = parent_csv["Year"].astype(str)
parent_csv = parent_csv.rename(mapper=convert_str, axis=1) # TODO: Checkif this is required


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
