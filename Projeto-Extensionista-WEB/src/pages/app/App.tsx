import { About } from "../about/About";
import { Login } from "../login/Login";
import { Library } from "../library/Library";
import { Ranking } from "../ranking/Ranking";
import { Participate } from "../participate/Participate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../register/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/about" Component={About} />
        <Route path="/library" Component={Library} />
        <Route path="/participate" Component={Participate} />
        <Route path="/ranking" Component={Ranking} />
        <Route path="/register" Component={Register} />
      </Routes>
    </BrowserRouter>
  );
};
