

def convert_str(name: str):
    return name.lower().replace(" ", "_")

def to_json(data):
    '''jsonify the dataframe'''
    records = [record[1].to_dict() for record in data.iterrows()]
    return records