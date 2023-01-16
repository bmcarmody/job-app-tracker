import { collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { addJobApplication, COLLECTION_NAME } from '../../jobs';
import { Button } from '../../library/Button';
import { Input } from '../../library/Input';

export const ApplicationForm = () => {
  const { register, handleSubmit } = useForm();

  const collectionRef = collection(db, COLLECTION_NAME);

  const onSubmit = (data: Record<string, string>) => console.log(data);

  return (
    <form className="bg-slate-600 p-4 rounded w-full flex flex-col text-slate-200" onSubmit={handleSubmit(onSubmit)}>
      <Input label="Company Name" type="text" defaultValue="" {...register('companyName')} />
      <Input label="Position" type="text" defaultValue="" {...register('position')} />
      <Input label="Date Applied" type="date" defaultValue="" {...register('dateApplied')} />
      <Input label="Job Posting Link" type="text" defaultValue="" {...register('jobPostingLink')} />
      <div className="flex gap-4">
        <Button appearance="secondary" additionalStyles="basis-full">
          Cancel
        </Button>
        <Button appearance="primary" type="submit" additionalStyles="basis-full">
          Add
        </Button>
      </div>
    </form>
  );
};
