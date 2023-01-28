import { ReactElement } from 'react';

export const Overlay = (): ReactElement<HTMLDivElement> => {
  return <div className="bg-slate-900 w-screen h-screen absolute top-0 left-0 opacity-50" />;
};
