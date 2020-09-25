import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.scss';
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

// const Home = lazy(() => import('./pages/home/home.component'));
// const About = lazy(() => import('./pages/about/about.component'));
// const Properties = lazy(() => import('./pages/properties/properties.component'));
// const Services = lazy(() => import('./pages/services/services.component'));

// const Header = React.lazy(() => import('./components/header/header.component'));
// const Footer = React.lazy(() => import('./components/footer/footer.component'));

function App() {
  return (
    <ContentProvider>
      <Header/>
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <React.StrictMode>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/properties' component={Properties} />
            <Route exact path='/services' component={Services} />
          </Switch>
        </React.StrictMode>
        {/* </Suspense> */}
      <Footer/>
    </ContentProvider>
  );
}

export default App;