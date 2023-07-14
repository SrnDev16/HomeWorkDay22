import "./App.css";
import CheckOut from "./pages/CheckOut";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="check_out" element={<CheckOut/>}/>
    </Routes>
  );
}

function WrapApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default WrapApp;
