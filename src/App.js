import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import img5 from "./images/img5.png";
import { MentorDetails } from "./constants";
function App() {
  const [num,setNum]=useState(0);
  const img =[img1, img2, img3, img4, img5];

  return (
    <div className="relative mx-[auto] w-8/12 my-10">
      <Card img={img} num={num} MentorDetails={MentorDetails} setNum={setNum}/>
      
    </div>
  );
}

export default App;
