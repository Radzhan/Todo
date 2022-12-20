import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AppDispatch, RootState } from './app/chat';
import Card from './components/Crard/Card';
import { changestatus, deleteTask, fetchTask, postTask } from './containers/chatSlice';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const responseTask = useSelector((state: RootState) => state.task.value);

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  const onDelete = async (id: string) => {
    await dispatch(deleteTask(id));
    await dispatch(fetchTask());
  };

  const createTask = responseTask.map((task) => (
    <Card key={task.id} title={task.title} remove={() => onDelete(task.id)} status={task.status} changeBox={() => dispatch(changestatus(task.id))}/>
  ));

  let task = {
    title: '',
    status: false
  };
  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (task.title !== '') {
      await dispatch(postTask(task));
      await dispatch(fetchTask());
    } else {
      alert('right new message');
    }
  };

  const value = (e: React.ChangeEvent<HTMLInputElement>) => {
    task.title = e.target.value;
  };

  return (
    <div className="App">
      <form className="row g-3" onSubmit={onFormSubmit}>
        <div className="col-auto">
          <input type="text" className="form-control" required id="inputPassword2" onChange={(e) => value(e)} placeholder="Title" />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Add</button>
        </div>
      </form>
      {createTask}
    </div>
  );
}

export default App;
