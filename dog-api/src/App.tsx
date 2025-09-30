import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { Dispatch, ReduxState } from 'redux';
import { fetchDogImage } from './public/actions';

function App() {
  const rootState = useSelector((state: ReduxState) => state);
  const dispatch: Dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchDogImage());
        }}
      >
        New dog
      </button>
    </div>
  );
}

export default App;
