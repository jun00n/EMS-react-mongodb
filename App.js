import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Homepage from './Homepage';
import Add from './Add';
import Edit from './Edit';
import View from './View';
import Delete from './Delete';



function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
    <Route path='' element={   <Homepage/>}/>
    <Route path='add' element={   <Add/>}/>
    <Route path='view/:id' element={   <View/>}/>
    <Route path='edit/:id' element={   <Edit/>}/>
    <Route path='delete/:id' element={   <Delete/>}/>
    </Routes>
    </div>
  );
}

export default App;
