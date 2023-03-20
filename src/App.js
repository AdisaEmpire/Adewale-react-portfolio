import './App.css';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='main'>
        <Sidebar />
        <Contact />
      </div>
    </>
  );
}

export default App;
