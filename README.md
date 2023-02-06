# Glia Coding Assessment

The project is based on the requirements mentioned in the coding assessment document.

- client => created using React. Default accessible url: http://localhost:3000
- server => created using Node.js. Default accessible url: http://localhost:4000

## Folder structure

- root
  - client
  - server
  - package.json

## Available scripts in the project root directory

Following are the scripts that can be executed from the project root directory

### `npm install`

Single command to install the packages from the package.json in the root folder, client subfolder and server subfolder.

### `npm run dev`

To start both client and server concurrently.

### `npm run client`

To start the client alone

### `npm run server`

To run the server alone

## Assumptions and Approach:

### Client-side

- The user profile details displayed in the page will reset to initial state on page refresh or when creating a new browser session as they are stored only in the server and no request is created to fetch the details again from the server.
- The activity will always be based on the last created user profile if the data exists in the server or will be random.

### Server-side

- The user profile information are stored in memory and therefore will reset when the server restarts.

## REST Endpoints

## **create User Profile**

Returns a success message.

- **URL**

  /user

- **Method:**

  `POST`

- **URL Params**

  None

- **Data Params**

  `name` - String
  `accessibility` - String [Low, Medium, High]
  `price` - String [Free, Low, High]

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ message : Successfully created user profile }`

## **Get Activity**

Returns either a random activity or an activity based on last created user profile.

- **URL**

  /activity

- **Method:**

  `GET`

- **URL Params**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ activity: Match your storage containers with their lids, type: busywork, participants: 1, price: Free, link: , key: 4940907, accessibility: Low }`
