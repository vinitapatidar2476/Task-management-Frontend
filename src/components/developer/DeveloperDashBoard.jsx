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
export const DeveloperDashBoard = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchMyTasks = async () => {
      try {
        const token = localStorage.getItem("developerLoginKey");
        const res = await axios.get(
          "http://localhost:4000/api/developer/tasks",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTasks(res.data);
      } catch (err) {
        console.error("Error fetching tasks", err);
      }
    };

    fetchMyTasks();
  }, []);
  const updateTaskStatus = (_id, newStatus) => {
    const token = localStorage.getItem("developerLoginKey");

    axios
      .put(
        `http://localhost:4000/api/developer/task-status/${_id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task._id !== _id));
      })
      .catch((err) => {
        console.error("Failed to update task:", err);
      });
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
          Today’s Pending Tasks
        </h5>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Task Id</th>
              <th>Task</th>
              <th>Date/Time</th>

              <th>DevName</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.taskId}</td>
                <td>{task.taskTitle}</td>
                <td>{task.createdDataTime}</td>
                <td>{task.developerName || task.developerId?.name}</td>

                <td
                  className={
                    task.status === "Completed"
                      ? "text-success fw-bold"
                      : task.status === "Progress"
                      ? "text-warning fw-bold"
                      : "text-danger fw-bold"
                  }
                >
                  <DropdownButton
                    variant="outline-secondary"
                    title={task.status}
                    size="sm"
                    onSelect={(status) => updateTaskStatus(task._id, status)}
                  >
                    <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                    <Dropdown.Item eventKey="Progress">Progress</Dropdown.Item>
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
