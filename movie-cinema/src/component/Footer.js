import {Component} from "react";

//class component tidak disarankan 
class Footer extends Component {
    render() {
      return (
        <footer>
          <h3>Copyright &copy;2024 Developed by {this.props.nama}</h3>
          <span>Make with ❤️</span>
        </footer>
      );
    }
  }

  export default Footer;