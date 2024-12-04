import './App.css';
import CCQuestion01 from './ClassComps/CCQuestion01';
import CCQuestion02 from './ClassComps/CCQuestion02';
import CCQuestion03 from './ClassComps/CCQuestion03';

function App() {
  return (
    <>
      <div className="card">
        <h3>Assignment 2</h3>
        <CCQuestion01 />
        <CCQuestion02 />
        <CCQuestion03 />
      </div>
    </>
  );
}

export default App;
