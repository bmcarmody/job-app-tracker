'use client';

import {
  BanknotesIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  LinkIcon,
  MapPinIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { type ReactElement, useRef } from 'react';

type FormField = {
  label: string;
  placeholder?: string;
  icon?: ReactElement;
  optional?: boolean;
  type?: 'text' | 'date';
};

const formFields: FormField[] = [
  {
    label: 'Company',
    placeholder: 'Google',
    icon: <BuildingOffice2Icon className="h-4 w-4" />,
  },
  {
    label: 'Position',
    placeholder: 'Software Engineer',
    icon: <BriefcaseIcon className="h-4 w-4" />,
  },
  {
    label: 'Location',
    placeholder: 'Mountain View, CA',
    icon: <MapPinIcon className="h-4 w-4" />,
  },
  {
    label: 'Apply Date',
    type: 'date',
  },
  {
    label: 'Salary',
    placeholder: '100k - 120k',
    optional: true,
    icon: <BanknotesIcon className="h-4 w-4" />,
  },
  {
    label: 'Job Listing URL',
    placeholder: 'https://google.com/jobs/1234',
    optional: true,
    icon: <LinkIcon className="h-4 w-4" />,
  },
];

const getTodayInDateFormat = (): string => {
  const now = new Date();
  now.setTime(now.getTime() - now.getTimezoneOffset() * 60 * 1000);

  return `${now.getFullYear()}-${
    '0' + (now.getMonth() + 1).toString().slice(-2)
  }-${('0' + now.getDate().toString()).slice(-2)}`;
};

export const AddJobModal = (): ReactElement => {
  const addJobModalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        className="btn btn-primary mr-4"
        onClick={() => addJobModalRef.current?.showModal()}
      >
        <PlusIcon className="h-4 w-4" />
        Add Job
      </button>
      <dialog className="modal" ref={addJobModalRef}>
        <div className="modal-box">
          <h2 className="text-3xl font-bold">Add Job</h2>
          <p className="text-md mt-1 text-slate-400">
            Enter information to track your job application
          </p>
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-5 top-5">
              <XMarkIcon className="size-6" />
            </button>
          </form>
          <div className="mt-6">
            {formFields.map((field, idx) => (
              <>
                <div
                  className={`label
                    ${idx !== 0 ? 'mt-2' : ''}`}
                >
                  <span className="label-text">{field.label}</span>
                </div>
                <div
                  className="input input-bordered flex items-center gap-2"
                  key={field.label}
                >
                  {field?.icon}
                  <input
                    type={field?.type || 'text'}
                    className="grow"
                    placeholder={field.placeholder}
                    defaultValue={
                      field?.type === 'date' ? getTodayInDateFormat() : ''
                    }
                  />
                  {field.optional && (
                    <span className="badge badge-neutral">Optional</span>
                  )}
                </div>
              </>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog" className="w-full">
              <button className="btn btn-primary w-full">Add Job</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
