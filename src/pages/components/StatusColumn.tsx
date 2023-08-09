import { type ReactElement } from "react";

interface Props {
  title: string;
}

export const StatusColumn = ({ title }: Props): ReactElement<HTMLElement> => {
  return (
    <section>
      <h2 className="font-display text-xl font-medium text-slate-100">{title}</h2>
    </section>
  );
};
