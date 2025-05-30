import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export const AdminAddDevelopers = () => {
  const [formData, setFormData] = useState({
    developerId: "",
    name: "",
    username: "",
    password: "",
    email: "",
    contact: "",
    role: "",
    gender: "",
    rating: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminLoginKey");
      const res = await axios.post(
        "http://localhost:4000/api/admin/add-developer",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Developer Added Successfully");
      setFormData({
        developerId: "",
        name: "",
        username: "",
        password: "",
        email: "",
        contact: "",
        role: "",
        gender: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error adding developer:", error);
      alert("Failed to add developer");
    }
  };

  return (
    <Container className="mt-1">
      <h3 className="text-center fw-bold mb-4">Add Developers</h3>
      <hr />

      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <Form.Group className="mb-3" controlId="formDevId">
          <Form.Label>
            Developer UniqueId <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="developerUniqueId"
            type="text"
            placeholder="Enter Developer UniqueId"
            value={formData.developerUniqueId}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>
            Full Name <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>
            Username <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>
            Password <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>
            Email <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>
            Phone <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="contact"
            type="text"
            placeholder="Enter Phone Number"
            value={formData.contact}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRole">
          <Form.Label>
            Role <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="role"
            type="text"
            placeholder="Enter Role"
            value={formData.role}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Gender <span className="text-danger">*</span>
          </Form.Label>
          <Form.Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Gender --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            name="rating"
            type="number"
            placeholder="Enter Rating (Optional)"
            value={formData.rating}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" style={{ width: "130px" }}>
            Add
          </Button>
        </div>
      </Form>
    </Container>
  );
};
