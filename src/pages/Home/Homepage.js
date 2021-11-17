import { Component } from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/CardList/CardList';
import CustomInput from '../../components/CustomInput/Custom-Input';
import './Homepage.css';

class Homepage extends Component {
  constructor() {
    super()
    this.state ={
      handy: [],
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({handy: users}) })
  }
  render(){
    const {handy} =this.state;
  return (
    <div className="Header">
      <NavBar />
      <div className= "responsive-searchbox">
        <CustomInput  placeholder="I am looking for ..." style={{width:"50.5rem", height:"2.3rem"}} />
        <CustomButton title ="Search" style={{ width:"9rem",height:"2.7rem" }} />
      </div>
      <CardList handy={handy}/>
      <Footer/>
    </div>
    );
  }
}

export default Homepage;