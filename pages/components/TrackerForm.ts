// https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh
import { useState } from 'react';

// stores the values of the form
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TrackerForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  // onChange save exercise button
  // set the value that is entered to the corresponding attribute
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(event.target.name);
  };

  // onSubmit
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback(); // triggering the callback
  };

  // return values
  return {
    onChange,
    onSubmit,
    values,
  };
};
