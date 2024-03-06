import { type ReactElement } from "react";
import JobCard from "./JobCard";
import { type Job } from './JobCard';

export interface ColumnData {
  name: string;
  jobs: Job[] | [];
}

interface Props {
  data: ColumnData;
}

const StatusColumn = ({ data }: Props): ReactElement<HTMLElement> => {
  const { name, jobs } = data;

  return (
    <section className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display font-medium text-slate-100">{name}</h3>
        <span className="text-sm text-neutral-400">{jobs.length}</span>
      </div>
      {jobs.map((job) => (
        <JobCard key={job.id} data={job} className="first:mt-0 mt-4" />
      ))}
      <div className="h-full w-full transition-colors bg-neutral-800/50" />
    </section>
  );
};

export default StatusColumn;
