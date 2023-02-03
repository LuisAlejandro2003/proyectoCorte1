import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Bus from "../pages/Bus";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Bus" element={<Bus></Bus>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
