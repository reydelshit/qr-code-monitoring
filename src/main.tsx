import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import './index.css';
import AttendanceLog from './pages/AttendanceLog';
import Reports from './pages/Reports';
import StudentManagement from './pages/StudentManagement';
import ScanStation from './pages/ScanStation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'AttendanceLog',
        element: <AttendanceLog />,
      },
      {
        path: 'Reports',
        element: <Reports />,
      },
      {
        path: 'StudentManagement',
        element: <StudentManagement />,
      },

      {
        path: 'ScanStation',
        element: <ScanStation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
