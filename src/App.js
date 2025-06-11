import Header from "./MyComponents/Header";
import "./App.css";
import { Body1, Body2 } from "./MyComponents/Body";
import Footer from "./MyComponents/Footer";
function App() {
  return (
    <>
       <Header/>
       <div style={{ marginBottom: "20px" }}></div>
       <Body1/>
       <div style={{ marginBottom: "40px" }}></div>
       <Body2/>
       <div style={{ marginBottom: "20px" }}></div>
       <Footer/>
    </>
  );
}

export default App;
