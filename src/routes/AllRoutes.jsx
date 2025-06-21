import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Loading } from "../components/Loading";

const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/products"
        element={
          <Suspense fallback={<Loading />}>
            <ProductPage />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<Loading />}>
            <ProductDetailsPage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Loading />}>
            <ContactUsPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
