import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { setInitialAuthState } from "./redux/actions/authActions";

export default function PrivateRoute({ userData }) {
    const isAuthenticated = useMemo(() => {
        return (userData) => {
          return userData;
        };
    }, [userData]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated(userData)) {
            dispatch(setInitialAuthState(navigate));
        }
    }, [dispatch, navigate, userData, isAuthenticated]);

    return isAuthenticated(userData) ? (
        <Outlet />
    ) : (
        <Navigate to="/welcome" />
    );
};
