import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

export const AdminAddTask = () => {
  const [formData, setFormData] = useState({
    taskId: "",
    taskTitle: "",
    taskDescription: "",
    developerId: "",
    developerName: "",
    developerUniqueId: "",
    developerAvatar: "",
    taskDeadline: "",
    status: "Pending",
  });

  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const token = localStorage.getItem("adminLoginKey");
        const res = await axios.get(
          "http://localhost:4000/api/admin/developers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDevelopers(res.data);
      } catch (err) {
        console.error("Error fetching developers", err);
      }
    };

    fetchDevelopers();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeveloperChange = (e) => {
    const selectedId = e.target.value;
    const selectedDev = developers.find((dev) => dev._id === selectedId);

    setFormData((prev) => ({
      ...prev,
      developerId: selectedDev._id,
      developerName: selectedDev.name,
      developerUniqueId: selectedDev.uniqueId,
      developerAvatar: selectedDev.avatar || "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminLoginKey");
      await axios.post("http://localhost:4000/api/admin/add-task", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Task Added Successfully");

      setFormData({
        taskId: "",
        taskTitle: "",
        taskDescription: "",
        developerId: "",
        developerName: "",
        developerUniqueId: "",
        developerAvatar: "",
        taskDeadline: "",
        status: "Pending",
      });
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task");
    }
  };

  return (
    <Container className="mt-1">
      <h3 className="text-center fw-bold mb-4">Add Task</h3>
      <hr />
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Task Id *</Form.Label>
          <Form.Control
            type="text"
            name="taskId"
            value={formData.taskId}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>developer Id *</Form.Label>
          <Form.Control
            type="text"
            name="developerId"
            value={formData.developerId}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Task Title *</Form.Label>
          <Form.Control
            type="text"
            name="taskTitle"
            value={formData.taskTitle}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Task Description *</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Task Deadline *</Form.Label>
          <Form.Control
            type="text"
            name="taskDeadline"
            value={formData.taskDeadline}
            onChange={handleChange}
            placeholder="e.g. 30 May 2025, 5:00 PM"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Assign Developer *</Form.Label>
          <Form.Select
            name="developerId"
            value={formData.developerId}
            onChange={handleDeveloperChange}
            required
          >
            <option value="">Select Developer</option>
            {developers.map((dev) => (
              <option key={dev._id} value={dev._id}>
                {dev.uniqueId} - {dev.name}
              </option>
            ))}
          </Form.Select>
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
