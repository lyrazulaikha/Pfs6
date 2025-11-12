import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Laprak PFS-6', status: 'Pending' },
    { id: 2, title: 'Belanja bulanan', status: 'Done' },
    { id: 3, title: 'Eksfoliasi dan Masker Wajah', status: 'Pending' },
  ]);
  
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null); 
  };

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title: title, status: 'Pending' }]);
    handleCloseForm(); 
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    handleCloseForm(); 
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  const toggleStatus = (id) => {
      setTasks(
          tasks.map(task => 
              task.id === id 
              ? { ...task, status: task.status === 'Done' ? 'Pending' : 'Done' }
              : task
          )
      );
  };


  return (
    <Container className="my-5">
      <h1 className="mb-4">TO-DO-LIST WEEKLY 🎀</h1>
      
      <Button 
        onClick={handleShowForm} 
        className="float-end btn-pink" 
      >
        + Tambah Tugas
      </Button>

      <div className="clearfix mb-4"></div>

      <div className="mt-4">
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          showEditForm={showEditForm}
          toggleStatus={toggleStatus} 
        />
        
        <TaskForm
          show={showForm}
          handleClose={handleCloseForm}
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
        />
      </div>
    </Container>
  );
}

export default App;