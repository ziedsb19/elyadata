from pydantic import BaseModel
from typing import Union


class Blog(BaseModel):
    author: str
    title: str
    content: Union[str, None] = None
    votes: int = 0
