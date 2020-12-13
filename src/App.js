import React, { lazy, Suspense } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom/cjs/react-router-dom.min";
import Login from './Login';
import { useStateValue } from './StateProvider';

const Sidebar = lazy(() => import('./Sidebar'));
const Chat = lazy(() => import('./Chat'));


function App() {  

  const [{user}, dispatch] = useStateValue();
  
  return (
    <div className="app">
      { (!user) ? (<Login />) : (
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

      )
    }
      
    </div>
  );
}

export default App;
