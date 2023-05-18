import './App.css';
import UserList from './components/UserList'
import Form from './components/Form'
import Editform from './components/Editform';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {

  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Form />, <UserList />]} />
          <Route path="/edit/:id" element={[<Editform />, <UserList />]} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
