import React from "react";
import Home from "./Components/Home.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";

import Footer  from "./Components/Footer/Footer.jsx";
import Sidebar from "./Components/SideBar/Sidebar.jsx"

import Contact from "./Components/SideBar/Contact.jsx";
import HTU from "./Components/SideBar/HowToUse.jsx";
import AllBusStands from "./Components/SideBar/AllBusStands.jsx";
// import Booking from "./Components/SideBar/BookATicket.jsx"
function App() {
  return (
    <>
      <Sidebar/>
      <Navbar />
      <AllBusStands />
      {/* <Home /> */}
      {/* <Contact/> */}
      {/* <HTU /> */}
      {/* <Booking/> */}
      <Footer/>
    </>
  );
}

export default App;
