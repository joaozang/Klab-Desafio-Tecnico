import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage/AdminPage";
import { HomePage } from "../pages/HomePage/HomePage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
