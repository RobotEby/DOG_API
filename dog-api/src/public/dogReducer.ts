import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from './actions';

const initialStore = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

type ActionType = {
  payload: string;
  type: string;
};

function dogReducer(state = initialStore, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        imageURL: action.payload,
        errorMessage: '',
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
        imageURL: '',
      };

    default:
      return false;
  }
}

export default dogReducer;
