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
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({handy: users}) })
  }

  onChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render(){
    // const { handy, searchfield }=this.state;
    const filteredHandy = this.state.handy.filter(Handy => {
      return Handy.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  return (
    <div className="Header">
      <NavBar />
      <div className= "responsive-searchbox">
        <CustomInput onChange={this.onChange}  placeholder="I am looking for ..." style={{width:"50.5rem", height:"2.3rem"}} />
        <CustomButton title ="Search" style={{ width:"9rem",height:"2.7rem" }} />
      </div>
      <CardList handy={filteredHandy}/>
      <Footer/>
    </div>
    );
  }
}

export default Homepage;