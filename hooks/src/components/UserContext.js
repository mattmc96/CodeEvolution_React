import React from 'react';

const UserContext = React.createContext()

// set default value below .. remove contex from app.js to use this
//const UserContext = React.createContext("Vaibhav")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }