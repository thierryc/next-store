[travis]: https://travis-ci.org/Answart/next-store
[heroku]: https://answart-next-store.herokuapp.com/
[MIT]: https://github.com/Answart/next-store/blob/master/LICENSE.md
[coveralls]: https://coveralls.io/github/Answart/next-store?branch=master

<!-- <p align="center">
  <img src="https://user-images.githubusercontent.com/4269260/51296194-c117d500-19cf-11e9-81a8-c0b15867579f.png" width="450" title="Home Page">
</p> -->

# Next Store

[![Build Status](https://travis-ci.org/Answart/next-store.svg?branch=master)][travis]
[![Heroku](https://heroku-badge.herokuapp.com/?app=answart-next-store&style=flat&svg=1)][heroku]
[![MIT](https://img.shields.io/github/license/Answart/next-store.svg)][MIT]
[![Coverage Status](https://coveralls.io/repos/github/Answart/next-store/badge.svg?branch=master)][coveralls]

:construction: WORK IN PROGRESS :construction:

An **e-commerce app** where a user can browse among products with which they can buy or sell. It contains a client app built in [**React**](https://reactjs.org/) using it's [**Next.js**](https://nextjs.org/) framework and GraphQL's [**Apollo**](https://www.apollographql.com/) framework. The server app uses a [**GraphQL**](https://oss.prisma.io/content/graphql-yoga/01-overview/) server with [**Prisma**](https://www.prisma.io/) as the database interface.

User stories
------------

* [x] As an unauthenticated or authenticated user, I can see and search for items in the store.
* [x] As an unauthenticated user, I can create an account or sign in.
* [x] As an unauthenticated user, I can request to reset my account password.
* [x] As an authenticated user, I can reset my account password.
* [x] As an authenticated user, I can submit products I want to sell through the store.
* [x] As an authenticated user, I can edit details, such as title and description, of a submitted product.
* [x] As an authenticated user, I can add selections to a submitted product.
* [x] As an authenticated user, I can edit details, such as price and quantity, of a submitted product's selection.
* [x] As an authenticated user, I can delete an product I have submitted to the store.
* [x] As an authenticated user, I can add/remove products from cart and come back later to access them.
* [x] As an authenticated user, I can remove products from cart that I decide I don't want anymore.
* [ ] As an authenticated user, I can use a credit card to buy products in cart.
* [ ] As an authenticated user, I can view current/previous orders.
* [ ] As an authenticated user, I can view current/previous sales where people have ordered my products.

Tech Stack and Key Packages
---------------------------

### Server Side

* [GraphQL](https://graphql.org/): Query language for APIs
* [GraphQL Yoga](https://oss.prisma.io/content/graphql-yoga/01-overview/): Express GraphQL server
* [Prisma](https://www.prisma.io/): GraphQL database interface
* [Bcryptjs](https://github.com/dcodeIO/bcrypt.js/): Password hashing
* [JSON Web Token](https://www.jsonwebtoken.io/): User authentication
* [MailTrap](https://mailtrap.io/): Development emailing
* [Postmark](https://postmarkapp.com/): Production emailing
* [nodemailer](https://nodemailer.com/about/): Sending email with NodeJS
* [Stripe](https://stripe.com/): E-commerce API

### Client Side

* [React](https://reactjs.org/): Javascript Framework
* [Next.js](https://nextjs.org/): React Framework for server side rendering/routing/tooling
* [Apollo](https://www.apollographql.com/): GraphQL Framework for Data Management
* [Styled-Components](https://www.styled-components.com/): CSS for styling React component systems
* [Jest](https://facebook.github.io/jest/): Javascript testing
* [Enzyme](https://github.com/airbnb/enzyme): React testing utility
* [Cloudinary](https://cloudinary.com/): Image hosting API

App Map
-------

```
├──server/
│   ├──.env                Server side environment variables
│   ├──datamodel.prisma    Type definitions for server querying generated by prisma
│   ├──prisma/
│   │   ├──prisma.yml          Prisma config file
│   │   └──.graphqlconfig.yml  GraphQL config file
│   └──src/
│       ├──index.js              Server root which sets up the Prisma DB connection/querying and the GraphQL Yoga server
│       ├──mail.js               Mailtrap integration through nodemailer and Email Templates
│       ├──schema.graphql        GraphQL yoga schema with type definitions for client facing calls
│       ├──stripe.js             Stripe API connection
│       ├──utils.js              Utility methods
│       ├──generated/            Generated files from Prisma
│       │   └──prisma.graphql          Generated Prisma schema type definitions
│       └──resolvers/            Files for how server works with incoming/outgoing data
│           ├──Mutation/               Config files for updating server data
│           └──Query.js                Config file for receiving server data
└──client/
    ├──config.js           Client side config
    ├──jest.setup.js       File setup React Jest and to configure Enzyme into Jest
    ├──__test__/           Test files for pages and components
    ├──static/             Assets like logo, fonts, or extra css
    ├──lib/                Files for utility and testing
    │   ├──cloudinary.js         Cloudinary API calls
    │   ├──utils.js              Utility methods
    │   ├──init-apollo.js        Apollo client setup
    │   ├──with-apollo-client.js Integration of Apollo client with app.
    │   └──test-utils/           Graphql mocks and dummyData for test calls
    ├──graphql/            Client side graphql query/mutations
    ├──components/         Component files called by pages and styles folder
    │   └──styles/               CSS for components using the styled-components package
    └──pages/              App page files
        ├──_app.js               App root for navigating pages and persisting state between page changes
        ├──_document.js          File to implement server side rendering for css-in-js libraries
        ├──buy.js                Product page
        ├──index.js              Home page
        ├──order.js              Order page
        ├──orders.js             List page of Orders
        ├──permissions.js        User permissions page
        ├──reset.js              Reset User password page
        ├──sales.js              List page of OrderItems (Variants sold)
        ├──sell.js               Create Product page
        ├──shop.js               Products catalog page
        ├──signup.js             User signup/login page
        └──product/
            ├──edit.js               Update Product page
            ├──selections.js         Update Product's Variants page
            └──add.js                Update Product with new Variant page
```

Getting Started
---------------

### Server setup

#### Install dependencies
```bash
# ./server/
$ npm install
```

#### Create .env file

Create an **.env** file in the server directory which will be updated during setup. See also **./server/.env_example**.
```bash
# ./server/.env
NODE_ENV=development
APP_SECRET=my-super-secret
HOST=http://localhost
PORT=4242
DEV_CLIENT_URL=http://localhost:7272
PROD_CLIENT_URL=
PROD_SERVER_URL=
CLOUDINARY_API_KEY=
CLOUDINARY_PRESET=nextstore
CLOUDINARY_SECRET=
PRISMA_DEV_ENDPOINT=
PRISMA_PROD_ENDPOINT=
PRISMA_SECRET=
PRISMA_MANAGEMENT_API_SECRET=
STRIPE_SECRET=
MAILTRAP_HOST=
MAILTRAP_PORT=
MAILTRAP_USER=
MAILTRAP_PASS=
POSTMARK_HOST=
POSTMARK_PORT=
POSTMARK_USER=
POSTMARK_PASS=
```

#### Setup Cloudinary

1. Create or access your [**Cloudinary**](https://cloudinary.com/) account.
2. Grab your API key (**CLOUDINARY_API_KEY**) and API secret (**CLOUDINARY_SECRET**) from the [main console page](
https://cloudinary.com/console).
3. Create a [folder](https://cloudinary.com/console/media_library/folders/all/) where uploads will be stored.
4. Add an [upload preset](https://cloudinary.com/console/settings/upload) to set the dimensions uploaded files will be transformed into. (**CLOUDINARY_PRESET**)

#### Setup MailTrap

1. Create or access your [**MailTrap**](https://mailtrap.io/) account.
2. Create a demo inbox and check the SMTP Settings page for the Host, Port, Username, and Password credentials to be used in your env file.(**MAILTRAP_HOST**, **MAILTRAP_PORT**, **MAILTRAP_USER**, **MAILTRAP_PASS**)

(Postmark setup is unnecessary for local)

#### Setup Stripe

1. Create or access your [**Stripe**](https://stripe.com/) account. (Confirm your account in your email if creating an account)
2. Click the [API keys](https://dashboard.stripe.com/account/apikeys) link under the Developers tab.
3. Grab the **Publishable Key** and update **STRIPE_API_KEY** on the **client side** with this key (aka **./client/config.js**)
4. Grab the **Secret key** and update **STRIPE_SECRET** in the .env file on the **server side** (aka **./server/.env**)

#### Setup Prisma

1. Create or access your [**Prisma**](https://app.prisma.io/) account.
2. Globally install prisma then login to prisma in the terminal.

```bash
# ./server/
$ npm install -g prisma
$ prisma login
```

3. [Set up Prisma](https://www.prisma.io/docs/1.26/get-started/01-setting-up-prisma-demo-server-JAVASCRIPT-a001/) by using the [prisma-cli](https://github.com/prisma/prisma) in the terminal to generate your endpoint.

```bash
# ./server/
$ prisma init
# ? Set up a new Prisma server or deploy to an existing server?
> Demo server
# ? Choose the region of your demo server
# (for me it was 'answart/demo-us1')
> PRISMA-WORKSPACE/PRISMA-SERVER
# ? Choose a name for your service
> next-store-dev
# ? Choose a name for your stage (dev)
> dev
# ? Select the programming language for the generated Prisma client
> Don\'t generate
```
It will generate the files **datamodel.graphql** and **prisma.yml**.

4. Place the endpoint url from the generated **prisma.yml** as the **PRISMA_DEV_ENDPOINT** in your .env file. Delete the generated files as the endpoint is now in the .env file and generated files are already configured in the prisma directory.

5. Run the deploy script. Any changes from this point on can be deployed with the following script:

```bash
$ npm run deploy:dev
```

-------------

### Client  setup

#### Install dependencies
```bash
# ./client/
$ npm install
```

Update config file variables with the environment variables set in **./server/.env** with the same name.
```bash
# ./client/config.js
# ...
export const PROD_SERVER_URL = 'PUTHERE';
export const CLOUDINARY_API_KEY = 'PUTHERE';
export const CLOUDINARY_PRESET = 'PUTHERE';
export const CLOUDINARY_SECRET = 'PUTHERE';
export const STRIPE_API_KEY = 'PUBLISHABLE-KEY-FROM-STRIPE';
# ...
```

-------------

### Start App

#### Start server app locally
```bash
# ./server/
$ npm run start:dev
```

#### Start client app locally (in separate tab)
```bash
# ./client/
$ npm run start:dev
```

View app at [**localhost:7272**](http://localhost:7272) when both client and server are running.

<!-- App Screenshots
---------------

<p align="center">
  <img src="https://user-images.githubusercontent.com/4269260/51296194-c117d500-19cf-11e9-81a8-c0b15867579f.png" width="350"  height="350" title="Home Page">
  <img src="https://user-images.githubusercontent.com/4269260/51296228-f8868180-19cf-11e9-8fd1-ba959d155792.png" width="350" height="350" alt="Account Page">
  <img src="https://user-images.githubusercontent.com/4269260/51295802-29fe4d80-19ce-11e9-93b2-e70788d3ddcc.png" width="350" height="350" alt="Vote Popup">
  <img src="https://user-images.githubusercontent.com/4269260/51295814-413d3b00-19ce-11e9-9e38-089a9254e7af.png" width="350" height="350" alt="Poll Page">
</p> -->

NPM Commands for Client/Server apps
------------

| Command | Description |
|---------|-------------|
| npm install | Install dependencies |
| npm test | Run test files |
| npm run start:dev | Launch app |
