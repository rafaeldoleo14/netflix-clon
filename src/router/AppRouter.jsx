import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { NetflixRoutes } from "../netflixClon/routes/NetflixRoutes";
import { Loading } from "../netflixClon/components/Loading/Loading";

export const AppRouter = () => {
  const { status } = useCheckAuth();

  if (status === "checking") {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<NetflixRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </>
  );
};
