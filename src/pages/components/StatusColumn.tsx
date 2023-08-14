import { type ReactElement } from "react";
import { JobCard } from "./JobCard";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  title: string;
  className: string;
}

export const StatusColumn = ({ title, className }: Props): ReactElement<HTMLElement> => {
  const { setNodeRef } = useDroppable({
    id: title.toLowerCase(),
  });

  return (
    <section className={className} ref={setNodeRef} >
      <h2 className="font-display text-xl font-medium text-slate-100 mb-4">{title}</h2>
      <JobCard columnId={title.toLowerCase()} />
    </section>
  );
};
