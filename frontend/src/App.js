import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HotelsDetails from "./Components/ashraful.Component/HotelDetails/HotelsDetails";
import TourDetails from "./Components/ashraful.Component/TourDetails/TourDetails";
import RequireAuth from "./Components/RequireAuth";
import About from "./Pages/About/About";
import Bookings from "./Pages/Bookings/Bookings";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddHotel from "./Pages/Dashboard/NastedPages/AddHotel/AddHotel";
import AddTour from "./Pages/Dashboard/NastedPages/AddTour/AddTour";
import ManageHotels from "./Pages/Dashboard/NastedPages/ManageHotels/ManageHotels";
import ManageReviews from "./Pages/Dashboard/NastedPages/ManageReviews/ManageReviews";
import ManageTours from "./Pages/Dashboard/NastedPages/ManageTours/ManageTours";
import ManageUsers from "./Pages/Dashboard/NastedPages/ManageUsers/ManageUsers";
import Welcome from "./Pages/Dashboard/NastedPages/Welcome/Welcome";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import NotFound from "./Pages/NotFound/NotFound";
import Profile from "./Pages/Profile/Profile";
// import AddReview from "./Pages/Reviews/AddReview";
import Signin from "./Pages/Signin/Signin";
import Signup from "./Pages/Signup/Signup";
import Tour from "./Pages/Tour/Tour";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />}>
          <Route path="details/:id" element={<TourDetails />} />
        </Route>
        <Route path="/hotel" element={<Hotel />}>
          <Route path="details/:id" element={<HotelsDetails />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/addreview"
          element={
            <RequireAuth>
              <AddReview />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/bookings"
          element={
            <RequireAuth>
              <Bookings />
            </RequireAuth>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Welcome />} />
          <Route path="addtour" element={<AddTour />} />
          <Route path="addhotel" element={<AddHotel />} />
          <Route path="manageusers" element={<ManageUsers />} />
          <Route path="managehotels" element={<ManageHotels />} />
          <Route path="managetours" element={<ManageTours />} />
          <Route path="managereviews" element={<ManageReviews />} />
        </Route>

        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
