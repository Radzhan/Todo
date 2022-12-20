import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch, RootState } from './app/chat';
import Card from './components/Crard/Card';
import { fetchTask } from './containers/chatSlice';

function App() {
  const dispatch: AppDispatch = useDispatch()
  const responseTask = useSelector((state: RootState) => state.task.value)

  useEffect(() => {
    dispatch(fetchTask())
  }, [dispatch])

  const createTask = responseTask.map(task => (
    <Card key={task.id} title={task.title}/>
  ))

  return (
    <div className="App">
      {createTask}
    </div>
  );
}

export default App;
