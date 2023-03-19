import React, {lazy, Suspense} from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styled/themeProvider'
import GlobalStyle from './styled/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserAuth from './components/login/UserAuth'
import CommonLayout from './components/common-layout/CommonLayout'
import Loader from './components/loader/Loader'
const LazyShop = lazy(() => import('./components/shop/index'));
const LazyHome = lazy(() => import('./components/home/index'));
const LazyCart = lazy(() => import('./components/cart/index'));
const LazyLogin = lazy(() => import('./components/login'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loader>loading...</Loader>}>
          <Routes>
            <Route path='/' element={<UserAuth><CommonLayout><LazyHome /></CommonLayout></UserAuth>} />
            <Route path='/shop' element={<UserAuth><CommonLayout><LazyShop /></CommonLayout></UserAuth>} />
            <Route path='/cart' element={<UserAuth><CommonLayout><LazyCart /></CommonLayout></UserAuth>} />
            <Route path='/login' element={<LazyLogin />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
