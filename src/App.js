import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import "./App.css";
import { useState } from "react";
import BoxApp from "./components/box/Box";

const App = () => {
  const brandName = "Logo";
  const [userData, setuserData] = useState({});

  const getUserData = (user) => {
    setuserData(user);
  };

  return (
    <div className="App">
      <Header brandName={brandName} getUserData={getUserData} />
      <MainContent userData={userData} />
      <BoxApp />
      <Footer brandName={brandName} />
    </div>
  );
};

export default App;
