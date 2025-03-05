'use client';

import { Button } from './components/button';
import { TextField } from './components/text-field';
import { FormProvider, RegisterOptions, useForm } from 'react-hook-form';

export function Ui() {
  const methods = useForm();
  const {
    register,
    reset,
    getFieldState,
    formState: { isValid, isDirty },
  } = methods;
  const errors: RegisterOptions = { required: { value: true, message: "Can't be empty I guess hehe" } };

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
  });

  console.log(getFieldState('test'));
  return (
    <div className={'flex justify-start content-start gap-2 p-6'}>
      <Button type={'button'} color={'destructive'}>
        Content
      </Button>

      <FormProvider {...methods}>
        <form className={'flex justify-start content-start gap-2 p-6'} onSubmit={(e) => e.preventDefault()}>
          <TextField name={'test'} type={'text'} placeholder={'Enter task name'} options={errors}></TextField>
          <button type={'submit'} onClick={onSubmit}>
            Potwierdz
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default Ui;
