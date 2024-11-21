import { Outlet } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
