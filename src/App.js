import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import './App.scss';
// Providers
import ContentProvider from './providers/ContentProvider'
import UIProvider from './providers/UIProvider'
// Components
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'
// Pages
import Home from './pages/home/home.component'
import About from './pages/about/about.component'
import Properties from './pages/properties/properties.component'
import Services from './pages/services/services.component'
import PageNotFound from './pages/page-not-found/page-not-found.component'
// Custom Hooks
import useWindowScroll from './utils/useWindowScroll'

function App() {
  let location = useLocation();
  const { scrollTop } = useWindowScroll()

  useEffect(() => {
      scrollTop()
      // eslint-disable-next-line
  }, [location])

  return (
    <UIProvider>
      <ContentProvider>
        <Header/>
          <main>
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            <React.StrictMode>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/properties' component={Properties} />
                <Route exact path='/services' component={Services} />
                <Route path='*' component={PageNotFound} />
              </Switch>
            </React.StrictMode>
            {/* </Suspense> */}
          </main>
        <Footer/>
      </ContentProvider>
    </UIProvider>
  );
}

export default App;