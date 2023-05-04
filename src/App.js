import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import styles from "./index.css";
import Home from "./Home";
import CreateUser from "./CreateUser";
import UserManage from "./UserManage";
import RegCode from "./RegCode";
import Arena from "./Arena";
import CreateArena from "./CreateArena";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<UserManage />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/arena/create" element={<CreateArena />} />
        <Route path="/registration-code" element={<RegCode />} />
      </Routes>
    </Router>
  );
}

export default App;
