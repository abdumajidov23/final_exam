import './App.css'
import MovingText from './components/MovingText';
import Snowfall from './components/Snowfall';
import Routers from './router';

function App() {

  return (
    <>
      <Routers />
      <MovingText />
      <Snowfall />
    </>
  );
}

export default App
