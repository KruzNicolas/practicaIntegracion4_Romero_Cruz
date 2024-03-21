---
title: Carts
description: The documentation of routes carts
---

### Create a new Cart

To create a new Cart use `/api/carts/` endpoint

Request

```
[POST] localhost:8080/api/carts/
```

Response:

```json
{
  "status": "OK",
  "data": "Cart created with ID: 65e6c5e90e66f04d3ae50bc6"
}
```

### Get a single cart

To get a single cart by adding the `id` as a parameter `/api/carts/<id>` endpoint

Request:

```
[GET] localhost:8080/api/carts/65e6c5e90e66f04d3ae50bc6
```

Response:

```json
{
  "status": "OK",
  "data": {
    "_id": "65e6c5e90e66f04d3ae50bc6",
    "products": [],
    "status": "ONGOING"
  }
}
```

### Add a single product to a cart

To add a product to an array of products in a specific cart use `/api/carts/<cartID>/products/<productID>` and add `cartId` and `productId`

Request:

```
[POST] localhost:8080/api/carts/65e6c5e90e66f04d3ae50bc6/products/6572daf5a24f67e6dbd240e1
```

Response:

```json
{
  "status": "OK",
  "data": "Product with ID: 6572daf5a24f67e6dbd240e1 added in Cart with ID: 65e6c5e90e66f04d3ae50bc6"
}
```

### Delete a product from a cart

To delete a product from a array of products in a specific cart use `/api/carts/<cartID>/products/<productID>` and add `cartId` and `productId`

Request:

```
[DELETE] localhost:8080/api/carts/65e6c5e90e66f04d3ae50bc6/products/6572daf5a24f67e6dbd240e1
```

Response:

```json
{
  "status": "OK",
  "data": "Product with ID: 6572daf5a24f67e6dbd240e1 removed from Cart with ID: 65e6c5e90e66f04d3ae50bc6"
}
```

### Add an array of products to a cart

To add an array of products to an array of product in a specific cart use `/api/carts/<cartID>` and add `cartId`

Request:

```
[POST] localhost:8080/api/carts/65e6c5e90e66f04d3ae50bc6/
```

##### Body

```json
[
  {
    "productId": "6572daf5a24f67e6dbd240e1",
    "quantity": 5
  },
  {
    "productId": "6572daf5a24f67e6dbd240e3",
    "quantity": 7
  }
]
```

Response:

```json
{
  "status": "OK",
  "data": "Cart updated"
}
```

### Update a quantity of a product in a cart

To update the quantity of a specific product in a specific cart use `api/carts/<cartId>/products/<productId>` and add `cartId` and `productId`

Request:

```
[PUT] localhost:8080/api/carts/65e6c5e90e66f04d3ae50bc6/products/6572daf5a24f67e6dbd240e1
```

##### Body

```json
{
  "quantity": 26
}
```

Response:

```json
{
  "status": "OK",
  "data": "Update the quantity in: 26 of a product with ID: 6572daf5a24f67e6dbd240e1 in cart with ID: 65e6c5e90e66f04d3ae50bc6"
}
```

### Delete all products from a cart

To delete all products from a cart use `api/carts/<cartId>` and add `cartId`

Request:

```
[DELETE] localhost:8080/api/carts/65e6c5e90e66f04d3ae50bc6
```

Response:

```json
{
  "status": "OK",
  "data": "Cart products are deleted"
}
```

### Complete a purchase

To complete a purchase use a `api/carts/<cartId>/purchase` endpoint and add `CartId`

Request:

Request:

```
[POST] localhost:8080/api/carts/purchase/65e6c5e90e66f04d3ae50bc6
```

Response:

```json
{
  "status": "OK",
  "data": "Purchase completed"
}
```
