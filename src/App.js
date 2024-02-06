import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import Pagination from './components/Pagination';
import { useContext, useEffect } from 'react';
import {AppContext} from './Context/AppContext';
function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  useEffect(()=>{
    fetchBlogPosts()
  },[])
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
