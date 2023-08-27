import { type ReactElement } from "react";
import { JobCard } from "./JobCard";
import { useDroppable } from "@dnd-kit/core";
import { type Job } from './JobCard';

export interface ColumnData {
  name: string;
  jobs: Job[] | [];
}

interface Props {
  data: ColumnData;
  className: string;

}

export const StatusColumn = ({ data, className }: Props): ReactElement<HTMLElement> => {
  const { name, jobs } = data;

  const { setNodeRef } = useDroppable({
    id: name.toLowerCase(),
  });

  return (
    <section className={className} ref={setNodeRef} >
      <h2 className="font-display text-xl font-medium text-slate-100 mb-4">{name}</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} data={job} className="first:mt-0 mt-4" />
      ))}
    </section>
  );
};
