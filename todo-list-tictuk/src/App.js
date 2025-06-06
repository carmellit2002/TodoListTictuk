import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Containers/Homepage";
import CreateTaskPage from "./Containers/CreateTaskPage";
import "./app.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Homepage />} />
          <Route path="/createTask" element={<CreateTaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
