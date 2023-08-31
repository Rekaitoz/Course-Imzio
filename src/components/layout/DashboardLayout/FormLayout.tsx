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

const FormLayout: React.FC = () => {
  const { creds } = useAuth();

  if (!creds) return <Navigate to="/" replace />;

  return (
    <div className="flex h-screen overflow-hidden ">
      {/* <Sidebar navigations={navigations} /> */}

      <div
        className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
        id="content"
      >
        {/* <Header /> */}
        <Suspense fallback={<LoadingScreen />}>
          <div className="px-8 pt-16 sm:px-10 lg:px-14 py-8 pb-14 w-full max-w-8xl mx-auto">
            <Outlet />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default FormLayout;
