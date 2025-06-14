import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'


function App() {

  return (
    <>
      <div  className="min-h-screen w-full bg-custom-white font-popins-regular"> 
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </HashRouter>
      </div>
    </>
  )
}

export default App
