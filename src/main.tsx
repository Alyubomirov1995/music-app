import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Teach } from './pages/Teach/Teach.tsx';
import { Error } from './pages/Error/Error.tsx';
import { Layout } from './layout/Menu/Layout.tsx';
import { RequireAuth } from './helpers/RequireAuth.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { Media } from './pages/Media/Media.tsx';
import { Check } from './pages/check/Check.tsx';
import { Profile } from './pages/Profile/Profile.tsx';
import { Date } from './pages/Date/Date.tsx';



const router = createBrowserRouter([
	{
		path: '/',
		element: <RequireAuth><Layout/>,</RequireAuth>,
		children: [
			{
				path: '/date',
				element: <Date/>
			},
			{
				path: '/profile',
				element: <Profile/>
			},
			{
				path: '/teach',
				element: <Teach/>
			},
			{
				path: '/media',
				element: <Media/>
			},
			{
				path: '/check',
				element: <Check/>
			}
		]
	},
	{
		path: '/teach',
		element: <Teach/>
	},
	{
		path: '*',
		element: <Error/>
	}

]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
