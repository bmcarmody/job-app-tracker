import { type ReactElement } from "react";

export const JobCard = (): ReactElement<HTMLElement> => {
  return (
    <section className="bg-slate-800 rounded-lg p-4 outline outline-offset-2 outline-1 outline-slate-600 cursor-grab">
      <h3 className="font-display text-lg font-medium text-slate-100">Google</h3>
      <p className="font-body text-xs text-slate-200">Senior Frontend Engineer</p>
      <p className="font-body text-base text-slate-200">Remote</p>
    </section>
  );
};
