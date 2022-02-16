import React from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home-page'
import MoviesPage from './pages/movie/movie-page';
import CheckoutPage from './pages/checkout/checkout-page';
import SignUpPage from './pages/sign-up/sign-up-page';
import SignInPage from './pages/sign-in/sign-in-page';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectSignUp } from './redux/user/user.selectors';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

const App = ()=>{
  let signUpSuccess = useSelector(selectSignUp);
  console.log(`sign up is `+ signUpSuccess);
  let currentUser = useSelector(selectCurrentUser);
  console.log("current user is "+currentUser);
  return (
    <div className="App">
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />}/>
              <Route path='/movies/*' element={<MoviesPage />}/>
              <Route exact path='/user/signIn' element={(currentUser!=null)?(<Navigate to='/' />):<SignInPage />}/>
              <Route exact path='/user/signUp'  element={signUpSuccess?(<Navigate to='/user/signIn' />):(<SignUpPage />)} />
              <Route exact path='/checkout' element={<CheckoutPage />}/>
            </Routes>
  
            <Footer />
        </div>
  )
  
}


export default App;


