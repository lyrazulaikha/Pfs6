// components/TaskForm.js (Contoh Struktur yang Disarankan)
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TaskForm = ({ show, handleClose, addTask, editTask, taskToEdit }) => {
  // State untuk judul tugas saja
  const [title, setTitle] = useState('');

  // Sinkronisasi dengan taskToEdit
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
    } else {
      setTitle('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return; 

    if (taskToEdit) {
      // Mode Edit: Hanya update title
      editTask({ ...taskToEdit, title });
    } else {
      // Mode Add: Kirim title saja
      addTask(title);
    }
    setTitle('');
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ borderBottom: '1px solid #FFC0CB' }}>
        <Modal.Title style={{ color: '#FF69B4' }}>{taskToEdit ? 'Edit Tugas' : 'Tambah Tugas Baru'}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Judul Tugas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan judul tugas (e.g., Exfoliasi mingguan)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            {/* Hapus semua Form.Group untuk description, priority, dan status */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose} className="btn-action-outline">
            Batal
          </Button>
          <Button type="submit" className="btn-pink">
            {taskToEdit ? 'Simpan Perubahan' : 'Tambahkan'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TaskForm;