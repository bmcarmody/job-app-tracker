import { ApplicationForm } from '../../components/ApplicationForm';
import { Column } from '../../components/Column';

const applicationFormModalLabel = 'applicationForm';

export const Dashboard = () => {
  return (
    <div className="h-full flex flex-col">
      {/* eslint-disable-next-line */}
      <div className="flex justify-end">
        <label htmlFor={applicationFormModalLabel} className="btn btn-primary mb-4">
          Add Application
        </label>
      </div>
      <div className="grid grid-flow-col gap-4 h-full">
        <Column name="👏 Applied" />
        <Column name="🧐 Interviewing" />
        <Column name="👻 Stale" />
        <Column name="❌ Rejected" />
      </div>
      <input type="checkbox" id={applicationFormModalLabel} className="modal-toggle" />
      <ApplicationForm modalLabel={applicationFormModalLabel} />
    </div>
  );
};
