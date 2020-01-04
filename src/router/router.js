import React, { Component } from 'react'
import { HashRouter,Link,Route,Redirect,Switch} from 'react-router-dom'
import Login from '../pages/login/login'
import Admin from '../pages/admin/admin'
class Router extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' component={Admin}></Route>
        </Switch>
      </HashRouter>
    )
  }

}

export default Router