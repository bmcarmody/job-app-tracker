import { type ReactElement } from "react";
import { JobCard } from "./JobCard";

interface Props {
  title: string;
  className: string;
}

export const StatusColumn = ({ title, className }: Props): ReactElement<HTMLElement> => {
  return (
    <section className={className}>
      <h2 className="font-display text-xl font-medium text-slate-100 mb-4">{title}</h2>
      <JobCard />
    </section>
  );
};
