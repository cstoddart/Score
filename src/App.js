import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Flat from 'flat-embed';

class App extends Component {
  async componentDidMount() {
    const profile = await fetch('https://api.flat.io/v2/me', {
      headers: {
        'Authorization': 'Bearer 0a1314f691944e982ee36e999b6a0737d0b00af394cba79ea2a08c588ac70fe918cf7172cca2ee647b4dc438e0bcbb5dc0e22c07d067f052ce11752da0be84be',
      }
    }).then(res => res.json());

    const scores = await fetch(`https://api.flat.io/v2/users/${profile.id}/scores`, {
      headers: {
        'Authorization': 'Bearer 0a1314f691944e982ee36e999b6a0737d0b00af394cba79ea2a08c588ac70fe918cf7172cca2ee647b4dc438e0bcbb5dc0e22c07d067f052ce11752da0be84be',
      }
    }).then(res => res.json());

    // fetch(`https://flat.io/services/oembed?url=https%3A%2F%2Fflat.io%2Fscore%2F${scores[0].id}`);

    new Flat('flat-embed', {
      score: scores[0].id,
      height: 500,
      width: 500,
      embedParams: {
        appId: '0a1314f691944e982ee36e999b6a0737d0b00af394cba79ea2a08c588ac70fe918cf7172cca2ee647b4dc438e0bcbb5dc0e22c07d067f052ce11752da0be84be',
        // appId: '77459a14-55c6-481f-ab05-bdc927bd1dca',
        branding: false,
        mode: 'edit',
      },
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div id="flat-embed"></div>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
