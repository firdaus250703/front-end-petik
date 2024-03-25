// import './App.css';
import { Component, component } from "react";
import Header from "./component/Header.js";
import Car from "./component/Car.js";
import User from "./component/User.js";
import Footer from "./component/Footer.js";
import imgProfile from "./component/aku.png";

function App() {
  return (
    <div className="App">
      <Header/>
     <h1>hello world</h1>
     
      <Car merk="Ferarri"
       harga={200} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
      //  gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCk20rxpKvr0CwY-mIfooO6fLFrY0Oa5RKQ&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

      <User
      nama="Muhammad firdaus"
      alamat="Surabaya"
      angkatan={100}
      hobi={['ngoding', 'Mewarnai']}
      isGraduate={false}
      gambar={imgProfile}
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="bambang pacul"
      alamat="Bandung"
      angkatan={10}
      hobi={['ngoding', 'Mewarnai']}
      isGraduate={true}
      gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMFZj_SHqoOksbNGnIMAjshaRtQtqG8gx7A&s"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      alamat="Jombang"
      angkatan={11}
      hobi={['Tidur', 'Mancing']}
      isGraduate={true}
      gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLxr2aLhWAPu4D-j2tUhyktYrttkY8vU00w&s"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <Footer nama = "Muhammad Firdaus"/>
    </div>
    
  );
}

export default App;


