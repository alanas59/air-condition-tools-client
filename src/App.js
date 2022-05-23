import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/Shared/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
         <Route path="/" element={<Home></Home>}/>
         <Route path="/home" element={<Home></Home>}/>
         <Route path="/login" element={<Login></Login>}/>
         <Route path="/register" element={<Register></Register>}/>
         <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
    <Footer></Footer>
    <ToastContainer />
    </div>
  );
}

export default App;
