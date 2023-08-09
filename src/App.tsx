import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { VendingMachine } from "./views/VendingMachine";
import { NotFound } from "./views/404";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/vending-machine" element={<VendingMachine />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
