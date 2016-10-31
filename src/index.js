import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCqr5uV8E4qE50e-7EhC5YbgANvj_c-hpM";


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


ReactDOM.render(<App />, document.querySelector('.container'));
