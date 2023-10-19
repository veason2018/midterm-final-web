import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const SignUpUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert(JSON.stringify(data, null, 2));
      console.log(data);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          {errors.firstName && <span>This field is required.</span>}
        </div>

        <div>
          <label>Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          {errors.lastName && <span>This field is required.</span>}
        </div>

        <div>
          <label>Username:</label>
          <Controller
            name="userName"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <input {...field} />}
          />
          {errors.userName && <span>This field is required.</span>}
        </div>

        <div>
          <label>Email:</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              pattern: /^\S+@\S+$/i,
            }}
            render={({ field }) => <input {...field} />}
          />
          {errors.email && <span>Please enter a valid email.</span>}
        </div>

        <div>
          <label>Password:</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.password && <span>This field is required.</span>}
        </div>

        <div>
          <label>Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => <input type="password" {...field} />}
          />
          {errors.confirmPassword && <span>This field is required.</span>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpUser;
