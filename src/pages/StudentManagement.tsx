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
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Student {
  student_id: string;
  student_id_code: string;
  student_image_path: string;
  student_name: string;
  student_datebirth: string;
  student_grade_level: string;
  student_program: string;
  student_block_section: string;
  student_parent_name: string;
  student_parent_number: string;
  student_parent_email: string;
  student_address: string;
  student_gender: string;
}

const StudentManagement = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudents = () => {
    axios.get(`${import.meta.env.VITE_SERVER_LINK}/student.php`).then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  };

  const handleDelete = (student_id: string) => {
    axios
      .delete(`${import.meta.env.VITE_SERVER_LINK}/student.php`, {
        data: {
          student_id,
        },
      })
      .then((res) => {
        console.log(res.data);
        fetchStudents();
      });
  };

  useEffect(() => {
    fetchStudents();
  }, []);

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

        <Table className="my-4 w-full">
          <TableCaption>A list of registered students.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Student ID</TableHead>
              <TableHead>Fullname</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    className="h-[4rem] w-[4rem] object-cover"
                    src={`${import.meta.env.VITE_SERVER_LINK}/${student.student_image_path}`}
                    alt="student"
                  />
                </TableCell>
                <TableCell>{student.student_id_code}</TableCell>
                <TableCell>{student.student_name}</TableCell>
                <TableCell>{student.student_datebirth}</TableCell>
                <TableCell>{student.student_address}</TableCell>
                <TableCell>{student.student_gender}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-2">
                    <Button className="bg-green-500 text-white">
                      View More
                    </Button>
                    <Button className="bg-blue-500 text-white">Edit</Button>
                    <Button
                      onClick={() => {
                        handleDelete(student.student_id);
                      }}
                      className="bg-red-500 text-white"
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
