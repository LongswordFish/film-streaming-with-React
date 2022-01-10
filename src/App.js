import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home-page'
import MoviesPage from './pages/movie/movie-page';

import './App.css';

const i= 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png';
    

const TryPage = () =>(
  <div
  className="image"
  style={{
      backgroundImage:`url(${i})`
  }}>
    hhh
  </div>
);


class App extends React.Component{

  render(){
    return (
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/movies/*' element={<MoviesPage />}/>
            <Route path='/try' element={<TryPage />}/>
            {/* <Route exact path='/signin' element={<SignInAndSignUpPage />}/> */}
            {/* <Route exact path='/signin'  element={currentUser!==null?(<Navigate to='/' />):(<SignInAndSignUpPage />)} />
            <Route exact path='/checkout' element={<CheckoutPage />}/> */}
          </Routes>

          <Footer />
      </div>
    );
  }
}

export default App;


