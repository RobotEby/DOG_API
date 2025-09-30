import { useDispatch, useSelector } from 'react-redux';
import type { ThunkDispatch, ThunkAction } from 'redux-thunk';
import type { AnyAction } from 'redux';
import { fetchDogImage } from './public/actions';

interface RootState {
  isFetching: boolean;
  imageURL: string;
  errorMessage: string;
}

function App() {
  const rootState = useSelector((state: RootState) => state);
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  if (rootState.isFetching) return <p>Loading...</p>;

  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchDogImage() as ThunkAction<Promise<void>, RootState, unknown, AnyAction>);
        }}
      >
        New dog
      </button>
    </div>
  );
}

export default App;
