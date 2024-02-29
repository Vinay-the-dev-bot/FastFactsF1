import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MainRoute from "./MainRoute/MainRoute";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <MainRoute />
      </Router>
    </>
  );
}

export default App;
