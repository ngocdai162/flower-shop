import 'antd/dist/antd.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { testStatusSelector } from './redux/selectors';
import { setStatus } from './redux/slice/testSlice';

function App() {
  const dispatch = useDispatch();
  const testStatus = useSelector(testStatusSelector);
  useEffect(() => {
    dispatch(setStatus(true))
    console.log(testStatus)
  },[])

  return (
    <div className="App">
     <p>Jjjjaa</p>
    </div>
  );
}

export default App;
