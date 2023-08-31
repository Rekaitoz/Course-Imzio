import { Card } from "@mantine/core";
import { LoginForm, RegisterForm } from "../components";

const Register: React.FC = () => {
  return (
    <Card
      className="h-fit w-full  max-w-md lg:max-w-6xl px-10 py-8 pb-14 mx-5 bg-white grid grid-cols-1 lg:grid-cols-2 "
      shadow="sm"
      radius="xl"
    >
      <div className="w-full hidden lg:flex">
        <div className="absolute -top-10 -left-96  w-[80%] h-[140%] bg-[#3282B8] rounded-full"></div>
        <img
          src="/Login/human.png"
          className="absolute right-[50%] bottom-2 transform -scale-x-100 w-[620px]"
          alt=""
        />
        <img
          src="/Login/awan1.png"
          className="absolute left-[13%] top-[24%] w-[280px] h-[130px] transform -scale-x-100 rounded-[175px]"
          alt=""
        />
        <img
          src="/Login/awan2.png"
          className="absolute left-[-2%] top-[6%] w-[280px] h-[130px] transform -scale-x-100 rounded-[175px]"
          alt=""
        />
      </div>
      <div className="w-full lg:pl-16 lg:pr-5 text-center lg:text-left">
        <div className="-space-y-3 pb-2 text-end w-full">
          <div className="text-sky-900 text-[28px] font-bold">IMZIO</div>
          <div className="text-black text-opacity-80 text-xs font-semibold tracking-[2.74px]">
            Education
          </div>
        </div>
        <div className="-space-y-2 pb-2">
          <div className="text-black text-[28px] font-bold">Sign Up</div>
          <div className="text-black text-opacity-60 text-sm font-normal">
            All in One Website to help
            <br />
            you manage Event and Course.{" "}
          </div>
        </div>
        <RegisterForm />
      </div>
    </Card>
  );
};

export default Register;
