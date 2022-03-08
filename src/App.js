import { Container } from '@mui/material';
import './App.css';
import Add from './comp/Add';
import ListTasks from './comp/ListTasks';
function App() {
  
  return (
    <div>
      <h1>Welcome to Tasks List</h1>
      <Container fixed>
      <Add/>
      <ListTasks/>
      </Container>
    </div>
  );
}

export default App;
