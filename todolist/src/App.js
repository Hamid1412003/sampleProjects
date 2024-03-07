import { useState } from 'react';
import './App.css';
import Table from './components/Table';

function App() {

  const [inputText, setInputText] = useState("")
  const [strs, setStrs] = useState([])

  function SubmitHandler(event) {
    if (event.key === 'Enter') {
      EnterHandler();
    }
  }
  function EnterHandler() {
    setStrs([...strs, inputText]);
    setInputText("");
  }
  function handleDelete(e) {
    setStrs(e)
  }
  function handleEdit(e) {
    setStrs(e);
  }

  return (
    <div className='App'>
      <div className="inputs">
        <h1 className='todo'>TODO LIST</h1>
        <div>
          <input className='inp' type='text' value={inputText} onChange={(e) => setInputText(e.target.value)}
            onKeyDown={SubmitHandler}
          />
          <button className='bt' onClick={EnterHandler}>
            ADD
          </button>
          <button className='bt' onClick={() => { setStrs(strs.slice(0, -1)) }}>CLEAR</button>
          <button className='bt' onClick={() => { setStrs([]) }}>RESET</button>
        </div>
        <div className='table'>
          <Table pass={strs} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
