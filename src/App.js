import "./App.css";
import Video from "./videos/video.mp4";
import logo from "./images/digitama-logo.png";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>WEB SMS COMING SOON</p>
        <a
          className="App-link"
          href="https://websms-two.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sample web
        </a>
      </header> */}
      <video
        autoPlay
        muted
        loop
        class="vb"
        src={Video}
        type="video/mp4"
      ></video>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="main">
          <h1 className="cms">Coming Soon</h1>
        </div>
        <div className="main">
          <h4 className="lorem">Lorem ipsum dolor sit amet</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
