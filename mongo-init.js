db = db.getSiblingDB('elyadata');

db.blogs.createIndex( { "$**": "text"} )