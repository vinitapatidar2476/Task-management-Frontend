import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AdminLogin } from "./components/Admin/AdminLogin";
import { DeveloperLogin } from "./components/developer/DeveloperLogin";
import { DeveloperLoginLayout } from "./components/developer/DeveloperLoginLayout";
import { DeveloperDashBoard } from "./components/developer/DeveloperDashBoard";
import { DeveloperPendingTask } from "./components/developer/DeveloperPendingTask";
import { DeveloperProgressTask } from "./components/developer/DeveloperProgressTask";
import { DeveloperCompletedTask } from "./components/developer/DeveloperCompletedTask";
import { AdminLoginLayout } from "./components/Admin/AdminLoginLayout";
import { AdminDashboard } from "./components/Admin/AdminDashboard";
import { AdminPendingTask } from "./components/Admin/AdminPendingTask";
import { AdminCompletedTask } from "./components/Admin/AdminCompletedTask";
import { AdminProgressTask } from "./components/Admin/AdminProgressTask";
import { AdminAllTask } from "./components/Admin/AdminAllTask";
import { AdminAddTask } from "./components/Admin/AdminAddTask";
import { AdminAllDevelopers } from "./components/Admin/AdminAllDevelopers";
import { AdminAddDevelopers } from "./components/Admin/AdminAddDevelopers";
import { HomePage } from "./components/HomePage";
import { DeveloperLogout } from "./components/developer/DeveloperLogout";
import { AdminLogout } from "./components/Admin/AdminLogout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/developerLogin" element={<DeveloperLogin />} />

          {/* developer Routes */}
          <Route
            path="/developerLoginLayout"
            element={<DeveloperLoginLayout />}
          >
            <Route
              path="/developerLoginLayout/developerDashBoardMain"
              element={<DeveloperDashBoard />}
            />
            <Route
              path="/developerLoginLayout/developerPendingTask"
              element={<DeveloperPendingTask />}
            />
            <Route
              path="/developerLoginLayout/developerProgressTask"
              element={<DeveloperProgressTask />}
            />
            <Route
              path="/developerLoginLayout/developerCompletedTask"
              element={<DeveloperCompletedTask />}
            />
            <Route
              path="/developerLoginLayout/developerLogout"
              element={<DeveloperLogout />}
            />
          </Route>
          {/* admin routes */}
          <Route path="/adminLoginLayout" element={<AdminLoginLayout />}>
            <Route
              path="/adminLoginLayout/adminDashBoardMain"
              element={<AdminDashboard />}
            />
            <Route
              path="/adminLoginLayout/adminPendingTask"
              element={<AdminPendingTask />}
            />
            <Route
              path="/adminLoginLayout/adminProgressTask"
              element={<AdminProgressTask />}
            />
            <Route
              path="/adminLoginLayout/adminCompletedTask"
              element={<AdminCompletedTask />}
            />
            <Route
              path="/adminLoginLayout/adminAddDevelopers"
              element={<AdminAddDevelopers />}
            />
            <Route
              path="/adminLoginLayout/adminAllDevelopers"
              element={<AdminAllDevelopers />}
            />
            <Route
              path="/adminLoginLayout/adminAddTask"
              element={<AdminAddTask />}
            />
            <Route
              path="/adminLoginLayout/adminAllTask"
              element={<AdminAllTask />}
            />
            <Route
              path="/adminLoginLayout/adminLogout"
              element={<AdminLogout />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
function PageNotFound() {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <h5>
        <Link to="/">Home</Link>
      </h5>
    </div>
  );
}
export default App;
