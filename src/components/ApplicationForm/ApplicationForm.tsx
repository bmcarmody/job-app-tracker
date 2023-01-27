import { zodResolver } from '@hookform/resolvers/zod';
import { collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { COLLECTION_NAME, JobApplicationSchema } from '../../jobs';
import { Button } from '../../library/Button';
import { Input } from '../../library/Input';
import { Select } from '../../library/Select';
import { SelectOption } from '../../library/Select/Select';

export const ApplicationForm = () => {
  const employmentOptions: SelectOption[] = [
    { label: 'Full-Time', value: 'fullTime' },
    { label: 'Part-Time', value: 'partTime' },
    { label: 'Contract', value: 'contract' },
    { label: 'Temporary', value: 'temporary' },
    { label: 'Seasonal', value: 'seasonal' },
  ];

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
      className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-100 p-4 rounded-md w-full text-slate-900"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Title"
        type="text"
        defaultValue=""
        {...register('title')}
        containerStyles="col-span-2"
        inputStyles="w-full"
        placeholder="Software Engineer"
      />
      <Input
        label="Company Name"
        type="text"
        defaultValue=""
        {...register('companyName')}
        containerStyles="col-span-1"
        inputStyles="w-full"
        placeholder="Awesome Company Inc."
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
        label="Location"
        type="text"
        defaultValue=""
        {...register('location')}
        containerStyles="col-span-1"
        inputStyles="w-full"
        placeholder="Remote"
      />
      <Select label="Employment" options={employmentOptions} />
      <Input
        label="Job Post"
        type="text"
        defaultValue=""
        precontent="https://"
        {...register('jobPost')}
        containerStyles="col-span-1"
        inputStyles="w-10/12"
        required={false}
        placeholder="www.awesomecompany.com"
      />
      <div></div>
      <Button appearance="secondary">Cancel</Button>
      <Button appearance="primary" type="submit" additionalStyles="basis-full">
        Add Job Application
      </Button>
    </form>
  );
};
