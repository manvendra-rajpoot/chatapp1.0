import React, { lazy, Suspense } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = lazy(() => import('./Sidebar'));
const Chat = lazy(() => import('./Chat'));


function App() {  
  
  return (
    <div className="app">
      <div className='app__body'>
        <BrowserRouter >
          
          <Suspense fallback={<div className='loading'>Loading...</div>}>
            <Sidebar/>
            <Switch>
              <Route exact path="/" />
              <Route path="/rooms/:roomId" component={Chat}/>
            </Switch>
          </Suspense>
        
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
