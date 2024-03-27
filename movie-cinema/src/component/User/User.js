import "./User.css";


const User = (props) => {
    const { nama, member, message, gambar} = props;
    // const tableStyle = {border:"1px solid black", width : "300px", margin: "20px auto"}
    // const headerStyle = {textAlign: "center", fontWeight: "bold"};
    // const cellStyle = {textAlign: "center"};
    return (
      <>
      <img src={gambar} alt=""/>
      <table className="card">
        <thead className="card-head">
           <tr>
          <td colSpan={2} >{nama}</td>
          </tr>
        </thead>
        <tbody className="card-body">
          <tr>
          <td colSpan={2} >{member}</td>
        </tr>
        <tr>
          <td><button onClick={message}> message </button></td>
          <td><button>subscribe</button></td>
        </tr>
        </tbody>
      </table> 
      </>
    );
  }

// 

  
  export default User;







     