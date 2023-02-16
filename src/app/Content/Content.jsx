import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home/Home';

const TaskForm = React.lazy(() => import('../../components/TaskForm'));
const Error404 = React.lazy(() => import('../pages/Error404/Error404'));


const Content = () => {
	const location = useLocation();
	return (
		<Routes location={location} key={location.pathname}>
			<Route path={'/'} element={<Home/>} />
      <Route
				path={'/create-task'}
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<TaskForm />
					</React.Suspense>
				}
			/>
      <Route
				path={'/edit-task/:id'}
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<TaskForm />
					</React.Suspense>
				}
			/>
			<Route
				path={'*'}
				element={
					<React.Suspense fallback={<div>Loading...</div>}>
						<Error404 />
					</React.Suspense>
				}
			/>
		</Routes>
	);
};

export default Content;