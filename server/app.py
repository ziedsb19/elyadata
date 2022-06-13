from fastapi import FastAPI, HTTPException
from pymongo import MongoClient
from typing import Union
from pydantic import BaseModel
from models.blog import Blog
from services.blog_service import BlogService, JSONEncoder
from fastapi.responses import JSONResponse
from json import loads

app = FastAPI()

mongoclient = MongoClient(host="mongo")
db = mongoclient.get_database("elyadata")
collection = db.get_collection("blogs")

bs = BlogService(collection)
js = JSONEncoder()


@app.get("/api")
def getBlogs():
    return loads(js.encode(bs.getBlogs()))


@app.get("/api/{blog_id}")
def getBlogById(blog_id: str):
    return loads(js.encode(bs.getBlogById(blog_id)))


@app.get("/api/{blog_id}/{increment}")
def changeVote(blog_id: str, increment: bool):
    modified = bs.changeVoteBlogById(blog_id, increment)
    if not modified:
        raise HTTPException(status_code=404, detail="Error modifing votes")
    return None


@app.post("/api/add")
def addBlog(blog: Blog):
    inserted = bs.addBlog(blog.dict())
    if not inserted:
        raise HTTPException(status_code=404, detail="Error inserting")
    return None
