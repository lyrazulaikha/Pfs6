import React from 'react';
import { Card, Badge, Button, Row, Col, Form } from 'react-bootstrap'; // Import Form
import { Trash, Edit3 } from 'react-feather'; // Ikon dari react-feather

const TaskItem = ({ task, deleteTask, showEditForm }) => {
  
  const getPriorityVariant = (priority) => {
    switch (priority) {
      case 'High': return 'danger';
      case 'Medium': return 'warning';
      case 'Low': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case 'Done': return 'success';
      case 'In Progress': return 'primary';
      case 'To Do': return 'secondary';
      default: return 'secondary';
    }
  };

  // Fungsi untuk menandai tugas selesai
  const handleToggleDone = () => {
    // Jika belum Done, set status menjadi Done. Jika sudah, kembalikan ke To Do.
    const newStatus = task.status === 'Done' ? 'To Do' : 'Done';
    // Gunakan showEditForm untuk meng-update state di App.js
    showEditForm({ ...task, status: newStatus });
  };

  return (
    <Card className="mb-3 shadow-sm rounded-3">
      <Card.Body>
        <Row className="align-items-center">
          
          {/* Nama Tugas */}
          <Col md={3} className="fw-bold">
            <span className="text-muted d-block small mb-1">Task</span>
            {task.name}
          </Col>

          {/* Prioritas */}
          <Col md={2} className="text-center">
            <span className="text-muted d-block small mb-1">Priority</span>
            <Badge bg={getPriorityVariant(task.priority)} className="py-2 px-3 rounded-pill">
              {task.priority}
            </Badge>
          </Col>

          {/* Status */}
          <Col md={2} className="text-center">
            <span className="text-muted d-block small mb-1">Status</span>
            <Badge bg={getStatusVariant(task.status)} className="py-2 px-3 rounded-pill">
              {task.status}
            </Badge>
          </Col>
          
          {/* Radio Button (Tandai Selesai) */}
          <Col md={2} className="text-center">
            <Form.Check 
              type="radio" 
              checked={task.status === 'Done'}
              onChange={handleToggleDone}
              className="mt-2"
              // Styling kustom untuk radio button agar terlihat lebih besar
              style={{ transform: 'scale(1.2)' }}
            />
          </Col>

          {/* Aksi */}
          <Col md={3} className="text-end">
            {/* Tombol Edit */}
            <Button 
              variant="outline-primary" 
              size="sm" 
              className="me-2 rounded-circle"
              onClick={() => showEditForm(task)}
            >
              <Edit3 size={18} />
            </Button>

            {/* Tombol Delete */}
            <Button 
              variant="outline-danger" 
              size="sm" 
              className="rounded-circle"
              onClick={() => deleteTask(task.id)}
            >
              <Trash size={18} />
            </Button>
          </Col>

        </Row>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;