import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import PublicRoute from "./routes/PublicRouter";

import About from "./Pages/About";

// import Features from "./Pages/Features";
import ProtectedRouter from "./routes/ProtectedRouter";
import Contact from "./Pages/Contact";
import Todo from "./Pages/Todo";
import Login from "./Pages/Login";


function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
         <Route
          path="/todo"
          element={
            <ProtectedRouter>
              <Todo />
            </ProtectedRouter>
          }
        />
        
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
