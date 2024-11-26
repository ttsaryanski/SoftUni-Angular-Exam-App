# Tsvetan Tsaryanski exam project for Angular October 2024 course in SoftUni

## Project Setup and Start Guide

This guide explains how to install dependencies and start both the server and the client of the project.

### Installation and start the server

1. Install dependencies for the REST API server:
   
    Open Terminal, navigate and install:
        
        cd server/REST API
        npm install

2. Start the REST API Server:

    npm start

If everything is normal you will see the following messages:

    Server running on http://localhost:3000
    Successfully connect to cloud DB!
    

### Installation and start the client

1. Install dependencies for the client (SPA):

    Open Terminal, navigate and install:

        cd client/Application
        npm install

2. Start the Application:

    npm start

    Alternatively, you can use Angular CLI:

    ng serve

The SPA will typically be available at http://localhost:4200.

Ensure the REST API server is running before starting the SPA to enable proper integration.



