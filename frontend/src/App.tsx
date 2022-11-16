import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
