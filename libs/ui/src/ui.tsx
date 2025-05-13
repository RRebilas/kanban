'use client';

import { Button, Dropdown, Option } from './components';
import { FormProvider, useForm } from 'react-hook-form';

export function Ui() {

  return (
    <div className={'flex justify-start content-start gap-2 p-6'}>
      <Dropdown name={'status'} required={true} label={'Status'} onChange={e => console.log(e.target.value)}>
        <option label={'Doing'} value={'doing'}></option>
        <Option content={'Blocked'} value={{ id: 1, name: 'testowo' }}></Option>
      </Dropdown>
    </div>
  );
}

export default Ui;
