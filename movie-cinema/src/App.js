// import './App.css';
import { Component, component } from "react";
import Navbar from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import User from "./component/User/User.js";
import Footer from "./component/Footer/Footer.js";
import imgProfile from "./component/aku.png";
import Main from "./component/Main/Main.js";


function App() {

  return (
    <div className="container">
      <Navbar/>
      <Main/>
      
      {/* <Car merk="Ferarri"
       harga={200} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
      //  gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCk20rxpKvr0CwY-mIfooO6fLFrY0Oa5RKQ&s"
       aku
       beli={() => alert("Sudah dibeli")}
      /> */}



      <Footer nama = "Muhammad Firdaus"/>
      
    </div>
    
  );
}

export default App;


