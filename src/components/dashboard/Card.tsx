import { type ReactElement } from "react";
import { DropIndicator } from "./DropIndicator";
import { ArrowTopRightOnSquareIcon, ArrowUpIcon, BuildingOfficeIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

interface Props {
  data: any;
  className?: string;
}

const Card = ({ data }: Props): ReactElement<HTMLElement> => {
  return (
    <>
      <DropIndicator beforeId={data.id} />
      <div draggable className="cursor-grab active:cursor-grabbing card bg-base-300 text-neutral-content card-compact">
        <div className="card-body gap-1">
          <h3 className="card-title">{data.company}</h3>
          <p className="text-xs flex items-center hover:text-rose-600 hover:cursor-pointer">{data.position}<ArrowTopRightOnSquareIcon className="w-4 h-4 ml-0.5" /></p>
          <section className="font-body text-xs flex items-center justify-between">
            <div className="flex items-center">
              <BuildingOfficeIcon className="w-4 h-4 mr-0.5" />
              Remote
            </div>
            <div className="ml-auto">
              <ArrowUpIcon className="text-success w-4 h-4" />
            </div>
          </section>
          <footer className="flex items-center leading-5 text-xs justify-between mt-1">
            <div className="flex items-center">
              <CurrencyDollarIcon className="mr-0.5 h-4 w-4" />
              100k - 120k
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-0.5" />
              5 days
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
