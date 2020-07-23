import React from 'react';
import './App.css';
//import HooksCounter from './components/HooksCounter';
//import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
//import ClassCounterOne from './components/ClassCounterOne';
//import HookMouse from './components/HookMouse';
//import ComponentC from './components/ComponentC';
//import ParentComponent from './components/ParentComponent';
//import Counter from './components/Counter';
import FocusInput from './components/FocusInput';

//export const UserContext = React.createContext()
//export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
        {/* <HooksCounter />       */}
         {/* <HookCounterTwo/> */}
         {/* <HookCounterThree/> */}
         {/* <ClassCounterOne/> */}
        
          {/* <UserContext.Provider value={'Vaibhav'}>
            <ChannelContext.Provider value={'my value'}>
              <ComponentC/>
            </ChannelContext.Provider>
          </UserContext.Provider> */}

          {/* <ParentComponent/> */}

          {/* <Counter /> */}

          <FocusInput/>
    </div>
  );
}

export default App;
