import React from 'react'
import Login from './layouts/Login/Login'
import SignUp from "./layouts/SignUp/SignUp";

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
  );
}
