import json
import pandas as pd
from api import configs, utils

parent_csv = pd.read_csv(configs.PARENT_CSV_PATH)
parent_csv["Year"] = parent_csv["Year"].astype(str)


def filter_df(df: pd.DataFrame, column: str, value: str):
    data = df.loc[df[column]==value]
    return data

def all_brokers_gwp_bar():
    '''gives gwp and planned gwp for both the years combined.'''
    
    # parent_csv = pd.read_csv(configs.PARENT_CSV_PATH)
    
    # group
    # brokers_gwp = parent_csv.groupby(by="Broker Name")["GWP"].sum()
    brokers_gwp = parent_csv.groupby(by="Broker Name")[["GWP", "Planned GWP"]].sum()
    
    # converting it to a dataframe
    # brokers_gwp = brokers_gwp.to_frame().reset_index(inplace=False)
    brokers_gwp = brokers_gwp.reset_index(inplace=False)
    
    # converting to json
    result = utils.to_json(brokers_gwp)
    print(result)
    return result


def gwp_yearwise(year: str):
    '''Gives the GWP data for the given year'''
    
    #filter by year
    data = filter_df(parent_csv, "Year", year)
    print(f"\nFiltered by year {year}\n{data.head(2)}\n")
    
    # group and sum GWP
    data = data.groupby(by="Broker Name")["GWP"].sum()
    print(f"\Grouped by Broker Name\n{data.head(2)}\n")
    
    # make json
    result = utils.to_json(data)
    print("\n-------\nYearwise", result[0])
    
    return result

def broker(name: str):
    
    # filter data for the particular broker
    data = filter_df(parent_csv, "Broker Name", name)
    
    # remove the Broker Name column
    data.loc