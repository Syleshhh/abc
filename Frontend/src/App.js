import { Route, Routes } from 'react-router-dom';
import './App.css';
import Welcome from './pages/Welcome';
import LogInPage from './pages/LogInPage';
import SignInPage from './components/SignInPage/index'
import SignUpPage from './components/SignUpPage/index'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
