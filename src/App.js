import Typist from 'react-typist';
import ReactRoundedImage from 'react-rounded-image';
import logo from './image.webp';
import './App.css';
import config from './config.json'

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark nav">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1 text-white">ASM</span>
        </div>
      </nav>
      <header className="App-header">
        <ReactRoundedImage 
          image={logo}
          roundedColor="#ffffff"
          roudedSize="13"/><br/>
        <p>
          <h1>Hi, I am Alvif Sandana Mahardika</h1>
          <Typist>
            Backend Developer | Desktop Developer | Linux 
          </Typist>
        </p><br/>
        <div className="icons-social">
          {config.icons.map(icon => (
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href={ `${icon.url}` }>
                <i className={ `fab ${icon.img}` }></i>
              </a>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
