import { FunctionComponent } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/home/home.page'

interface AppProps {
  message: string
}

const App: FunctionComponent<AppProps> = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={HomePage} />
    </Routes>
  </BrowserRouter>
}

export default App
