import React from "react";
import { useForm } from "react-hook-form";
import DashboardHeading from './../dashboard/DashboardHeading';
import ImageUpload from './../../components/image/ImageUpload';
import Field from './../../components/field/Field';
import Label from './../../components/label/Label';
import Input from './../../components/input/Input';
import Button from './../../components/button/Button';

const UserProfile = () => {
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <DashboardHeading
        title="Account information"
        desc="Update your account information"
      ></DashboardHeading>
      <form>
        <div className="mb-10 text-center">
          <ImageUpload className="!w-[200px] h-[200px] !rounded-full min-h-0 mx-auto"></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Fullname</Label>
            <Input
              control={control}
              name="fullname"
              placeholder="Enter your fullname"
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              control={control}
              name="username"
              placeholder="Enter your username"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Date of Birth</Label>
            <Input
              control={control}
              name="birthday"
              placeholder="dd/mm/yyyy"
            ></Input>
          </Field>
          <Field>
            <Label>Mobile Number</Label>
            <Input
              control={control}
              name="phone"
              placeholder="Enter your phone number"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              control={control}
              name="email"
              type="email"
              placeholder="Enter your email address"
            ></Input>
          </Field>
          <Field></Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>New Password</Label>
            <Input
              control={control}
              name="password"
              type="password"
              placeholder="Enter your password"
            ></Input>
          </Field>
          <Field>
            <Label>Confirm Password</Label>
            <Input
              control={control}
              name="confirmPassword"
              type="password"
              placeholder="Enter your confirm password"
            ></Input>
          </Field>
        </div>
        <Button kind="primary" className="mx-auto w-[200px]">
          Update
        </Button>
      </form>
    </div>
  );
};

export default UserProfile;
