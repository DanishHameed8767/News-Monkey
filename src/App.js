import React,{ Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router,
Routes,
Route,
 } from 'react-router-dom';
export default class App  extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
          
        <Route exact element={<News pageSize={10} key="home" country='us' category='general'/>}  path='/'></Route>
        <Route exact element={<News pageSize={10} key="business" country='us' category='business'/>}  path='/business'></Route>
        <Route exact element={<News pageSize={10} key="entertainment" country='us' category='entertainment'/>}  path='/entertainment'></Route>
        <Route exact element={<News pageSize={10} key="health" country='us' category='health'/>}  path='/health'></Route>
        <Route exact element={<News pageSize={10} key="science" country='us' category='science'/>}  path='/science'></Route>
        <Route exact element={<News pageSize={10} key="sports" country='us' category='sports'/>}  path='/sports'></Route>
        <Route exact element={<News pageSize={10} key="technology" country='us' category='technology'/>}  path='/technology'></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

