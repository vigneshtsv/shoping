import React,{useState} from "react";
import Card from "./components/Card";
import TapBar from "./components/TopBar";
import Header from "./components/Header";

function App() {
  let [cart,setCart] = useState(0)
  return <>
      <TapBar cart={cart} setCart={setCart}/>
      {/* <Header /> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Card />
          </div>
        </div>
      </section>
    </>
}

export default App;
