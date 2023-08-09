import { type ReactElement } from "react";

export const JobCard = (): ReactElement<HTMLElement> => {
  return (
    <section className="bg-slate-800 rounded-lg p-4">
      <h3 className="font-display text-lg font-medium text-slate-100">Job Title</h3>
      <p className="font-body text-base text-slate-200">Company Name</p>
      <p className="font-body text-base text-slate-200">Location</p>
    </section>
  );
};
