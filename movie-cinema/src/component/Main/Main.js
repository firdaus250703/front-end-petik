import User from "../User/User.js";
import Car from "../Car/Car.js";
import "./Main.css";


const Main = () => {
    return (
        <div className="content">
      <User
      nama="Muhammad firdaus"
      member="paltinum"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="bambang pacul"
      member="gold"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

     <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

     <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      <User
      nama="suyanto"
      member="silver"
      tombol={() => alert("Profile nama telah dibuka")}
      />

      


      {/* Car */}


      <Car merk="Lamborghini"
       harga={70} 
       isNew={true} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
      //  gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCk20rxpKvr0CwY-mIfooO6fLFrY0Oa5RKQ&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

      <Car merk="Ferarri"
       harga={200} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
      //  gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCk20rxpKvr0CwY-mIfooO6fLFrY0Oa5RKQ&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

        </div>
    );
};

export default Main;