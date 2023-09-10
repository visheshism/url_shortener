# Url Shortener API Documentation

## Introduction
This API provides functionality to shorten URLs and access them through client-side redirection.

## Tech Used
- Express.js
- Mongoose
- JSON Web Token (JWT)
 
## Installation
To install the necessary dependencies, run the following command:
`npm install`

Start the server:
`npm start`

## API Endpoints
The available endpoints for the API are as follows:

Client-side:

### Redirect to Shortened URLs
- **/:identifier**: Redirects to the shortened URL based on the provided identifier.

Server-side:

### Shorten Links
- **POST /API_KEY/new**: Creates a new shortened link with a random identifier.
- **POST /API_KEY/new/:identifier**: Creates a new shortened link with a custom identifier.
- **GET /API_KEY/get**: Retrieves a list of all shortened links.
- **GET /API_KEY/get/:identifier**: Retrieves a specific shortened link by its identifier.
- **DELETE /API_KEY/delete/:identifier**: Deletes a specific shortened link by its identifier.

## Error Handling
Custom middleware is used to catch errors and send appropriate responses to the user.

## Environment Variables
Please refer to [example.env](example.env) for the required environment variables.

## Acknowledgments
This project was developed by [Vishesh Singh](https://github.com/visheshism).

## License
This project is licensed under the [MIT License](LICENSE).

Feel free to contribute to this project by making a pull request.
