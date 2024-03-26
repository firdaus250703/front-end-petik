import aku from "./../aku.png"
import "./Car.css";


const Car = (props) => {
    const { merk, harga, isNew, colors, beli } = props;
    return (
      <>
      {/* <img src={aku} alt="foto-mobil" width={264} /> */}
      <table className="cardcar">
        <thead className="cardcar-head">
          <tr>
            <td><h3>Merk Mobil : {merk}</h3></td>
          </tr>
        </thead>
        <tbody  className="cardcar-body">
          <tr>
            <td><h4>Harga Mobil : Rp {harga} Miliar</h4></td>
          </tr>
          <tr>
            <td><h5>Keadaan Mobil : {isNew ? "Baru" : "Bekas"}</h5></td>
          </tr>
          <tr>
            <td><h5>Varian : {colors.map((color) => color + ", ")}</h5></td>
          </tr>
        </tbody>
             <button onClick={beli} > Beli  </button>
      </table>
      
      </>
    );
  }

  export default Car;