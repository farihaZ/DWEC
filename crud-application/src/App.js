import "./styles.css";
import CreateUser from "./Components/CreateUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList";
import UserDetails from "./Components/UserDetails";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Users" element={<UserList />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/UserDetail/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
