import { Routes, Route } from "react-router-dom"
import Login from './components/login';
import Registration from './components/registration';
import Contact from "./components/contact";
import View from "./components/view";
import Edit from "./components/edit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="registration" element={ <Registration/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="/edit/:id" element={ <Edit/> } />
        <Route path="/view" element={ <View/> } />
      </Routes>
    </div>
  );
}

export default App;
