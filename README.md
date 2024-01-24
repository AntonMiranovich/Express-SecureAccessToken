# Express-SecureAccessToken
Our project is a backend developed using Express.js, a JavaScript programming language, and a Postgres database. The main goal of the project is to create a secure and reliable server that processes requests from the client side and stores data in a database.

One of the important aspects of our server's security is hashing user passwords. We hash passwords using a hashing algorithm such as bcrypt. This allows us to store passwords encrypted in a database, ensuring the security of user accounts.

The main functionality of our server includes:

1. Processing data requests: the server processes requests to receive, add, change and delete data. Before storing the password in the database, it is hashed to ensure security.

2. Session management: The server tracks user sessions and controls access to data based on authorization.

The project is developed using Express.js modules to create the server, the JavaScript programming language to handle the logic and interact with the Postgres database. To hash passwords, we use one of the popular algorithms, such as bcrypt.

The result is a secure and reliable server that can process requests from the client side and protect user data using password hashing.
