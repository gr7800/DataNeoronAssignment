# Data Neuron API

Data Neuron is an API for managing products with functionalities like adding, updating, deleting, and retrieving products. It also provides endpoint to track API call counts.

### BaseUrl : https://dataneoron.onrender.com/dataneuron

## Table of Contents
* Getting Started
* Prerequisites
* Installation
* Usage
* Endpoints
* Contributing
* License
* Getting Star

### Getting Started
#### Prerequisites
Before running the application, make sure you have the following installed:

* Node.js
* MongoDB

#### 1. Installation
Clone the repository:

``` git clone <repository-url> ```

#### 2. Install dependencies

```
cd data-neuron-api
npm install
```
#### 3. Set up environment variables

Create a .env file in the root directory and add the following:

```
PORT=8080
MONGODB_URI=<your-mongodb-uri>
```
#### 4. Start the server

```
npm start
```
## Usage
* Endpoints
### 1. Add Product

```
URL: /add

Method: POST

Request Body:
{
  "name": "Product Name",
  "description": "Product Description",
  "price": 10,
  "quantity": 100
}
```

### 2. Update Product
```
URL: /dataneuron/update/:id

Method: PATCH

Request Body:

{
  "name": "Updated Product Name",
  "description": "Updated Product Description",
  "price": 15,
  "quantity": 50
}
```
### 3. Get All Products
```
URL: /dataneuron/all
Method: GET
```

### 4. Get API Call Count
```
URL: /dataneuron/count
Method: GET
```
### 5. Delete Product
```
URL: /dataneuron/delete/:id
Method: DELETE
``` 

### 6. Delete All Products
```
URL: /dataneuron/deleteall
Method: DELETE
```