import {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import { blogger } from '../../utils/blogger';
import CustomInput from '../../components/CustomInput/Custom-Input';
import CustomButton from '../../components/CustomButtton/Custom-button';
import BlogList from '../../components/BlogList/BlogList';
import Footer from '../../components/Footer/Footer';


class Blog extends Component {
  constructor() {
    super()
    this.state ={
      blogger: [],
      searchfield:""
    }
  }
  componentDidMount(){
    fetch('https://guarded-wildwood-57519.herokuapp.com/artisans')
    .then(response => response.json())
    .then(Blog => {this.setState({blogger: Blog}) })
  }

  onValueChange = (value) => {
    this.setState({ searchfield: value })
  }
  
  render(){
    const filteredBlogger = this.state.blogger.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  
  
  return (
    <div>
      <Navbar/>
      <CustomInput placeholder="Search" style={{width:'20.5rem'}}/>
      <CustomButton title="Search" style={{width:"7rem"}}/>
      <BlogList blogger={filteredBlogger}/>  
      <Footer/>
    </div>
  );
}
}

export default Blog;
