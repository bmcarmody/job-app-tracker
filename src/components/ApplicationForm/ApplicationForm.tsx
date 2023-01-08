import { useState } from 'react';
import { Button } from '../../library/Button';
import { MemoizedInput as Input, useSetValueCallback } from '../../library/Input';

export const ApplicationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [jobPostingLink, setJobPostingLink] = useState('');

  const onCompanyNameChange = useSetValueCallback(setCompanyName);
  const onPositionChange = useSetValueCallback(setPosition);
  const onDateAppliedChanged = useSetValueCallback(setDateApplied);
  const onJobPostingLinkChange = useSetValueCallback(setJobPostingLink);

  return (
    <div className="bg-slate-600 p-4 rounded w-full flex flex-col text-slate-200">
      <Input label="Company Name" onChange={onCompanyNameChange} value={companyName} />
      <Input label="Position" onChange={onPositionChange} value={position} />
      <Input label="Date Applied" type="date" onChange={onDateAppliedChanged} value={dateApplied} />
      <Input label="Job Posting Link" onChange={onJobPostingLinkChange} value={jobPostingLink} />
      <div className="flex gap-4">
        <Button content="Cancel" type="secondary" additionalStyles="basis-full" />
        <Button content="Add" type="primary" additionalStyles="basis-full" />
      </div>
    </div>
  );
};
