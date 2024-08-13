import AddStudent from '@/components/manage-student/AddStudent';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';

const StudentManagement = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);

  return (
    <div className="relative h-full w-full">
      <h1 className="my-4 text-6xl font-bold">Student Management</h1>
      <div className="h-full w-full">
        <div className="flex justify-end p-2">
          <Button
            onClick={() => {
              setShowStudentForm(true);
              console.log('clicked');
            }}
            className="bg-green-500 text-white"
          >
            Create Student
          </Button>
        </div>

        {/* <Table className="w-full">
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table> */}
      </div>

      {showStudentForm && (
        <div className="absolute top-0 flex w-full max-w-[100%] items-center justify-center bg-white bg-opacity-80">
          <AddStudent setShowStudentForm={setShowStudentForm} />
        </div>
      )}
    </div>
  );
};

export default StudentManagement;
