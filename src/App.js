import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
// Providers
import ContentProvider from './providers/ContentProvider'
// Components
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
// Pages
import Home from './pages/home/home.component'
import About from './pages/about/about.component'
import Properties from './pages/properties/properties.component'
import Services from './pages/services/services.component'

function App() {
  return (
    <ContentProvider>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/properties' component={Properties} />
        <Route exact path='/services' component={Services} />
      </Switch>
      <Footer/>
    </ContentProvider>
  );
}

export default App;