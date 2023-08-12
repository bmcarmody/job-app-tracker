import { type ReactElement } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ClockIcon } from "@radix-ui/react-icons";

export const JobCard = (): ReactElement<HTMLElement> => {
  return (
    <section className="bg-slate-800 rounded-lg p-3 outline outline-offset-2 outline-1 outline-slate-600 cursor-grab text-slate-100">
      <h3 className="font-display text-lg font-medium">Google</h3>
      <p className="font-body text-xs">Senior Frontend Engineer</p>
      <p className="font-body text-base">Remote</p>
      <footer className="flex items-center leading-5 text-sm justify-end">
        <Tooltip.Provider delayDuration={0}>
          <Tooltip.Root>
            <Tooltip.Trigger className="flex items-center">
              <><ClockIcon /> <div className="ml-1">5 days ago</div></>
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
