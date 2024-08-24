import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { useSelector } from "react-redux"
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoute from "./PrivateRoute";
import PageLoader from "./components/loader/PageLoader";
import Welcome from "./pages/Welcome";

export default function App() {
  const userData = useSelector(state => state.auth?.userData);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route element={<PrivateRoute userData={userData} />}>
          {privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Route>

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route
          path="/welcome"
          element={userData ? <Navigate to="/" /> : <Welcome />}
        />
      </Routes>
    </Suspense>
  );
};