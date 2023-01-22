import { zodResolver } from '@hookform/resolvers/zod';
import { collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { COLLECTION_NAME, JobApplicationSchema } from '../../jobs';
import { Button } from '../../library/Button';
import { Input } from '../../library/Input';

export const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JobApplicationSchema),
  });

  const collectionRef = collection(db, COLLECTION_NAME);

  const onSubmit = (data: Record<string, string>) => console.log(data);

  const additionalInputStyles = 'mb-4';

  return (
    <form className="bg-slate-100 p-4 rounded w-full flex flex-col text-slate-900" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Company Name"
        type="text"
        defaultValue=""
        {...register('companyName')}
        additionalStyles={`${additionalInputStyles} w-full`}
      />
      <Input
        label="Position"
        type="text"
        defaultValue=""
        {...register('position')}
        additionalStyles={additionalInputStyles}
      />
      <Input
        label="Date Applied"
        type="date"
        defaultValue=""
        {...register('dateApplied')}
        additionalStyles={additionalInputStyles}
      />
      <Input
        label="Job Posting Link"
        type="text"
        defaultValue=""
        {...register('jobPostingLink')}
        additionalStyles={additionalInputStyles}
      />
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
