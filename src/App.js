import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header";
import Footer from "./Pages/Shared/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Pages/Shared/NotFound";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";
import Review from "./Pages/Dashboard/Review";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Update from "./Pages/Dashboard/Update";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import Purchase from "./Pages/Purchase/Purchase";
import Payment from "./Pages/Dashboard/Payment";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import Profile from "./Pages/Shared/Profile";
import RequireAuth from "./Pages/Login/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        {/* nested route */}
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path="my-profile" element={<MyProfile></MyProfile>} />
          <Route path="add-review" element={<Review></Review>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
          <Route path="update/:email" element={<Update></Update>} />
          <Route
            path="manage-products"
            element={<ManageProducts></ManageProducts>}
          />
          <Route path="make-admin" element={<MakeAdmin></MakeAdmin>} />
          <Route path="add-product" element={<AddProduct></AddProduct>} />
          <Route path="my-orders" element={<MyOrders></MyOrders>} />
          <Route path="manage-orders" element={<ManageOrders></ManageOrders>} />
        </Route>
        {/* nested route */}
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }
        />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
