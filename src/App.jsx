import "./styles.css"
import Populator from "./Populator";

function App() {
  return (
    <div className="site-wrapper">
      <div className="header">
        <h1 className="header-title">TTRPG Item Generator</h1>
        <h2 className="header-message">Create your own homebrew items for TTRPG games like Dungeons & Dragons.</h2>
      </div>
      <Populator/>
    </div>
  
  );
}

export default App;

