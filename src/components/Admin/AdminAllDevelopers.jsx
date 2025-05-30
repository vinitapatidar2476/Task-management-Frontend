import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";

export const AdminAllDevelopers = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminLoginKey");

    axios
      .get("http://localhost:4000/api/admin/developers", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDevelopers(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch developers:", err);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h3 className="text-center fw-bold mb-4">All Developers</h3>
      <hr />
      <Table striped bordered hover responsive>
        <thead className="text-center">
          <tr>
            <th>devId</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Username</th>
            <th>Role</th>
            <th>Rating</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {developers.map((dev) => (
            <tr key={dev._id}>
              <td>{dev._id}</td>
              <td>{dev.name}</td>
              <td>{dev.email}</td>
              <td>{dev.contact}</td>
              <td>{dev.username}</td>
              <td>{dev.role}</td>
              <td>{dev.rating}</td>
              <td>{dev.gender}</td>
              <td>{dev.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
