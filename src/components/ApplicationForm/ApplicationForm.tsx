import { Input } from '../../library/Input';

export const ApplicationForm = () => {
  return (
    <div className="bg-slate-600 p-4 rounded w-full flex flex-col text-slate-200">
      <Input label="Company Name" />
      <Input label="Position" />
      <Input label="Date Applied" type="date" />
      <Input label="Job Posting Link" />
    </div>
  );
};
