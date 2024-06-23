import "./App.scss";
import "./index.css";
import Navbar from "./components/navBar/navbar";
import Header from "./components/header/header";
import { CustomCursor } from "react-custom-cursor";

const App = () => {
  return (
    <CustomCursor
      targets={["body"]}
      customClass="custom-cursor"
      options={{
        color: "#FF0080",
        outline: {
          color: "#7928CA",
          width: 2,
        },
        size: 20,
        type: "circle",
        animate: {
          speed: 1000,
          movement: "skew",
        },
      }}
    >
      <div className="app">
        <Navbar />
        <Header />
      </div>
    </CustomCursor>
  );
};

export default App;
