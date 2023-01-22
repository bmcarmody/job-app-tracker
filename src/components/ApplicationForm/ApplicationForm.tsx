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

  return (
    <form
      className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-100 p-4 rounded w-full text-slate-900"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Title"
        type="text"
        defaultValue=""
        {...register('title')}
        containerStyles="col-span-2"
        inputStyles={`w-full`}
      />
      <Input
        label="Company Name"
        type="text"
        defaultValue=""
        {...register('companyName')}
        containerStyles="col-span-1"
        inputStyles={`w-full`}
      />
      <Input
        label="Date Applied"
        type="date"
        defaultValue=""
        {...register('dateApplied')}
        containerStyles="col-span-1"
        inputStyles="w-40"
      />
      <Input
        label="Job Posting Link"
        type="text"
        defaultValue=""
        precontent="https://"
        {...register('jobPostingLink')}
        containerStyles="col-span-1"
        inputStyles="w-10/12"
      />
      <div></div>
      <Button appearance="secondary" additionalStyles="">
        Cancel
      </Button>
      <Button appearance="primary" type="submit" additionalStyles="basis-full">
        Add
      </Button>
    </form>
  );
};
