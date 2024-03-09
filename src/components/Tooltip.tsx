"use client";

import * as ReactTooltip from "@radix-ui/react-tooltip";
import type { ReactNode, ReactElement } from "react";

interface Props {
  triggerClassName?: string;
  children: ReactNode;
  tooltipContent: ReactNode;
}

const Tooltip = ({ triggerClassName, children, tooltipContent }: Props): ReactElement => {
  return (
    <ReactTooltip.Provider delayDuration={0}>
      <ReactTooltip.Root>
        <ReactTooltip.Trigger className={triggerClassName}>
          {children}
        </ReactTooltip.Trigger>
        <ReactTooltip.Content className="p-2 bg-purple-600 rounded-lg">
          {tooltipContent}
        </ReactTooltip.Content>
      </ReactTooltip.Root>
    </ReactTooltip.Provider>
  );
};

Tooltip.defaultProps = {
  triggerClassName: "",
};

export default Tooltip;
