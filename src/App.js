import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Home from './Componenets/Home';
import TicketBook from './Componenets/TicketBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/ticketbook" element={<TicketBook />}></Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App;
