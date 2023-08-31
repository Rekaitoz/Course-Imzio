import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Center, Loader } from "@mantine/core";
import { useAuth } from "features/auth";

const LoadingScreen = () => (
  <Center className="w-full h-screen bg-body">
    <Loader color="green" />
  </Center>
);

const AuthLayout: React.FC = () => {
  const { creds } = useAuth();

  if (creds) return <Navigate to="/" replace />;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
};

export default AuthLayout;
