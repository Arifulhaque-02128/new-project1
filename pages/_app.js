import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Store/Reducers/Reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
