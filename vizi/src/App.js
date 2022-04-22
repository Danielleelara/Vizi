import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Payments from "./Pages/Payments";
import Details from "./Pages/Details";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/payments" element={<Payments />}></Route>
          <Route path="/details/:id" element={<Details />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
