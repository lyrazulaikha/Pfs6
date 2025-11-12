// components/TaskList.js
import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const TaskList = ({ tasks, deleteTask, showEditForm, toggleStatus }) => {
  if (tasks.length === 0) {
    return (
        <div className="text-center p-4" style={{ border: '1px dashed #FFC0CB', borderRadius: '10px', background: '#FFFFFF' }}>
            <p className="lead" style={{ color: '#FF69B4', margin: '0' }}>🎉 Semua tugas sudah selesai. Tugas baru mana? 🎉</p>
        </div>
    );
  }

  return (
    <div>
      {tasks.map((task) => (
        // Gunakan task-done untuk styling jika status Done
        <Card key={task.id} className={`task-card ${task.status === 'Done' ? 'task-done' : ''}`}>
          <Card.Body className="py-2"> {/* Kurangi padding vertikal */}
            <Row className="align-items-center">
              
              {/* KOLOM JUDUL */}
              <Col md={6}>
                <span className={`task-title ${task.status === 'Done' ? 'text-decoration-line-through text-muted' : ''}`}>
                    {task.title}
                </span>
              </Col>
              
              {/* KOLOM AKSI DAN STATUS */}
              <Col md={6} className="d-flex justify-content-end align-items-center">
                
                {/* Status Badge */}
                <Badge className={`badge-status status-${task.status} me-3`}>
                    {task.status}
                </Badge>

                {/* Tombol Toggle Status */}
                <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => toggleStatus(task.id)}
                    className="btn-action-outline me-2"
                >
                    {task.status === 'Done' ? 'Re-open' : 'Done'}
                </Button>

                {/* Tombol Edit */}
                <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => showEditForm(task)}
                    className="btn-action-outline me-2"
                >
                    Edit
                </Button>

                {/* Tombol Hapus */}
                <Button 
                    variant="outline-secondary" 
                    size="sm" 
                    onClick={() => deleteTask(task.id)}
                    className="btn-action-outline"
                >
                    Hapus
                </Button>
              </Col>
              
            </Row>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default TaskList;