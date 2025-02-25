import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import HomePage from "./pages/Home";
import Admin from "./pages/Admin";
import './App.css'
import Spinner from './Components/Spinner/Spinner';

function App() {

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/admin" Component={Admin} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
