'use client';

import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  DocumentIcon,
  MapPinIcon,
  PlusIcon,
} from '@heroicons/react/24/solid';
import { type ReactElement, useRef } from 'react';

type FormField = {
  label: string;
  icon?: ReactElement;
  optional?: boolean;
  type?: 'text' | 'date';
};

const formFields: FormField[] = [
  {
    label: 'Company',
    icon: <BuildingOffice2Icon className="h-4 w-4" />,
  },
  {
    label: 'Position',
    icon: <BriefcaseIcon className="h-4 w-4" />,
  },
  {
    label: 'Location',
    icon: <MapPinIcon className="h-4 w-4" />,
  },
  {
    label: 'Apply Date',
    type: 'date',
  },
  {
    label: 'Job Listing URL',
    optional: true,
    icon: <DocumentIcon className="h-4 w-4" />,
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
          <h2 className="text-2xl font-bold">Add Job</h2>
          <div className="pt-6">
            {formFields.map((field, idx) => (
              <label
                className={`input input-bordered flex items-center gap-2 ${
                  idx !== 0 ? 'mt-4' : ''
                }`}
                key={field.label}
              >
                {field?.icon}
                <input
                  type={field?.type || 'text'}
                  className="grow"
                  placeholder={field.label}
                  defaultValue={
                    field?.type === 'date' ? getTodayInDateFormat() : ''
                  }
                />
                {field.optional && (
                  <span className="badge badge-info badge-outline">
                    Optional
                  </span>
                )}
              </label>
            ))}
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-outline btn-secondary">Cancel</button>
              <button className="btn btn-primary ml-4">Add Job</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
