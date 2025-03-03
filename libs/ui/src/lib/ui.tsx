import { Button } from './components/button';

export function Ui() {
  return (
    <div className={'flex justify-start content-start gap-2 p-6'}>
      <Button type={'button'} color={'destructive'}>
        Content
      </Button>
    </div>
  );
}

export default Ui;
