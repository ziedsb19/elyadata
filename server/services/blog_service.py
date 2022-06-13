from pymongo.collection import Collection
import json
from bson import ObjectId


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


class BlogService:
    def __init__(self, collection: Collection) -> None:
        self.collection = collection

    def addBlog(self, blog):
        print(self.collection)
        try:
            self.collection.insert_one(blog)
            return True
        except:
            return False

    def getBlogs(self):
        return list(self.collection.find())

    def getBlogById(self, id: str):
        return self.collection.find_one({"_id": ObjectId(id)})

    def changeVoteBlogById(self, id, increment):
        inc = 1 if increment else -1
        try:
            self.collection.update_one({"_id": ObjectId(id)}, {"$inc": {"votes": inc}})
            return True
        except:
            return False
