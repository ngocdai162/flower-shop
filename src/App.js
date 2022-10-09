import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TestComponent } from './pages/TestComponent';
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
      <TestComponent/>
    </div>
  );
}

export default App;
