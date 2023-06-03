import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import styles from "./index.css";
import Home from "./Home";
import CreateUser from "./CreateUser";
import UserManage from "./UserManage";
import RegCode from "./RegCode";
import Arena from "./Arena";
import CreateArena from "./CreateArena";
import BattleHistory from "./BattleHistory";
import ViewBattle from "./ViewBattle";
import Transaction from "./Transaction";
import CashIn from "./CashIn";
import CashOut from "./CashOut";
import ChangePassword from "./ChangePassword";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserManage />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/arena/create" element={<CreateArena />} />
        <Route path="/registration-code" element={<RegCode />} />
        <Route path="/history" element={<BattleHistory />} />
        <Route path="/history/view" element={<ViewBattle />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/cash-in" element={<CashIn />} />
        <Route path="/cash-out" element={<CashOut />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
  );
}

export default App;
