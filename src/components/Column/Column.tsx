import { ReactElement } from 'react';

type Props = {
  name: string;
};

export const Column = ({ name }: Props): ReactElement => {
  return (
    <div className="flex flex-col">
      <h2 className="text-secondary-content mb-2">{name}</h2>
      <div className="rounded bg-base-content text-neutral p-4 h-full">Column Stuff</div>
    </div>
  );
};
