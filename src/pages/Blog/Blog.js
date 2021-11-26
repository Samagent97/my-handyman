import {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
// import { blogger } from '../../utils/blogger';
import BlogList from '../../components/BlogList/BlogList';
import Footer from '../../components/Footer/Footer';
import SearchBox from '../../components/SearchBox/SearchBox';


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
    .then(artisans => {this.setState({blogger: artisans}) })
  }

  onValueChange = (value) => {
    this.setState({ searchfield: value })
  }

  resetInput = () => {
    this.setState({searchfield:""})}
  
  render(){
    const filteredBlogger = this.state.blogger.filter(item => {
      return item.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
  
  
  return (
    <div>
      <Navbar/>
      <SearchBox onValueChange={this.onValueChange} resetInput={this.resetInput}/>
      <BlogList blogger={filteredBlogger}/>  
      <Footer/>
    </div>
  );
}
}

export default Blog;
