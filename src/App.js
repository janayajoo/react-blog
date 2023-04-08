import React from 'react';
import {Navbar, BlogPost, BlogList} from './Components'; 
import {Route, Routes} from 'react-router-dom';


function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
				<Route path="/BlogPost" element={<BlogPost/>}/>
				<Route path="/BlogList" element={<BlogList/>}/>
			</Routes>
    </React.Fragment>
  );
}

export default App;
