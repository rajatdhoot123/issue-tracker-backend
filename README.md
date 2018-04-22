# Book Store Api

BookStore api based used to search, sort, insert, delete books from database.

## Getting Started
This repo is based on rest api to maintain records of book.
You need to download zip file and extract in your system.
Then just go to where you extracted then open terminal then
```
npm install
```
It will install dependancys

default settings are
```
    host: 'localhost',  // Localhost
    user: 'root',       // Username of your mysql
    password: 'root',   // Password of your mysql
    database: 'bookapp' // database is 'bookapp'
```
you can change these settings from api/controller/books.js

### Prerequisites

You should have node install in your system.
Thats all you are now ready to start.

#### Running

After all installation its time to run api.

For testing you may need postman or any other client to make different types of api calls
like GET,POST,DELETE,PATCH etc.

##### API Format

To Populate database -->

Example
You need to send json object array with the data you want to update. id is unique and it will be autogenerated
###### Populate data in bulk
```
API---->   http://localhost:5050/books   TYPE----> POST
Input JSON
 [
    {
        "title": "Things Fall Apart",
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "language": "English",
        "year": 1958
    },
    {
        "title": "Fairy tales",
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "language": "Danish",
        "year": 1836
    }
 ]

 Output
 {
    "result": {
        "fieldCount": 0,
        "affectedRows": 2,
        "insertId": 157,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "&Records: 2  Duplicates: 0  Warnings: 0",
        "protocol41": true,
        "changedRows": 0
    }
}
```
###### Populate single data

You need to pass json object with the field you inserted get updated and remaining will get default value that is null.

```
{
    "title": "Fairy tales",
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "language": "Danish",
}

```
###### SORT

```
API--->  http://localhost:5050/books/sort?order=asc&orderby=title TYPE---> GET
```

In above example api you can change use option parameters like :

order = asc/desc //optional

orderby = title/author/country/language //optional

###### SEARCH

```
API---> http://localhost:5050/books/search?key=author&value=Marcel+Proust TYPE---> GET
```

Search Parameters;

key = title/author/country/language

value = any thing you want to search

Like in above api it want to search author with name Marcel Proust
here I have to search author with name Mircel Poust
there was space in name hance we have to use symbol "+" to insert space

###### DELETE

```
API---> http://localhost:5050/books/delete?key=id&value=102 TYPE---> DELETE
```

Delete Parameters;

key = id/title/author/country/language

value = any thing you want to delete

In above example it will delete by id where id = 102