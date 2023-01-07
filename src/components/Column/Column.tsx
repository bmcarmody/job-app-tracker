import { ReactElement } from 'react';

type Props = {
  name: string;
};

export const Column = ({ name }: Props): ReactElement => {
  return (
    <div>
      <h1>{name}</h1>
      <div className="rounded bg-slate-300 p-4">Column Stuff</div>
    </div>
  );
};
