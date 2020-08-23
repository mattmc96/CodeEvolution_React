import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Greet from "./components/Greet";
// import Welcome from './components/Welcome';
// import Message from './components/Message';
// import Counter from './components/Counter';
import FunctionClick from "./components/FunctionClick";
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Form from './components/Form';
// import LifeCycleA from'./components/LifeCycleA';
// import PureComp from './components/PureComp';
// import ParentComp from './components/ParentComp';
// import RefsDemo from './components/RefsDemo';
// import FRinput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
//import ClickCounter from './components/ClickCounter';
//import HoverCounter from './components/HoverCounter';
//import ClickCounter2 from './components/ClickCounter2';
//import HoverCounter2 from './components/HoverCounter2';
//import CounterProps from './components/CounterProps';

//import User from './components/User';

import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <Greet name= "Vaibhav" heroName = "Batman">
        <p>these are children props</p>
      </Greet>
      
      <Greet name= "Clark" heroName = "Bruce">
        <button>Bruce</button>  
      </Greet>
      <Greet name= "Diana" heroName = "Wonder Woman"/>  */}

      {/* <Welcome name= "Diana" heroName = "Wonder Woman"/>  */}

      {/* <Message/> */}

      {/* <Counter/> */}

      {/* <EventBind/> */}

      {/* <ParentComponent/> */}

      {/* <UserGreeting/> */}

      {/* <NameList/> */}

      {/* <Form/> */}

      {/* <LifeCycleA/> */}

      {/* <ParentComp></ParentComp> */}

      <FunctionClick />

      {/* <ClassClick/> */}

      {/* <RefsDemo /> */}

      {/* <FRinput /> */}

      {/* <PortalDemo/> */}

      {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      </ErrorBoundary>
    
      <ErrorBoundary>
      <Hero heroName='Superman'/>
      </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName='Joker'/>
      </ErrorBoundary> */}
      {/* 
      <ClickCounter name= 'Vaibhav'/>



      <HoverCounter/> */}

      {/* <ClickCounter2/>
      <HoverCounter2/> */}

      {/* <User render= {(isLoggedIn) => isLoggedIn ? 'vaibhav' : 'Guest'}/> */}

      {/* <CounterProps render= {(count, incrementCount) => (
        <ClickCounter2 count={count} incrementCount={incrementCount}/>
      )} />

      <CounterProps render= {(count, incrementCount) => (
        <HoverCounter2 count={count} incrementCount={incrementCount}/>
      )} /> */}

      <UserProvider value="vaibhav">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
