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
      

    </div>
  );
}

export default App;
