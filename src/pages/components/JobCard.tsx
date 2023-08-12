import { type ReactElement } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { RiMoneyDollarCircleLine, RiTimeLine } from "react-icons/ri";

export const JobCard = (): ReactElement<HTMLElement> => {
  return (
    <section className="bg-slate-800 rounded-lg p-3 outline outline-offset-2 outline-1 outline-slate-600 cursor-grab text-slate-100">
      <h3 className="font-display text-lg font-medium">Google</h3>
      <p className="font-body text-xs">Senior Frontend Engineer</p>
      <p className="font-body text-base">Remote</p>
      <footer className="flex items-center leading-5 text-xs justify-between">
        <div className="flex items-center">
          <RiMoneyDollarCircleLine className="text-xl mr-0.5 text-green-400" />
          100k - 120k
        </div>
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root>
            <Tooltip.Trigger className="flex items-center ml-auto">
              <><RiTimeLine className="text-xl mr-0.5" /> 5 days ago</>
            </Tooltip.Trigger>
            <Tooltip.Content className="p-2 bg-purple-600 rounded-lg">
              Applied 01/01/2023
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      </footer>
    </section>
  );
};
