import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LayoutClient from './component/LayoutClient'
import PageHome from './page/PageHome'

function App() {


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/ViSaoNenDungNuocHoaLan/' element={<LayoutClient />}>
            <Route index element={<PageHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
