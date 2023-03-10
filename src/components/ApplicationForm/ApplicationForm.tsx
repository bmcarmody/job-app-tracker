import { zodResolver } from '@hookform/resolvers/zod';
import { collection } from 'firebase/firestore';
import { useForm } from 'react-hook-form';
import { db } from '../../firebase';
import { COLLECTION_NAME, JobApplicationSchema } from '../../jobs';
import { Input } from '../../library/Input';
import { Select } from '../../library/Select';
import { SelectOption } from '../../library/Select/Select';
import { X } from 'react-feather';

type Props = {
  modalLabel: string;
};

export const ApplicationForm = ({ modalLabel }: Props) => {
  const employmentOptions: SelectOption[] = [
    { label: 'Full-Time', value: 'fullTime' },
    { label: 'Part-Time', value: 'partTime' },
    { label: 'Contract', value: 'contract' },
    { label: 'Temporary', value: 'temporary' },
    { label: 'Seasonal', value: 'seasonal' },
  ];

  const minDate = new Date(new Date().setFullYear(new Date().getFullYear() - 5)).toLocaleDateString('en-ca');
  const maxDate = new Date().toLocaleDateString('en-ca');

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
    <form className="modal" onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-box grid grid-cols-2 gap-x-8 gap-y-4 bg-base-100 border border-primary w-11/12 max-w-5xl text-slate-700">
        <label htmlFor={modalLabel} className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2">
          <X className="text-slate-300" />
        </label>
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
          inputStyles="w-44 pr-2"
          min={minDate}
          max={maxDate}
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
          label="Job Listing"
          type="text"
          defaultValue=""
          {...register('jobPost')}
          containerStyles="col-span-1"
          inputStyles="w-10/12"
          required={false}
          placeholder="www.awesomecompany.com"
          inputGroupLabel="https://"
        />
        <div></div>
        <button className="btn btn-primary col-span-2" type="submit">
          Add Application
        </button>
      </div>
    </form>
  );
};
