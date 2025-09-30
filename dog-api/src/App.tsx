import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from 'redux';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <button>New dog</button>
    </div>
  );
}

export default App;
