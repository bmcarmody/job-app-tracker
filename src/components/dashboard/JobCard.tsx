import { type ReactElement } from "react";
import { RiArrowUpLine, RiBuilding4Line, RiExternalLinkFill, RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";
import Tooltip from "~/components/Tooltip";
import { useDraggable } from "@dnd-kit/core";

export interface Job {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  status: string;
  position: string;
  company: string;
  jobPostUrl: string;
  confidenceLevel: number;
  applyDate: Date;
  statusId: string;
}

interface Props {
  data: Job;
  className?: string;
}

const formatDate = (date: Date): string => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};

const JobCard = ({ data, className }: Props): ReactElement<HTMLElement> => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: data.id,
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <section className={`bg-slate-800 rounded-lg p-3 outline outline-offset-2 outline-1 outline-slate-600 cursor-grab text-slate-100 active:pointer-events-none ${className ?? ''}`} ref={setNodeRef} style={style} {...listeners} {...attributes}>
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

JobCard.defaultProps = {
  className: '',
};

export default JobCard;
