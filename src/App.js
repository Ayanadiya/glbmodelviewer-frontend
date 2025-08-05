
import './App.css';
import Viewer from './components/Viewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='App-main'>
        <Viewer modelurl={"/models/Lighthouse_by_get3dmodels.glb"} />
      </main>
    </div>
  );
}

export default App;
