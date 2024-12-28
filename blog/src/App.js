import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './pages/Homepage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <>
        <UserProvider value={{ user, setUser, unsetUser}}>
          <Router>
            <AppNavbar/>
            <Container>
              <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/news" element={<News />}/>
                <Route path="/profile" element={<Profile />} />
                <Route path="/addCourse" element={<AddCourse />} />
                <Route path="/courses" element={<Courses />}/>
                <Route path="/courses/:courseId" element={<CourseView/>}/>
                <Route path="*" element={<Error />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/logout" element={<Logout />}/>
              </Routes>
            </Container>
          </Router> 
        </UserProvider>
      </>
  );
}

export default App;
