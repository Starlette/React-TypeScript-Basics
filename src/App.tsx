import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserDetails from './views/User';
import UserList from './views/UserList';

function App() {
  return (
    <div className="container">
		<br />
		<Navbar />
		<Routes>
			<Route path='/' element={<Navigate to={'/user/list'} />}  />
			<Route path='/user/list' element={<UserList />} />
			<Route path='/user/:id' element={<UserDetails />} />
		</Routes>
    </div>
  );
}

export default App;
