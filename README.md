# Instructions

To run the backend use npm start.
To run tests in the backend use npm test.

# Notes

DB - If there was a real db, I would check if the interaction with it succeeded or failed (in db.service.js). If it failed I would log an error.

Logger - We can use better loggers than the console, such as Datadog etc.

Input validations - I wrote basic validations, we can write more thorough validations if needed.

Consts - I added a const for request types. We can create consts for "status" and "currency" as well.

# PayEm Home Assignment

## Welcome, Candidate!

Welcome to the PayEm Home Assignment! We're thrilled to have you here. This assignment is designed to give you a glimpse into the type of work you'll be tackling daily in this role, while also providing an opportunity for you to showcase your thought process and skill set. Rest assured, your solution will be used solely for evaluation purposes. We hope you find this experience both challenging and rewarding.

**Note:** For the backend portion of this assignment, please choose to implement either **Node.js** or **Python**, based on your preference.

## What is a Request?

In the context of this assignment, a **Request** refers to a financial transaction request within an organization. It can be one of the following types:

1. **Purchase Request:** A request to obtain funds for buying something necessary for business operations.
2. **Reimbursement Request:** A request to reimburse an employee for expenses already incurred on behalf of the company.

These requests help streamline financial processes and ensure proper documentation and approval of expenditures.

## The Task

In this assignment, you will be working on an application that handles a request object. You can find an example of this request object in `db.py` or `db.js`.

Your task is to enhance the existing application with both front-end and back-end features:

### 1. Implement Filters Logic

- Implement the logic for filters based on the filters available in the UI.

### 2. Request Details Page

- When clicking on a request on the requests page, you will be directed to a new route.
- Implement an endpoint in the backend to fetch a single request by its ID
- Implement the logic for approving or declining a request.

### 3. Extend Request Object

- Add a new field to the Request object named `type`.
- The `type` field can be one of the following:
  - **Purchase Request**
  - **Reimbursement Request**

## Current App State

Here's an overview of the current application state:

- **Create Requests Page**
  - Allows the creation of requests with a `/post` endpoint implemented.

- **Fetch Requests Page**
  - Fetches requests from the server with a `/get` endpoint implemented.

- **Backend**
  - Simulates a database using a file where all reads and writes are performed.

## Note on Codebase

The current code is just a boilerplate and can be modified to improve readability, performance, and overall quality. Feel free to refactor or restructure the code to better suit your implementation and demonstrate your skills.

## Repository Structure

For your convenience, we have prepared a template to help you get started. The template includes the following folders:

- **frontend**
  - Contains the UI code, with routing to create requests, display requests, and view a single request.

- **backend-node**
  - Backend code implemented in Node.js. Includes endpoints for creating and fetching requests.

- **backend-python**
  - Backend code implemented in Python. Functionality is equivalent to the Node.js backend.

## What Are We Looking for in the Solution?

- **Readability:** Ensure that your code is clean and well-documented, making it easy to understand and maintain.
- **Testing:** Consider writing tests (BE only) to verify the functionality of your implementation.
- **Error Handling:** Implement proper error handling to ensure the application runs smoothly under various conditions.

---

**Good luck with your assignment!**

---

If you have any questions or need further clarification, feel free to reach out. We look forward to seeing your solution!
