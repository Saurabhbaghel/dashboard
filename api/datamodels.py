from pydantic import BaseModel

class Question(BaseModel):
    question: str
    
class TableQuery(BaseModel):
    year: str
    marketType: str