import { ReactElement } from 'react';

type Props = {
  name: string;
};

export const Column = ({ name }: Props): ReactElement => {
  return (
    <div>
      <h2 className="text-secondary-content mb-2">{name}</h2>
      <div className="rounded bg-base-content p-4">Column Stuff</div>
    </div>
  );
};
