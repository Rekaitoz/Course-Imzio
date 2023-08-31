import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SidebarNavigation } from "types/navigation";
import { useAuth } from "features/auth";

import { Center, Loader } from "@mantine/core";
import Header from "./Header";

const LoadingScreen = () => (
  <Center className="w-full h-full bg-body">
    <Loader color="blue" />
  </Center>
);

const DashboardLayout: React.FC = () => {
  const { creds } = useAuth();

  if (!creds) return <Navigate to="/home" replace />;

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* <Sidebar navigations={navigations} /> */}

      <div
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
        id="content"
      >
        <Header />
        <Suspense fallback={<LoadingScreen />}>
          <div>
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default DashboardLayout;
