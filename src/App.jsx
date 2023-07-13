import Snap_Shop from "./components/Snap_Shot";
import "./App.css";

import { useEffect, useRef} from 'react';
function App() {
  const ref = useRef (null);
  useEffect(() => {
    const element =ref.current;
    
    // console.log(element.id);
    setTimeout(() => {
     element.style.display="none"
    },800)
  }, [])
   
  return (
    <div className="App">
      <Snap_Shop></Snap_Shop>
   <div className="loader" ref={ref} id="loader"></div>
    </div>
  );
}
export default App;
