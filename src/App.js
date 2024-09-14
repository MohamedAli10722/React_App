import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/lab1/ass1'
import ClassComponent from './components/lab1/ass2'
import FunctionComponent from './components/lab1/ass3'
import ClassComponent2 from './components/lab1/ass4'
import ToggleButton from './components/lab1/ass5'
import CounterComponent from './components/lab2/Buttons/TwoButtons'
import TheProducts from './components/lab2/Products/Products';
import Signup from './components/lab2/SignUp&Login/SignUp';
import Login from './components/lab2/SignUp&Login/LogIn';
import LoginSignupHooks from './components/Hooks/Login&SignupHooks(1)/Login&SignupHooks'
import ProductsHooks from './components/Hooks/ProductsHooks(2)/ProductsHooks'
import ButtonsHooks from './components/Hooks/ProductsHooks(2)/ButtonsHooks'
import Componenet1 from './components/Hooks/FiveComponents(3)/Component1';
import React from 'react';
import Counter from './components/Hooks/UseEffectCounter(4)/Counter';
import Name from './components/Hooks/UseEffectUserName(5)/UserName';
import IntervalCounter from './components/Hooks/IntervalCounter(6)/IntervalCounter';
import MousePosition from './components/Hooks/Mouse&Window(7)/MousePosition';
import WindowResize from './components/Hooks/Mouse&Window(7)/WindowResize';
import APICards from './components/Hooks/APICards(8)/ApiCards';
import SearchAPI from './components/Hooks/SearchAPI(9)/SearchAPI';

export const context = React.createContext();


function App() {
  return (
    <div className="App">

    {/* <FirstComponent/> */}

    {/* <ClassComponent /> */}

    {/* <FunctionComponent
        name="mohamed"
        age={22}
        gender="male"
        nationality="egyption"
        state="student"
    >
      <h1>Hello our project</h1>
    </FunctionComponent> */}

    {/* <ClassComponent2 cor1 = "html" /> */}

    {/* <ToggleButton/> */}

    {/* <CounterComponent /> */}

    {/* <TheProducts /> */}

    {/* <Signup/>  */}

    {/* <Login/> */}

    {/* <LoginSignupHooks/> */}

    {/* <ButtonsHooks/> */}

    {/* <ProductsHooks/> */}

    {/* <context.Provider value = "New Value">
      <Componenet1/>
    </context.Provider> */}

    {/* <Counter /> */}
    
    {/* <Name/> */}

    {/* <IntervalCounter/> */}

    {/* <MousePosition/> */}

    {/* <WindowResize/> */}

    {/* <APICards/> */}

    <SearchAPI/>

    </div>
  );
}

export default App;
