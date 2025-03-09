import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css";
import Spinner from "./Components/Spinner/Spinner";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Registeration from "./pages/Registeration";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route exact path="/" Component={HomePage} />
            <Route path="/admin" Component={Admin} />
            <Route path="/register" Component={Registeration} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
