import { type ReactElement } from 'react';
import { DropIndicator } from './DropIndicator';
import {
  BanknotesIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

interface Props {
  data: any;
  className?: string;
}

const Card = ({ data }: Props): ReactElement<HTMLElement> => {
  return (
    <>
      <DropIndicator beforeId={data.id} />
      <div
        draggable
        className="card card-compact cursor-grab rounded-lg bg-base-300 text-neutral-content active:cursor-grabbing"
      >
        <div className="gap-1 p-3">
          <div className="mb-2">
            <h3 className="text-lg font-semibold">{data.company}</h3>
            <p className="w-fit text-xs text-slate-500 hover:cursor-pointer hover:text-accent">
              {data.position}
            </p>
          </div>
          <div className="text-sm">
            <div className="mb-1 flex items-center">
              <MapPinIcon className="mr-2 size-4" />
              Remote
            </div>
            <footer className="mt-1 flex items-center justify-between text-xs leading-5">
              <div className="flex items-center">
                <BanknotesIcon className="mr-2 h-4 w-4" />
                100k - 120k
              </div>
              <div className="flex items-center">
                <ClockIcon className="mr-1 h-4 w-4" />5 days
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
