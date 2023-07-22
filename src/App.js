import "./App.css";
import Navbar from "./components/navbar/navbar";
import Image from "./components/imageCenter/image";
import Subtitlebody from "./components/subtitleBody/subtitlebody";
import LivelyCurtain from "./components/livelyCurtain/livelyCurtain";
import Work from "./components/Work/work";
import Form from "./components/form/form";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div classNameName="App">
      <Navbar />
      <Image />
      <Subtitlebody />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
