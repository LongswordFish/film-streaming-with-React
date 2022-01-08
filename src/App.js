import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home-page'


import './App.css';

const ShopPage = ()=>(<div>Shop</div>);


class App extends React.Component{

  render(){
    return (
      <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<HomePage />}/>
            <Route path='/shop/*' element={<ShopPage />}/>
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
