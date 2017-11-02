import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import TodoList from './component/TodoList';

import storeData from './Stores/TodoStore';

class App extends Component {
  render() {
    return (
      <div className="">

    {/*Header*/}
      <Header/>

    {/*Main Container*/}

      <TodoList data={storeData}/>
        
    {/*Footer*/}

      <Footer data={storeData}/>
      
      </div>
    );
  }
}

export default App;
