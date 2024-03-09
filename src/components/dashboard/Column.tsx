import { type ReactElement } from "react";
import Card from "./Card";

export interface ColumnData {
  name: string;
  applications: any;
}

interface Props {
  data: ColumnData;
}

const Column = ({ data }: Props): ReactElement<HTMLElement> => {
  const { name, applications } = data;

  return (
    <section className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-display font-medium text-slate-100">{name}</h3>
        <span className="text-sm text-neutral-400">{applications.length}</span>
      </div>
      {applications.map((application) => (
        <Card key={application.id} data={application} className="first:mt-0 mt-4" />
      ))}
      {/* <div className="h-full w-full transition-colors bg-neutral-800/50" /> */}
    </section>
  );
};

export default Column;
