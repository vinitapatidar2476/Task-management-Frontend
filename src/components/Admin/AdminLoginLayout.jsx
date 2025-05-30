import React from "react";
import "../style/adminStyle.css";
import { Row, Col } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
export const AdminLoginLayout = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://www.transparenttextures.com/patterns/diamond-upholstery.png")`,
        backgroundColor: "#fffde7",
        backgroundRepeat: "repeat",
        minHeight: "100vh",
      }}
    >
      <Navigation />
      <Row style={{ minHeight: "80vh", margin: 0 }}>
        <Col md={2} className="side-bar p-4 bg-dark">
          <Link to="adminDashBoardMain" className="nav-link text-white mb-2">
            Dashboard
          </Link>
          <Link to="adminPendingTask" className="nav-link text-white mb-2">
            Pending Task
          </Link>
          <Link to="adminProgressTask" className="nav-link text-white mb-2">
            Progress Task
          </Link>
          <Link to="adminCompletedTask" className="nav-link text-white mb-2">
            Completed Task
          </Link>
          <Link to="adminAddDevelopers" className="nav-link text-white mb-2">
            Add Developers
          </Link>
          <Link to="adminAllDevelopers" className="nav-link text-white mb-2">
            All Developers
          </Link>
          <Link to="adminAddTask" className="nav-link text-white mb-2">
            Add Task
          </Link>
          <Link to="adminAllTask" className="nav-link text-white mb-2">
            All Task
          </Link>
          <Link to="adminLogout" className="btn btn-warning mt-3 w-100 fw-bold">
            Logout
          </Link>
        </Col>

        <Col md={10} className="p-4">
          <Outlet />
        </Col>
      </Row>
      <Footer />
    </div>
  );
};
