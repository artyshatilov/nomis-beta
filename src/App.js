import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'

import { Home } from './pages/home/Home'
import { Getscore } from './pages/getscore/Getscore'
import { Myscore } from './pages/myscore/Myscore'

const App = () => {
  return (
    <>
      <Header ></Header>
        <main>
          <div className='wrapper'>
            <Routes>
            <Route path='/' element={<Home ></Home>} />
            <Route path='/score' element={<Getscore ></Getscore>} />
            <Route path='/score:wallet' element={<Myscore ></Myscore>} />
            <Route path='*' element={<Home ></Home>} />
            </Routes>
          </div>
        </main>
      <Footer ></Footer>
    </>
  )
}

export default App