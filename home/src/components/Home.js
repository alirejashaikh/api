import React from 'react';
import Header from './header';
import Footer from './Footer';
import Main from './main';
import Top from './Top';

export default function Home() {
  return (
    <div className='container'>
      <Top />
      <Header />
      <br/>
      <Main />
      <br/>
      <Footer />
    </div>
  )
}