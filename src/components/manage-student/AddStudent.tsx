import Lgo from '@/assets/prod.jpg';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import defaultProfile from '@/assets/profile.webp';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import axios from 'axios';
import { useState } from 'react';
// import { URL } from 'url';

type ChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;
export default function AddStudent({
  setShowStudentForm,
}: {
  setShowStudentForm: (value: boolean) => void;
}) {
  const [product, setProduct] = useState([]);
  const { toast } = useToast();
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState('' as string);
  const [price, setPrice] = useState(0);
  const [selectedAvailability, setSelectedAvailability] = useState(
    '' as string,
  );

  const handleAvailability = (value: string) => {
    setSelectedAvailability(value);
  };

  const handleChange = (e: ChangeEvent) => {
    const value = e.target.value;
    const name = e.target.name;
    setProduct((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      setError('Please fill in all fields');
      return;
    }

    axios
      .post(`${import.meta.env.VITE_BRITANIKA_LOCAL_HOST}/product.php`, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        ...product,
        product_image: image,
        availability_status: selectedAvailability,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === 'success') {
          window.location.reload();
          setShowStudentForm(false);
          toast({
            title: 'product: Added Successfully',
            description: 'product has been added successfully',
          });
        }
      });
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = new FileReader();
    data.readAsDataURL(e.target.files![0]);

    data.onloadend = () => {
      const base64 = data.result;
      if (base64) {
        setImage(base64.toString());

        // console.log(base64.toString());
      }
    };
  };

  return (
    <div className="relative flex w-[80%] flex-col items-center justify-center rounded-md border-2 bg-white text-center shadow-lg">
      <span
        onClick={() => setShowStudentForm(false)}
        className="absolute right-4 top-2 cursor-pointer text-2xl"
      >
        x
      </span>
      <div className="flex w-full flex-col items-center gap-[1rem] p-2">
        <form className="w-full px-4 text-start" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex w-[25rem] flex-col">
              <img
                className="mb-4 h-[20rem] w-full rounded-lg object-cover"
                src={image! ? image! : defaultProfile}
              />
              <Label className="mb-2 text-start">Student image</Label>

              <Input
                type="file"
                accept="image/*"
                onChange={handleChangeImage}
                className="cursor-pointer"
                required
              />
            </div>

            <div className="w-full">
              <Label className="my-2 block text-2xl">Basic Information</Label>
              <div className="w-full">
                <Label className="mb-2 text-start">Student ID</Label>
                <Input
                  name="student_id"
                  className="mb-2"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <Label className="mb-2 text-start">First Name</Label>
                  <Input
                    name="student_firstname"
                    className="mb-2"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label className="mb-2 text-start">Last Name</Label>
                  <Input
                    name="student_lastname"
                    className="mb-2"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label className="mb-2 text-start">Middle Name</Label>
                  <Input
                    name="student_middlename"
                    className="mb-2"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="item-start flex flex-col">
                <Label className="mb-2 text-start">Date of Birth</Label>
                <Input
                  type="datetime-local"
                  name="student_birthday"
                  className="mb-2"
                  onChange={handleChange}
                />
              </div>

              <div className="flex gap-4">
                <div className="w-full">
                  <Label className="mb-2 text-start">Address</Label>
                  <Input
                    name="student_address"
                    className="mb-2"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-[2rem] w-full text-start">
                  <Label className="mb-2">Gender</Label>

                  <Select
                    required
                    value={selectedAvailability}
                    onValueChange={handleAvailability}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Label className="my-2 block text-2xl">Program Information</Label>

              <div className="w-full">
                <Label className="mb-2 text-start">Program</Label>
                <Input
                  name="student_program"
                  className="mb-2"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <Label className="mb-2 text-start">Grade Level</Label>
                  <Input
                    name="student_level"
                    className="mb-2"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label className="mb-2 text-start">Block / Section</Label>
                  <Input
                    name="student_block_section"
                    className="mb-2"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>

              <Label className="my-2 block text-2xl">Contact Information</Label>

              <div className="w-full">
                <Label className="mb-2 text-start">Parent/Guardian Name</Label>
                <Input
                  name="student_parguard_name"
                  className="mb-2"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-4">
                <div className="w-full">
                  <Label className="mb-2 text-start">
                    Parent/Guardian Phone Number(s)
                  </Label>
                  <Input
                    name="student_parguard_phone"
                    className="mb-2"
                    required
                    type="number"
                    onChange={handleChange}
                  />
                </div>

                <div className="w-full">
                  <Label className="mb-2 text-start">
                    Parent/Guardian Email Address (Optional)
                  </Label>
                  <Input
                    name="student_parguard_email"
                    className="mb-2"
                    type="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <span className="text-red-500">{error}</span>

          <div className="my-4 flex justify-end gap-4">
            <Button
              onClick={() => setShowStudentForm(false)}
              className="w-[20%] self-center bg-[#585a57] text-white hover:border-2 hover:border-[#41644A] hover:bg-white hover:text-[#41644A]"
            >
              Cancel
            </Button>
            <Button
              className="w-[20%] self-center bg-[#41644A] text-white hover:border-2 hover:border-[#41644A] hover:bg-white hover:text-[#41644A]"
              type="submit"
            >
              Add Student
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
