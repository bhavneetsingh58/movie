import './App.css';
// import Movie from './components/Movie'
// import Jumbotron from 'reactstrap'
import "bootstrap/dist/css/bootstrap.css";
// import {Jumbotron,Container} from 'reactstrap'

import IndexPage from './components/IndexPage';
import SearchResult from './components/SearchResult';
function App() {
  return (
    <div className="App">
      <IndexPage></IndexPage>
      {/* <SearchResult/> */}
    </div>

  );
}

export default App;
