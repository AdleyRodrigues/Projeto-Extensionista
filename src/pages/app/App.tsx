import "./App.css";
import About from "../about/About";
import { Login } from "../login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="/library" Component={About} />
        <Route path="/participate" Component={About} />
        <Route path="/ranking" Component={About} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
