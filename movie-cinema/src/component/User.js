

const User = (props) => {
    const { nama, alamat, angkatan, hobi, isGraduate, tombol, gambar} = props;
    return (
      <>
      <ul>
        <img src={gambar} alt=""/>
        <li>Nama User : {nama}</li>
        <li>Alamat User : {alamat}</li>
        <li>Hobi : {hobi}</li>
        <li>Angkatan : {angkatan}</li>
        <li>Status : {isGraduate ? "Lulus" : "Sedang Belajar"}</li>
        <button onClick={tombol}> Lihat profile </button>
      </ul>
      
      </>
    );
  }

  export default User;