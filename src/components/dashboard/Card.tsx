import { type ReactElement } from "react";
import { RiArrowUpLine, RiBuilding4Line, RiExternalLinkFill, RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";
import { DropIndicator } from "./DropIndicator";

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
          <p className="text-xs flex items-center hover:text-rose-600 hover:cursor-pointer">{data.position}<RiExternalLinkFill className="ml-0.5 text-sm" /></p>
          <section className="font-body text-xs flex items-center justify-between">
            <div className="flex items-center">
              <RiBuilding4Line className="text-l mr-0.5" />
              Remote
            </div>
            <div className="ml-auto">
              <RiArrowUpLine className="text-green-400 text-xl" />
            </div>
          </section>
          <footer className="flex items-center leading-5 text-xs justify-between mt-1">
            <div className="flex items-center">
              <RiMoneyDollarCircleLine className="text-xl mr-0.5" />
              100k - 120k
            </div>
            <RiTimeLine className="text-xl mr-0.5" /> 5 days ago
          </footer>
        </div>
      </div>
    </>
  );
};

export default Card;
