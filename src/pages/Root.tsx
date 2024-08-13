import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Dashboard from '@/pages/Dashboard';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Root = () => {
  const params = useLocation();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-dvh w-dvw items-center justify-center overflow-y-hidden">
      <div className="mx-auto flex h-full w-full gap-4">
        <div className="relative flex h-screen w-[200px] flex-col border-r-[1px] p-2">
          <Link className="p-2" to="/">
            Dashboard
          </Link>

          <Link className="p-2" to="/StudentManagement">
            Student Management
          </Link>
          <Link className="p-2" to="/AttendanceLog">
            Attendance Log
          </Link>
          <Link className="p-2" to="/Reports">
            Reports
          </Link>
          <Link className="p-2" to="/ScanStation">
            Scan Station
          </Link>

          {/* <Button
            onClick={() => setShowSidebar(!showSidebar)}
            className="absolute right-2 top-[50%] border-2 p-2"
          >
            Toggle Sidebar
          </Button> */}
        </div>

        <div className="h-full w-full">
          {/* This is where the child routes get rendered */}
          {params.pathname === '/' ? <Dashboard /> : <Outlet />}
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default Root;
