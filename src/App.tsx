import { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

const technologyDataPromise = async() => {
  const requests = await fetch('/data.json')
  const data = await requests.json()
  return data;
}

function App(){

  const [technologyData] = useState(technologyDataPromise)
  return (
    <>
    <Nav/>
    <Banner/>
    </>
    
  )
}


export default App;