import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainContent from "./components/main-content/MainContent";
import "./App.css";
import BoxApp from "./components/box/Box";
import "./assets/css/root.css";

const App = () => {
  const brandName = "Logo";
  const [userData, setuserData] = useState({});
  const [theme, settheme] = useState("light");

  const getUserData = (user) => {
    setuserData(user);
  };

  return (
    <div className={`App ${theme}`}>
      <Header
        brandName={brandName}
        getUserData={getUserData}
        theme={theme}
        settheme={settheme}
      />
      <MainContent userData={userData} />
      <BoxApp />
      <Footer brandName={brandName} />
    </div>
  );
};

export default App;
