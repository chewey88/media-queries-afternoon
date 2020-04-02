import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      mobileMenuOpen: false,
    }
    this.toggleMobileMenu= this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu(){
    this.setState({
      mobileMenuOpen:!this.state.mobileMenuOpen,
    })
  }

  render(){
    console.log(this.state.mobileMenuOpen)
  return (
    <div className="App">

      <header className="header">
        <h1>Start Bootstrap</h1>
        <nav className="navbar">
          <ul className="nav-list">
            <li 
            className="nav-button">SERVICES</li>
            <li 
            className="nav-button">PORTFOLIO</li>
            <li 
            className="nav-button">ABOUT</li>
            <li 
            className="nav-button">TEAM</li>
            <li 
            className="nav-button">CONTACT</li>
          </ul>
          <img 
          onClick={this.toggleMobileMenu}
          className="hamburger-icon"
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"/>
        
          
          <ul 
          className={`mobile-nav-list ${this.state.mobileMenuOpen ? 'mobile-nav-list-open': 'hidden'}`}
          >
            <li 
            className="nav-button">SERVICES</li>
            <li 
            className="nav-button">PORTFOLIO</li>
            <li 
            className="nav-button">ABOUT</li>
            <li 
            className="nav-button">TEAM</li>
            <li 
            className="nav-button">CONTACT</li>
          </ul>
          
        </nav>
      </header>
          <main>
          <div className="container">
            <div 
            className="welcome-text">Welcome To Our Studio!
            </div>
            <div
            className="greeting-text">IT'S NICE TO MEET YOU
            </div>
            <button 
            className="tell-me-more-button">TELL ME MORE
            </button>
          </div>
     </main>
          
          
        
        
    </div>
  );
}
}
export default App;
