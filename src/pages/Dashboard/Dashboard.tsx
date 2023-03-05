import { useState } from 'react';
import { ApplicationForm } from '../../components/ApplicationForm';
import { Column } from '../../components/Column';
import { Overlay } from '../../library/Overlay';

export const Dashboard = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="h-full">
      <button className="block ml-auto mb-4 btn btn-primary" onClick={() => setShowApplicationForm(true)}>
        Add Application
      </button>
      <div className="columns-4">
        <Column name="Applied" />
        <Column name="In Process" />
        <Column name="Rejected" />
        <Column name="No Response (after 30 days)" />
      </div>
      {showApplicationForm && (
        <>
          <Overlay />
          <ApplicationForm onCancel={() => setShowApplicationForm(false)} />
        </>
      )}
    </div>
  );
};
