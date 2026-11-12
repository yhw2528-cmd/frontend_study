import ReactDOM from "react-dom/client";
import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Post from "./components/Post";
import "./style/App.css";

const App = () => {
  return (
    <Fragment>
      <Header title="헤더(props)" subTitle="프론트 프로그래밍" />
      <Home>
        <Post />
      </Home>
      <Footer title="풋터(props)" />
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);