---
title: Products
description: The documentation of routes products
---

### Get all products

Get a list of all game products by using the `/api/products/all` endpoint

Request:

```
[GET] localhost:8080/api/products/all
```

Reponse:

```json
{
  "status": "OK",
  "data": [
    {
      "_id": "6572daf5a24f67e6dbd240d5",
      "title": "Red Dead Redemption 2",
      "description": "A Western-themed action-adventure game...",
      "code": 3456,
      "price": 49.99,
      "status": true,
      "stock": 99921,
      "category": "Action",
      "thumbnail": "https://example.com/reddeadredemption2.jpg",
      "owner": "ADMIN"
    }
    //...
  ]
}
```

### Get a single product

Get a single product by adding the `id` as a parameter: `/api/products/<id>`

Request:

```
[GET] localhost:8080/api/products/6572daf5a24f67e6dbd240d5
```

Response:

```json
{
  "status": "OK",
  "data": {
    "_id": "6572daf5a24f67e6dbd240d5",
    "title": "Red Dead Redemption 2",
    "description": "A Western-themed action-adventure game that follows outlaw...",
    "code": 3456,
    "price": 49.99,
    "status": true,
    "stock": 99921,
    "category": "Action",
    "thumbnail": "https://example.com/reddeadredemption2.jpg",
    "owner": "ADMIN"
  }
}
```

### Create a product

Create a new product by sending an object like the following to `/api/products/`

Request:

```
[POST] localhost:8080/api/products/
```

##### Body

```json
{
  "title": "Honkai: Star Rail",
  "description": "role-playing gacha video game developed by miHoYo...",
  "code": 6850,
  "price": 29.99,
  "status": true,
  "stock": 9999,
  "category": "RPG",
  "thumbnail": "https://example.com/honkaistarrail.jpg"
}
```

Response:

```json
{
  "status": "OK",
  "data": "Product added with ID: 6572daf5a24f67g7dbd683g7"
}
```

### Update a product

You can update a product by sending an object like the following and adding the `id` as a parameter: `/api/products/<id>`

Request:

```
[PUT] localhost:8080/api/products/6572daf5a24f67e6dbd240e1
```

##### Body

```json
{
  "status": false,
  "price": 29.99
}
```

Response:

```json
{
  "status": "OK",
  "data": "Product with ID: 6572daf5a24f67e6dbd240e1 has updated"
}
```

> Is not necessary to send all product attributes, just send the ones you want to update

### Delete a product

You can delete a product by adding the `id` as a parameter: `/api/products/<id>`

Request:

```
[DELETE] localhost:8080/api/products/6572daf5a24f67e6dbd240e1
```

Response:

```json
{
  "status": "OK",
  "data": "Product with ID: 6572daf5a24f67e6dbd240e1 has deleted"
}
```

### Pagination

This API use offset-based paging use the limit and page query parameters to paginate through items in a collection

The endpoint needs a `limit` of entries and a number of the `page` you need it

Request:

```
[GET] http://localhost:8080/api/products?limit=15&page=2
```

Response:

```json
{
  "status": "OK",
  "data": {
    "docs": [
      {
        "_id": "6572daf5a24f67e6dbd240e8",
        "title": "The Sims 4",
        "description": "A life simulation game where players create and...",
        "code": 5673,
        "price": 39.99,
        "status": true,
        "stock": 4,
        "category": "Simulation",
        "thumbnail": "https://example.com/thesims4.jpg",
        "id": "6572daf5a24f67e6dbd240e8"
      }
      // ... and 9 items more
    ]
  }
}
```

> The default `limit` is 10 and `page` is 1

### Filters

You can filter with `category`, `sort` order of the price and `status`

Request:

```
[GET] http://localhost:8080/api/products?sort=asc&category=Simulation&status=true
```

Response:

```json
{
  "status": "OK",
  "data": {
    "docs": [
      {
        "_id": "6572daf5a24f67e6dbd240e8",
        "title": "The Sims 4",
        "description": "A life simulation game where players create and control...",
        "code": 5673,
        "price": 39.99,
        "status": true,
        "stock": 4,
        "category": "Simulation",
        "thumbnail": "https://example.com/thesims4.jpg"
      },
      {
        "_id": "6572daf5a24f67e6dbd240da",
        "title": "Animal Crossing: New Horizons",
        "description": "A life simulation game where players move to...",
        "code": 5679,
        "price": 49.99,
        "status": true,
        "stock": 7,
        "category": "Simulation",
        "thumbnail": "https://example.com/animalcrossing.jpg"
      }
    ]
  }
}
```

> Is not necessary to send every query, just send the ones you want to filter

| Filter   | Value   | Description                     |
| -------- | ------- | ------------------------------- |
| limit    | Number  | The limit of product to request |
| page     | Number  | The number of page              |
| sort     | String  | Sort for price `asc, desc`      |
| category | String  | Category of products            |
| status   | Boolean | Status of the products          |

### Product Schema

| Attribute   | Type     | Description                        |
| ----------- | -------- | ---------------------------------- |
| \_id        | ObjectId | The autogenerate id of the product |
| title       | String   | The name of the product            |
| description | String   | Description of the product         |
| code        | Number   | Code of the product                |
| price       | Number   | Price of the product               |
| status      | Boolean  | Status of the product              |
| stock       | Number   | Stock of the product               |
| category    | String   | Category of the product            |
| thumbnail   | String   | URL of images of the product       |
| owner       | String   | Who are the owner of the product   |
