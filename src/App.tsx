import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";

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
    <Suspense fallback={<p>loading...</p>}>
      <Technologies technologyData={technologyData}/>
    </Suspense>
    <Footer/>
    </>
    
  )
}


export default App;