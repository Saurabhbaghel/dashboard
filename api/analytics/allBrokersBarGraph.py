import json
import pandas as pd
from api import configs, utils



def all_brokers_gwp_bar():
    '''gives gwp and planned gwp for both the years combined.'''
    
    parent_csv = pd.read_csv(configs.PARENT_CSV_PATH)
    
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