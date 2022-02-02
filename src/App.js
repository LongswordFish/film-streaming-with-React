import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home-page'
import MoviesPage from './pages/movie/movie-page';
import CheckoutPage from './pages/checkout/checkout-page';
import SignInPage from './pages/sign-in/sign-in-page';

import './App.css';
  

class App extends React.Component{

  render(){
    return (
      <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/movies/*' element={<MoviesPage />}/>
            <Route exact path='/signin' element={<SignInPage />}/>
            {/* <Route exact path='/signin'  element={currentUser!==null?(<Navigate to='/' />):(<SignInAndSignUpPage />)} /> */}
            <Route exact path='/checkout' element={<CheckoutPage />}/>
          </Routes>

          <Footer />
      </div>
    );
  }
}

export default App;


