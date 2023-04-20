import React from 'react';
import {Navbar, BlogPost, BlogList, Favorite} from './Components'; 
import {Route, Routes} from 'react-router-dom';


function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
				<Route path="/BlogPost" element={<BlogPost/>}/>
				<Route path="/BlogList" element={<BlogList/>}/>
        <Route path="/Favorite" element={<Favorite/>}/>
			</Routes>
    </React.Fragment>
  );
}

export default App;
