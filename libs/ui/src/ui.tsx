'use client';

import { Button, Dropdown, Option } from './components';
import { FormProvider, useForm } from 'react-hook-form';

export function Ui() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className={'flex justify-start content-start gap-2 p-6'}>
          <Dropdown name={'status'} required={true} label={'Status'}>
            <option label={'Doing'} value={'doing'}></option>
            <Option content={'Blocked'} value={{ id: 1, name: 'testowo' }}></Option>
          </Dropdown>
        </div>

        <Button type={'submit'}>Submit</Button>
      </form>
    </FormProvider>
  );
}

export default Ui;
