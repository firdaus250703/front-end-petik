import aku from "./aku.png"

const Car = (props) => {
    const { merk, harga, isNew, colors, beli } = props;
    return (
      <>
      <img src={aku} alt="foto-mobil"/>
      <h3>Merk Mobil : {merk}</h3>
      <h4>Harga Mobil : Rp {harga} Triliun</h4>
      <h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5>
      <h5>Varian : {colors.map((color) => color + ", ")}</h5>
      <button onClick={beli} > Beli  </button>
      </>
    );
  }

  export default Car;