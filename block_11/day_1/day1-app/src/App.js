import React from 'react';
import './App.css';

const compromises = [
  'estudar',
  'sofrer',
  'chorar',
]
const Task = (value) => {
  return (
    compromises.map((compromise) => <li>{compromise}</li>)
  );
}

export default Task;
