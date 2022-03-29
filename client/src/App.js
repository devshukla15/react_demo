import React from 'react';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router';
import Auth from './components/Auth/Auth';
import Header from './components/header/Header';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/auth" element={<Auth />} />
			</Routes>
		</>
	);
};

export default App;
