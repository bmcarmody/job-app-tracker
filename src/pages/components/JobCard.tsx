import { type ReactElement } from "react";
import { RiArrowUpLine, RiBuilding4Line, RiExternalLinkFill, RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";
import { Tooltip } from "./Tooltip";

export const JobCard = (): ReactElement<HTMLElement> => {
  return (
    <section className="bg-slate-800 rounded-lg p-3 outline outline-offset-2 outline-1 outline-slate-600 cursor-grab text-slate-100">
      <h3 className="font-display text-lg font-medium">Google</h3>
      <p className="font-body text-xs flex items-center hover:text-rose-600 hover:cursor-pointer">Senior Frontend Engineer <RiExternalLinkFill className="ml-0.5 text-sm" /></p>
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
          tooltipContent={<>Applied 01/01/2023</>}
        >
          <RiTimeLine className="text-xl mr-0.5" /> 5 days ago
        </Tooltip>
      </footer>
    </section>
  );
};
