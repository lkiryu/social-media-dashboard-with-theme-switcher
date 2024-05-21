import React from 'react';
import Header from './components/header/header'
import AllFollowers from './components/allFollowers/allFollowers'
import Overview from './components/overview/overview';

import './js/changeTheme'

import './App.css'

function App() {
  return (
    <main className="container dark theme">
      <Header />

      <AllFollowers />

      <Overview />
    </main>
  );
}

export default App;