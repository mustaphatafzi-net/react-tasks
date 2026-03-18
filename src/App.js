<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import Article from './Article';

function App() {

  const FirstArticle="EL ENNAHAR TV"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"   
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        

        <Article
         name="ahmed" 
         username="tafzi" 
         content={FirstArticle}
         
         >
          <h1 style={{background:"yellow", color:"black"}}>hello world</h1>
        </Article>



        <Article name="ahmed" username="tafzi" content={FirstArticle}/>
        <Article name="ahmed" username="tafzi" content={FirstArticle}/>
        <Article name="ahmed" username="tafzi" content={FirstArticle}/>


      </header> 
=======
import './App.css';
import Header from "./Header"
import Post from './Post';
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:"flex", justifyContent:"center"}}>
{/* POSTS AND SIDE MENU CONTAINER */}
      <div style={{
        display:"flex",
        width:"70%"
      
      }}>

      {/* POST CONTAINER */}
      <div style={{ width : "70%"}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>
      {/* POST CONAINER=== */}

      {/* Side menu */}
      <div style={{width:"30%"}}>
        <SideMenu/>
      </div>
      {/* Side menu ==== */}

      </div>
    {/* POSTS AND SIDE MENU CONTAINER */}
      </div>
      

>>>>>>> bcd40e3eafcacfea8245c5d1057887423f08442e
    </div>
  );
}

export default App;
