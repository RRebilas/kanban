import { Button } from './components/button';
import { TextField } from './components/text-field';

export function Ui() {
  return (
    <div className={'flex justify-start content-start gap-2 p-6'}>
      <Button type={'button'} color={'destructive'}>
        Content
      </Button>

      <TextField type={'text'} placeholder={'Enter task name'}></TextField>
      <TextField type={'text'} placeholder={'Enter task name'}></TextField>
    </div>
  );
}

export default Ui;
