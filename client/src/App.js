import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./Components/home/Home.jsx"
import Form from "./Components/form/Form.jsx"
import Detail from "./Components/detail/Detail.jsx"
import Landing from "./Components/landing/Landing.jsx"





function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/detail/:id" element={<Detail/>}/>
        <Route exact path="/create" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
