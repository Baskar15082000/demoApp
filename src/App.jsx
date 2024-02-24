import "./App.css";
import Swip from "./Swip"
import ShareModal from "./ShareModal";

function App() {
  return (
    <div className="background">
      <div style={{overflow:"hidden"}}>
        <img
          className="backgroundImage"
          src="\pngtree-christmas-star-spot-red-background-image_512206.jpg"
          alt=""
        /> 
         <Swip />
      </div>
      <div style={{position:"absolute",bottom:"20%",right:"10%" }}>
        <ShareModal  />
      </div>
    </div>
  );
}

export default App;
