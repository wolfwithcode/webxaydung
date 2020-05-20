import React, { Suspense } from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import ListWork from './components/list-work/list-work.component';
import Sidebar from './components/sidebar/sidebar.component';

import HomePage from './pages/homepage/homepage.component';
import OtherPages from './pages/otherpages/otherpages.component';
import GalleryPage from './pages/gallerypage/gallerypage.component';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={(<div>Loading...</div>)}>
        <div className='container-fluid p-0 justify-content-center col-xl-9 col-12 overflow-hidden' 
        style={{backgroundColor: 'rgba(255, 255, 255, 0.1)', margin:'auto', padding:'0'}}> 
          <div className='col-12 p-0 app'>
            <div className='app-header col-12 p-0'>
              <Header />
            </div>
            <div className='main-content col-12 p-0 justify-content-center '>            
              <div className='list-work col-12 p-0'>
                <ListWork />              
              </div>
              <div className='row body-page'>
                <div className='col-3 app-sidebar'>
                  <Sidebar/>            
                </div>
                <div className='col-9 app-content'>
                  <Switch>              
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/sp/*' component={GalleryPage}/>
                    <Route exact path='/tk/*' component={OtherPages}/>
                    <Route exact path='/nav/:type/:title/:text/*' component={OtherPages}/>
                  </Switch>
                </div>        
              </div> 
            </div>
            <div className='app-footer col-12 p-0'>            
              <Footer />
            </div>
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
