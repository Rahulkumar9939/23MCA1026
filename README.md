# Top N Products
This project displays the Top N Products from various e-commerce platforms.
## Setup
To get started, run `npm install` followed by `npm start` to run the application.

# Top N Products

This project displays the Top N Products from various e-commerce platforms.

## Setup
To get started, run `npm install` followed by `npm start` to run the application.

## Important Note for Node.js v17+ Users
If you are using Node.js version 17 or higher (including v21.1.0 as mentioned), you might encounter an error related to digital envelope routines when attempting to start the project. This is due to changes in the way Node.js handles certain cryptographic operations.

To work around this issue, you can set the `NODE_OPTIONS` environment variable to use the legacy provider before running the application. This tells Node.js to use the older set of cryptographic operations, avoiding the error.

### Windows
Open your terminal and run the following command before starting your React application:
```
set NODE_OPTIONS=--openssl-legacy-provider
```

### macOS and Linux
Open your terminal and run the following command before starting your React application:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

After setting this environment variable, you should be able to start the application without encountering the cryptographic operations error.
