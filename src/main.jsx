import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router';
import './index.css'

import App from './App.jsx'
import Navbar from "@components/Navbar.jsx";
import EventDetail from "@pages/EventDetail.jsx";
import Events from '@pages/Events.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" index element={<App/>}/>
          <Route path="/events" element={<Events />}/>
          <Route path="/events/:slug" element={<EventDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
