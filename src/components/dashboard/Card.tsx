import { type ReactElement } from 'react';
import { DropIndicator } from './DropIndicator';
import {
  ArrowTopRightOnSquareIcon,
  ArrowUpIcon,
  BuildingOfficeIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/solid';

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
        className="card card-compact cursor-grab bg-base-300 text-neutral-content active:cursor-grabbing"
      >
        <div className="card-body gap-1">
          <h3 className="card-title">{data.company}</h3>
          <p className="flex items-center text-xs hover:cursor-pointer hover:text-rose-600">
            {data.position}
            <ArrowTopRightOnSquareIcon className="ml-0.5 h-4 w-4" />
          </p>
          <section className="flex items-center justify-between font-body text-xs">
            <div className="flex items-center">
              <BuildingOfficeIcon className="mr-0.5 h-4 w-4" />
              Remote
            </div>
            <div className="ml-auto">
              <ArrowUpIcon className="h-4 w-4 text-success" />
            </div>
          </section>
          <footer className="mt-1 flex items-center justify-between text-xs leading-5">
            <div className="flex items-center">
              <CurrencyDollarIcon className="mr-0.5 h-4 w-4" />
              100k - 120k
            </div>
            <div className="flex items-center">
              <ClockIcon className="mr-0.5 h-4 w-4" />5 days
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
