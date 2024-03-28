import User from "../User/User.js";
import Car from "../Car/Car.js";
import Movies from "../Movies/Movies.js";
import "./Main.css";
import Hero from "../Hero/Hero.js";
import Counter from "../Counter/Counter.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";


const Main = () => {
  const datas = [
    {
      nama:"Muhammad firdaus",
      member:"paltinum",
      message: "Tetap malas"
    },
    {
      nama:"bambang pacul",
      member:"gold",
      message: "jangan menyerah"
    },
    {
      nama:"bambang pacul",
      member:"gold",
      message: "Tidur yang nyenyak"
    },
    {
      nama:"bambang pacul",
      member:"gold",
      message: "makan yang banyak"
    },
    {
      nama:"bambang pacul",
      member:"gold",
      message: "ikuti pelajaran"
    },
    {
      nama:"bambang pacul",
      member:"gold",
      message: "selalu positif"
    },
    {
      nama:"bambang pacul",
      member:"gold",
      message: "jadi orang sukses"
    },
  ]
    return (
        <div className="content">


      {/* Car */}


      {/* <Car merk="Lamborghini"
       harga={70} 
       isNew={true} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
       gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCk20rxpKvr0CwY-mIfooO6fLFrY0Oa5RKQ&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

      <Car merk="Ferarri"
       harga={200} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
       gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTbWRxwsi-cAvLpmhrVA1V_-w8Yl57I1rFWg&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

       <Car merk="avanza"
       harga={0} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
       gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwHdVmdI19ChhFCooVLTguZQeui4_5oBxuw&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

       <Car merk="kijang"
       harga={200} 
       isNew={true} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
       gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKaqJJLNUM_9kmjy2EfCakJUmc9SnrCafrg&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

       <Car merk="mr. bean"
       harga={350} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
       gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJR7_-rm_jpMz-uSOpiyFggTu1BkA3P7u4bg&s"
       aku
       beli={() => alert("Sudah dibeli")}
      />

<Car merk="mr. bean"
       harga={350} 
       isNew={false} 
       colors={['Hitam', 'Putih', 'Abu-abu']}
       gambar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJR7_-rm_jpMz-uSOpiyFggTu1BkA3P7u4bg&s"
       aku
       beli={() => alert("Sudah dibeli")}
      /> */}
      <Hero/>

      <Movies/>

      {
        datas.map((data) => (
        <User
         nama={data.nama} 
         member={data.member} 
         message={() => alert(data.message)}/>))
      }

      {/* <Counter/> */}
      
        </div>
    );
};

export default Main;