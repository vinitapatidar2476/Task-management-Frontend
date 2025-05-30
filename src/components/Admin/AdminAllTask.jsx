import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

export const AdminAllTask = () => {
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

  return (
    <div>
      <Container className="mt-5">
        <h3 className="text-center fw-bold mb-4">All Tasks</h3>
        <hr />

        <Table bordered hover responsive>
          <thead className="text-center">
            <tr>
              <th>Id</th>
              <th>Tasks</th>
              <th>Date/Time</th>
              <th>Deadline</th>

              <th>Dev Name</th>
              <th>Status</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {tasks.map((task) => (
              <tr key={task._id}>
                <td>{task.taskId}</td>
                <td>{task.taskTitle}</td>
                <td>{task.createdDataTime}</td>
                <td>{task.taskDeadline}</td>
                <td>{task.developerName || task.developerId?.name}</td>
                <td
                  className="fw-bold"
                  style={{
                    color:
                      task.status === "Completed"
                        ? "green"
                        : task.status === "Progress"
                        ? "orange"
                        : "red",
                  }}
                >
                  {task.status}
                </td>
                <td>
                  <span
                    style={{
                      color: "blue",
                      cursor: "pointer",
                      marginRight: "8px",
                    }}
                  >
                    Edit
                  </span>
                  /
                  <span
                    style={{
                      color: "red",
                      cursor: "pointer",
                      marginLeft: "8px",
                    }}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};
