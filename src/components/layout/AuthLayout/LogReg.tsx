import { Outlet } from "react-router-dom";

const LogReg = () => {
  return (
    <div className="bg-[#0F4C75]">
      <div className="h-screen grid grid-cols-1  bg-[#0F4C75] ">
        <div className="flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LogReg;
