import React from 'react';
import Theme from './providers';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import './App.css';

const App = () => (
  <Theme>
    <Header />
    <Main />
    <Footer />
  </Theme>
);

export default App;
