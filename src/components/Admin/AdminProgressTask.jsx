import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import axios from "axios";
export const AdminProgressTask = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminLoginKey");
    axios
      .get("http://localhost:4000/api/admin/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch tasks:", err);
      });
  }, []);
  const updateTaskStatus = (_id, newStatus) => {
    const token = localStorage.getItem("developerLoginKey");
    axios
      .put(
        `http://localhost:4000/api/developer/task-status/${_id}`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
      })
      .catch((err) => console.error("Failed to update task:", err));
  };
  const pendingCount = tasks.filter((task) => task.status === "Pending").length;
  const progressCount = tasks.filter(
    (task) => task.status === "Progress"
  ).length;
  const completedCount = tasks.filter(
    (task) => task.status === "Completed"
  ).length;
  return (
    <div>
      <Container className="mt-4">
        <Row className="mb-4 text-center">
          <Col md={4}>
            <Card border="danger" className="shadow">
              <Card.Body>
                <Card.Title
                  style={{ fontFamily: "poppins" }}
                  className="text-danger"
                >
                  Pending Tasks
                </Card.Title>
                <h2>{pendingCount}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card border="warning" className="shadow">
              <Card.Body>
                <Card.Title
                  style={{ fontFamily: "poppins" }}
                  className="text-warning"
                >
                  Progress Tasks
                </Card.Title>
                <h2>{progressCount}</h2>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card border="success" className="shadow">
              <Card.Body>
                <Card.Title
                  style={{ fontFamily: "poppins" }}
                  className="text-success"
                >
                  Completed Tasks
                </Card.Title>
                <h2>{completedCount}</h2>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />
        <h5
          style={{ fontFamily: "poppins" }}
          className="mb-3 text-center fw-bold"
        >
          Today’s Progress Tasks
        </h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Task Id</th>
              <th>DevName</th>
              <th>Task</th>
              <th>Date/Time</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter((task) => task.status === "Progress")
              .map((task) => (
                <tr key={task._id}>
                  <td>{task.taskId}</td>
                  <td>{task.developerName}</td>
                  <td>{task.taskTitle}</td>
                  <td>{task.taskDeadline}</td>
                  <td className="text-warning fw-bold">{task.status}</td>
                  <td>
                    <DropdownButton
                      variant="secondary"
                      title="Update"
                      size="sm"
                      onSelect={(status) => updateTaskStatus(task._id, status)}
                    >
                      <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                      <Dropdown.Item eventKey="Completed">
                        Completed
                      </Dropdown.Item>
                    </DropdownButton>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
