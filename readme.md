# **MERN Stack - Pizza Delivery App**

> This is a full-stack CRUD web application built using Node, Express, React and MongoDB (the MERN Stack).

![About](/client/src/images/About.png)

The deployed app can be found [here](https://pizza-app-mern.herokuapp.com/)

**NOTE:**

- Please utilise the traditional way to login on the Heroku deployment. The Google and Facebook login only works in development.
- I uploaded the development code to my dropbox - Mentors can use this to test the Google and Facebook Login functionality.

## Table of Contents:

- [System Architecture](#system-architecture)
- [System Requirements Specification](#system-requirements-specification)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Running Tests](#running-tests)
- [Application Security](#application-security)
- [Handling of API Keys](#handling-of-api-keys)
- [Deployment](#deployment)
- [Credits](#credits)
- [Contact](#contact)

## **System Architecture**

---

### **Web Stack Choice**

I am planning on utlising the MERN (MongoDB, Express, React, Node) Stack to develop the Pizza Delivery web application. A Model-View-Controller (MVC) architectural pattern will be followed:

I have chosen this architecture on account of the following:

- Utilising the MVC architectural pattern is extremely beneficial as it segregates the business logic from the presentation/interface logic.
- As a matter of fact, if I decide to use another framework to build the frontend, I will still be able to use the same backend.
- Furthermore, the same backend API can be used if I decide to build a mobile app at a later stage.
- The MERN Stack has great community support which means that I will be able to find answers to most obstacles that I may encounter.
- I will be able to develop both the backend as well as the frontend of my web application using a single language, JavaScript.

### **How will I deploy the application and why?**

I will be deploying my Pizza Delivery web application on [Heroku](https://www.heroku.com/ "Heroku home"), which is a cloud application platform. There is an abundance of resources available online which will assist me in deploying my web app successfully to the Heroku server.

It is important to note that I will first push my application to a GitHub repository and thereafter deploy it to Heroku using the GitHub integration. This approach will save me alot of time because each push made to the GitHub repository will be automatically detected by Heroku and a new build of the app will be initiated. If successful, the deployed app will be updated accordingly.

### **What tools will be used to style the application?**

I will be using Create React App (CRA) to create the frontend of my app.

These are the tools that I will use to style my application:

- React-toastify

  - I will be using react-toastify to display notifications on my app. Toast notifications are colourful, easy to customise and simple to utilise.

- AOS - Animate on scroll library

  - I will use AOS in order to add custom animations to my web application. These animations will enhance the design thus giving the user a pleasant experience.

- Font Awesome

  - I will make use of font awesome icons in order to grab the end-users attention. In addition to this, it will ensure easier navigation of the interface.

- React Bootstrap

  - I will use the ready-made styled-components which will reduce the amount of code that I will have to manually type. There are various components which I can re-use throughout my web application which will save me a vast amount of time.

- Bootstrap

  - I will use bootstrap's grid system in order to ensure that my content is laid out correctly. Bootstrap is easy to customise and it will speed up my development time.

- CSS

  - By utilising the tools and frameworks mentioned above, I aim to reduce the amount of CSS that I will be using for my web application. I will make use of a single CSS stylesheet for additional styling and also for customising styled-components. A single CSS file will make my app more efficient and readable.

## **System Requirements Specification**

---

### **How will the application work?**

This web application will use a JSON Web Token (JWT) to authenticate users. I will use at least three passport strategies to authenticate users, namely:

- Google
- Facebook & lastly,
- A normal username and password.

I will be hosting two types of users on my Pizza Delivery app: An _"Admin"_ user and a _"Normal"_ end-user.

Once a normal user is successfully signed-in, he/she will be redirected to a pizza menu. These users will then be able choose from a wide range of pizzas which they can add to their cart. Users will be able to customise their orders by updating quantities as well as deleting pizzas from the cart menu. Once satisfied with their selection, users can place their order by paying the amount using a payment processor called Stripe.

Admin users will be able to add, edit and delete pizzas via an admin dashboard panel. In addition to this, an admin user will be able to view all the orders which have been placed by normal end-users. Furthermore, admin users will be able to change the delivery status of the orders.

### **Who will use the application and how will they benefit from its usage?**

As stated above, I will be hosting two types of users on my Pizza Delivery app. With this in mind, restaurants/take-aways that sell pizza along with their clientele will make use of this application.

There are various benefits for both parties:

- Ordering food online has gained extreme popularity due to the Covid-19 pandemic which has hindered people's movement. Based on this, Pizza restaurants/take-aways who use my web application will benefit as they will attract more customers and consequently increase their revenue from sales.

- Customers will benefit from using my web application as it is extremely quick and convenient to place orders.

- Utilising such an app will ensure that restaurants receive customers orders correctly and instantly. Errors with regards to the orders will be kept minimal, thus ensuring a happy and loyal customer base.

- Due to the rapid nature of orders being sent to the pizza restaurant, customers will be able to receive their pizza's in a relatively shorter timeframe. This will also eliminate the need for customers to go in physically to collect their orders.

### **Analysing existing web applications that do something similar to what I intend on accomplishing**

The Debonairs Pizza application is very similar to what I intend on doing. It allows users to search the menu for pizzas and this is something that I plan on incorporating into my app.

There are a few downfalls that I have noticed with the Debonairs web app:

- User's cannot add the pizza directly to their cart. They need to click on the pizza and consequently, a modal pops up which then gives them an option to add to cart.
- Users cannot select which variant of the pizza they would like to order. I have not seen an option to stipulate the size of the pizza.
- Users cannot increment/decrement the quantity of a pizza within the checkout menu.

By and large, the debonairs web application is extremely busy and cluttered. My Pizza Delivery app should be eye-catching yet simple to navigate and use.

My aim is to redress the above issues when developing my app in order to ensure that users have a pleasant experience when utlising the application.

### **How will my web application stand out from that of my competitors**

My web application will stand out from my competitors in the following manner:

1. A convenient registration and login process (3 passport strategies to choose from).

2. The ordering and payment processes will be practical and quick.

3. Customers will be able to easily search for pizzas according to their tastes and preferences.

4. It will have an eye-catching design which will ensure that end-users have a pleasant experience.

5. It will be a cost-effective application as it will be built using open-source libraries.

6. It will have a user-friendly interface which will eliminate disorder and confusion.

### **Functional and Non-functional requirements of the web application**

#### **Functional Requirements**

- The application must allow new users to register and authenticate themselves using atleast three passport strategies (Google, Facebook and the traditional username & password login sytem).

- A verification email must be sent to a user when he/she registers for the very first time using the traditional login system.

- An existing user must be allowed to log into their account by entering their email and password or alternatively by using the Google/Facebook signing in functionality.

- Existing users must be allowed to reset their passwords by clicking on “I forgot my password” and thereafter receiving a link to their verified email address.

Once logged-in:

- Users must be able to navigate the pizza menu.

- Users must be able to search for pizzas according to their preferences.

- Users must be able to add an item from the menu to their cart.

- Users must be able to customise options by stipulating both the quantity and variant of their selected pizza.

- Users must be able to view all the items in their cart along with the price.

- Users must be able to delete an item from their current order.

- Users must be able to stipulate their delivery address.

- Users must be able to place an order by entering their payment details.

- Users must receive confirmation in the form of an order number.

Once logged-in:

- Admin users must be able to view, edit and delete existing pizzas from the menu.

- Admin users must be able to add new pizzas to the menu.

- Admin users must be able to view all the orders placed by normal users which will be retrieved from the database.

- Admin users must be able to change the status of an order from "To Be Delivered" to "Delivered".

#### **Non-Functional Requirements**

- A user should not be able to register a new account until a password consisting of at least six (6) characters is used.

- In the event of an attack, users passwords that are stored in the MongoDB database should be encrypted as a safety measure.

- Emails should be sent with a latency of no greater than 15 minutes.

- The web application should be user-friendly.

- The loading time of the web application should not be more than 3-5 seconds for users.

- The results from a pizza search should load within 2-3 seconds.

- The web application should allow concurrent sales to take place without reducing performance.

### **User Stories**

1. As a new user, I want to be able to register a new account, so that I can use the Pizza Delivery web application.

2. As an existing user, I want to be able to log into my account, so that I can feel more in control.

3. As a user, I want to be able to view pictures of the pizzas, so that I know what the food looks like.

4. As a customer, I want to be able to place an order from the comfort of my home, so that I do not have to physically go out to the store.

5. As a customer, I want to view prices and detailed pizza descriptions, so that I may make an informed choice before placing my order.

6. As a working customer, I want to be able to order a pizza easily, so that I can eat quickly and get back to work.

7. As a customer, I want to be able to pay for my order using my credit card, so that I can complete the payment process.

8. As a pizza business owner, I want to be able to add new pizzas to the menu so that I can provide customers with an updated selection.

9. As an admin user, I want to be the only person authorised to add, edit and delete pizzas from the menu so that normal end-users may not distort the menu with incorrect information.

10. As a manager of a pizza business, I want to be able to filter through the orders list, so that I can report on the sales made.

## Installation

To run this project, do the following:

1. On GitHub, navigate to the main page of the repository. Click on the green button - **"Code"**
2. Copy the URL displayed.
3. Open up the command prompt by typing _cmd_ in the search bar - on Windows.
4. Select the directory in which you would like to store the cloned respository.
5. Thereafter, enter git clone, and then paste the URL that you copied earlier. e.g. git clone https://github.com/RiazK09/MERN-Pizza-App.git
6. Hit enter to create a local clone on your device.
7. If you go to this new directory, you will find all the project files, ready to be utilised.
8. Navigate to this directory from the command line interface.
9. Navigate to both the server and the client directories in the command line interface and type the following to install all of the necessary node modules and dependencies:
   <br />
   `npm install`

10. In the command line interface, type the following to run the server (backend) and client (frontend) in development mode:
    <br />
    `npm start`

11. The frontend will automatically open the application in the browser. The backend/server runs on http://localhost:8000/ and the frontend on http://localhost:3000

## Usage Instructions

Users will need to register and login to their accounts if they are to experience the full scope of my web application.

New users will be able to register and authenticate themselves using three passport strategies (Google, Facebook and the traditional username & password login sytem).

Users who opt to register via the traditonal way, will receive a verification email with instructions on how to activate and confirm their account.

Upon signing in, users will be navigated to the Pizza Menu screen where an assortment of pizza choices will appear. Users will be able to search and filter pizzas according to their preferences. There is an "Add to Cart" feature underneath each pizza which allows the user to add that specific item to their cart. Once satisfied with their order, users can now proceed to the Cart screen which displays the items contained in their cart along with an option to "Pay Now". Once this button is clicked, Stripe Checkout will be launched and users will be able to add an address for delivery along with their payment details.

Should you wish to test the Stripe payment feature, use the following details:

**Card Number:** 4242 4242 4242 4242
<br />
**MM/YY:** 12/23
<br />
**CVC:** 123

Once payment is made, a message which states whether the payment has been successful or not, will appear.

Succesful payments will result in an order being added to the "Orders" tab.

It is important to note that should users wish to update their profiles, they can do so by clicking on the tab which displays their name. They will then be navigated to a page which will allow them to update their name and password only!

In order to monitor and make changes to normal-end user behaviour, a user will require the role of an admin.

Once logged in, admin users will be directed to their own admin panel which will allow them to add, edit and delete pizzas from the menu.

In order to sign in as an admin, use the following details:

**Email:** riazkarolia@gmail.com
<br />
**Password** 123456

If you would like to modify a user and change their status to that of an admin, you need to visit your MongoDB Compass console and change the role of a user from 'subscriber' to 'admin'. In doing so, that user will now have access to the admin-panel when signed in.

By and large, the user interface is extremely simple, intuitive and easy to use.

## Running Tests

In order to ensure that my application has been appropriately tested, I have created (4) tests: Two (2) of which are in the backend & Two (2) in the frontend.

- Backend/Server (with Mocha and Chai):
  <br />
  (Test folder located under the server directory)

1. Tests whether the server (backend) communicates with the client (frontend).
2. Tests whether the server gets all the pizzas from the database.

- Frontend/Client:
  <br />
  (Test folder located within the src folder)

1. A snapshot test of the 'Loading' component.
2. A test to see whether the API is working using axios.get (Backend server needs to run in order for this test to take place).

In order to run these tests, navigate to the respective directories (Client or Server) within the command line interface and type the following:
<br />
`npm test`

## Application Security

I utilised Helmet in order to secure my Express app (backend). Helmet works by setting HTTP headers appropriately. Although not foolproof, helmet can protect the app from common web threats & vulnerabilities.

Additionally, users passwords that are stored in the MongoDB database are hashed and encrypted as a safety measure, in the event of an outside attack.

## Handling of API Keys

I did not require any third party API keys for my web application. However, in many instances throughout my app, secret keys were utilised in both the backend & frontend & they were secured in the following manner:

- I created a file called '.env' in the root folders with key/pair entries.
- Thereafter I added the key along with its value to this file.
  <br />
  `E.g. MONGO_URI_KEY=EnterValueHere.`
  <br />
  This key can now be accessed by using the process.env variable.
  <br />
  `E.g. console.log(process.env.MONGO_URI_KEY)` <br /> will print the MONGO URI key to the console.
- Lastly, I added the .env file to my .gitignore file. This ensures that the .env file, which contains the private keys & values, is NOT pushed to GitHub!

To enter your own key-value pairs for the Client(frontend) of this application, create a .env file in the root folder and enter the values of the following keys:

```
REACT_APP_API=EnterValueHere
REACT_APP_GOOGLE_CLIENT_ID=EnterValueHere
REACT_APP_FACEBOOK_APP_ID=EnterValueHere
REACT_APP_STRIPE_KEY=EnterValueHere
```

To enter your own key-value pairs for the Server(backend) of this application, create a .env file in the root folder and enter the values of the following keys:

```
CLIENT_URL=EnterValueHere
DATABASE=EnterValueHere
GMAIL_API_KEY=EnterValueHere
JWT_SECRET=EnterValueHere
JWT_ACCOUNT_ACTIVATION=EnterValueHere
EMAIL_TO=EnterValueHere
EMAIL_FROM=EnterValueHere
JWT_RESET_PASSWORD=EnterValueHere
GOOGLE_CLIENT_ID=EnterValueHere
STRIPE_SECRET_KEY=EnterValueHere
```

It is important to note that Stripe Checkout requires a key for both the client and server side.

## Deployment

I have deployed my Pizza Delivery web application on [Heroku](https://pizza-app-mern.herokuapp.com/ "Pizza Delivery App").

I deployed both the server (backend) and client (frontend) together as both apps can run on the same Heroku dyno.

Firstly, I pushed my application to a GitHub repository and thereafter I deployed it to Heroku using the GitHub integration.

This approach saved me a lot of time because each push that I made to the GitHub repository was automatically detected by Heroku and correspondingly a new build of the app was initiated and deployed with the changes.

## Credits

- The Pizza Delivery [Udemy Course](https://www.udemy.com/course/mern-stack-react-redux-node-mongo-pizza-delivery-app/) - by K.Sathyaprakash Reddy.
- The [MERN Stack Project Tutorial with Redux 2021](https://www.youtube.com/playlist?list=PLKhlp2qtUcSYC7EffnHzD-Ws2xG-j3aYo) - by Piyush Agarwal.
- Stack Overflow - https://stackoverflow.com/
- HyperionDev - https://www.hyperiondev.com/
- The images were obtained from [Pxhere](https://pxhere.com/) - Please note that **ALL** images are free for personal & commercial use with NO attribution required.

## Contact

👤 **Riaz Karolia**

Feel free to contact me on [LinkedIn](https://www.linkedin.com/in/riaz-karolia/)
