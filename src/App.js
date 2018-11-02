import React, { Component } from 'react';
import Header from './common/header';
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import Register from './pages/register';
import HotTitle from './pages/hottitle/loadable';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/Write' component={Write}></Route>
            <Route exact path='/hottitle' component={HotTitle}></Route>
            <Route exact path='/detail/:id' component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
// exact当路径与path完全一样时才用其路径
//react-router-dom使页面内容随路劲改变而改变