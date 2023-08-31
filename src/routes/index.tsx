import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import {
  AuthLayout,
  LogReg,
  DashboardLayout,
  FormLayout,
  ArticleLayout,
  CourseLayout,
} from "components/layout";
import { lazyImport } from "utils/lazyImport";

const { Login } = lazyImport(() => import("features/auth"), "Login");
const { Register } = lazyImport(() => import("features/auth"), "Register");
const { Form } = lazyImport(() => import("features/auth"), "Form");

const { Home } = lazyImport(() => import("features/home"), "Home");
const { Dashboard } = lazyImport(() => import("features/home"), "Dashboard");
const { Hire } = lazyImport(() => import("features/home"), "Hire");
const { Subscribe } = lazyImport(
  () => import("features/subscriber"),
  "Subscribe"
);
const { ProgramShop } = lazyImport(
  () => import("features/program"),
  "ProgramShop"
);
const { MyProgram } = lazyImport(() => import("features/program"), "MyProgram");
const { Profile } = lazyImport(() => import("features/profile"), "Profile");
const { Article } = lazyImport(() => import("features/article"), "Article");
const { ArticleDetail } = lazyImport(
  () => import("features/article"),
  "ArticleDetail"
);
const { ArticleRead } = lazyImport(
  () => import("features/article"),
  "ArticleRead"
);
const { Course } = lazyImport(() => import("features/course"), "Course");
const { QuizDetail } = lazyImport(
  () => import("features/course"),
  "QuizDetail"
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ArticleLayout />}>
        <Route path="/ArticleRead" element={<ArticleRead />} />
      </Route>

      <Route path="/" element={<FormLayout />}>
        <Route path="/form" element={<Form />} />
        <Route path="/quizdetail" element={<QuizDetail />} />
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/programshop" element={<ProgramShop />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/myprogram" element={<MyProgram />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/article" element={<Article />} />
        <Route path="/articledetail" element={<ArticleDetail />} />
      </Route>

      <Route path="/" element={<CourseLayout />}>
        <Route path="/course" element={<Navigate to="/course/textbook" />} />
        <Route path="/course/:study" element={<Course />} />
      </Route>

      <Route path="/" element={<AuthLayout />}>
        <Route path="/home" element={<Home />} />
        <Route element={<LogReg />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
