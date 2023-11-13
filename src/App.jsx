import "./styles.css"
import Populator from "./Populator";

function App() {
  return (
    <div className="site-wrapper">
      <div className="header">
        <h1 className="header-title">TTRPG Item Generator</h1>
        <p className="header-message">Create your own homebrew items for TTRPG games like Dungeons & Dragons.</p>
      </div>
      <Populator/>
    </div>
  
  );
}

export default App;

