import pandas as pd

def convert_str(name: str):
    return name.lower().replace(" ", "_")

def to_json(data):
    '''jsonify the dataframe'''
    
    if isinstance(data, pd.Series):
        data = data.to_frame().reset_index(inplace=False)
        
    records = [record[1].to_dict() for record in data.iterrows()]
    return records