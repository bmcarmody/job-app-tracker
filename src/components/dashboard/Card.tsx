import { type ReactElement } from "react";
import { RiArrowUpLine, RiBuilding4Line, RiExternalLinkFill, RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";
import Tooltip from "~/components/Tooltip";

interface Props {
  data: any;
  className?: string;
}

const formatDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

const Card = ({ data }: Props): ReactElement<HTMLElement> => {

  return (
    <section draggable className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing text-slate-300">
      <h3 className="font-display text-lg font-medium">{data.company}</h3>
      <p className="font-body text-xs flex items-center hover:text-rose-600 hover:cursor-pointer">{data.position}<RiExternalLinkFill className="ml-0.5 text-sm" /></p>
      <section className="font-body text-xs flex items-center mt-1 justify-between">
        <div className="flex items-center">
          <RiBuilding4Line className="text-l mr-0.5" />
          Remote
        </div>
        <div className="ml-auto">
          <Tooltip tooltipContent="High Confidence Level">
            <RiArrowUpLine className="text-green-400 text-xl" />
          </Tooltip>
        </div>
      </section>
      <footer className="flex items-center leading-5 text-xs justify-between mt-1">
        <div className="flex items-center">
          <RiMoneyDollarCircleLine className="text-xl mr-0.5" />
          100k - 120k
        </div>
        <Tooltip
          triggerClassName="flex items-center ml-auto"
          tooltipContent={<>{formatDate(data.applyDate)}</>}
        >
          <RiTimeLine className="text-xl mr-0.5" /> 5 days ago
        </Tooltip>
      </footer>
    </section>
  );
};

export default Card;
