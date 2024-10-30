import "./App.css";
import Sidenav from "./Sidenav";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidenav />
        {/* Manually enter the path and observe the elements */}
        <Routes>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
