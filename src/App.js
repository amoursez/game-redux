
import { useEffect } from 'react';
import { fetchClues } from './store/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CluesList from './components/CluesList';

function App() {

  const dispatch = useDispatch()

  const{status, error} = useSelector(state=> state.clues)

  useEffect(()=>{
    dispatch(fetchClues())
  }, [dispatch])
  return (
    <div className="App">
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
     <CluesList/>
    </div>
  );
}

export default App;
