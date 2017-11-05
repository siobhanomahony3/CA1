Name: Siobhan O' Mahony
Student ID: 20058654

PROJECT DESCRIPTION:

The purpose of this assignment was to create a funtional web application using node. My idea was based on a recipe generator allowing users to access a collection of recipes.
Each recipe includes the recipe name, recipe type, ingredients and rating. Each user includes first name, last name, username and email.
The application feature are as follows:

• POST a recipe name, type, ingredients and rating in JSON format
• POST a first name, last name, username and email in JSON format
• GET a list of each recipe added
• GET a list of each user added
• GET an individual recipe using the ID field
• GET an individual user using the ID field
• DELETE an individual recipe using the ID field
• DELETE an individual user using the ID field
• Update the ratings using the request body text field by PUT request
• Update the username using the request body text field by PUT request.
• I then used MongoDB as my persistence and it includes two collections recipe and user. Each collection stores a POST, GET, DELETE and PUT.

PROJECT AJUSTMENTS:

•Removed the array and added mongoDB as my persistence
•Adjusted the add, get, post and pull to store in the database
•Added a second collect named user
•Change the ratings and username so you can update the field using the requect body in the REST Client.

REFERENCES:

•Drohan, D. Lab 2 - DonationWeb 1.0 (Express & Node App). Available at: https://ddrohan.github.io/wit-wad/topic02-node/book-b-lab02/index.html
•Drohan, D. Lab 3 - Donation 2.0 (Mongo, Express & Node App). Available at: https://ddrohan.github.io/wit-wad/topic03-node-mongo/book-c-lab03/index.html



