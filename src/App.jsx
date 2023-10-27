import Chat from './pages/Chat';
import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="chat" element={<Chat />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;