## retailer-discount
This repo is based on node js based application to calculate a discount based on some set of rules.

## About Structure
* Main entry point is app.js, which has a small html form to perform the action.
* Classes: It has two classed User and the Discount
* Utils: Users are placed in a json file,no need a DB connection
* BusinessLayer: It has set of rules defined to calculate the discount.


## Installation

Use npm install to install the application dependencies

```bash
npm install
```

## How to RUN the application

I have created some mock users in utils/mock-user.json file.

Use below username to caluclate discount:
* test
* test1
* test2
* test3

# It has following definations
```
{
    "test": {
        "is_employee": false,
        "is_affiliated": true,
        "joining_year": 2009
    },
    "test1": {
        "is_employee": true,
        "is_affiliated": false,
        "joining_year": 2003
    },
    "test2": {
        "is_employee": false,
        "is_affiliated": false,
        "joining_year": 2012
    },
    "test3": {
        "is_employee": true,
        "is_affiliated": true,
        "joining_year": 2014
    }
}
```
