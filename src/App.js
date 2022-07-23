import './App.css';
// import Head from './portion/Head'
// import Body from './portion/Body'
// import Login from './pages/Login'
import Home from './pages/Home'
import {
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact to="/" component={Home} />
    </div>
  );
}

export default App;
