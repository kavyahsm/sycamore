import React from 'react';
import Dashboard  from './components/dashboard';
import Auth  from './components/shared/auth';
import Home from './components/clientview/home'
import ScDetails from './components/clientview/home/social_coupon/sc_detail'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppWrap from './components/shared/global/appwrap'
import './App.css';

function App() {
  return (
     <Router>
    <main className="App">
 <AppWrap>
  <Route path="/admin" component={Dashboard} />
  <Route path="/" component={Home} exact/>
  <Route path="/socialcoupon/:id" component={ScDetails} exact/>

        {/* <Dashboard /> */}
        
     </AppWrap>
     
    </main>
    </Router>

 
  );
}

export default App;
