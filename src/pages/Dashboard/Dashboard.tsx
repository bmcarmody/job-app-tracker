import { useState } from 'react';
import { ApplicationForm } from '../../components/ApplicationForm';
import { Column } from '../../components/Column';
import { Button } from '../../library/Button';

export const Dashboard = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <div className="h-full">
      <Button appearance="primary" additionalStyles="block ml-auto mb-4" onClick={() => setShowApplicationForm(true)}>
        Add Application
      </Button>
      <div className="columns-4">
        <Column name="Applied" />
        <Column name="In Process" />
        <Column name="Rejected" />
        <Column name="No Response (after 30 days)" />
      </div>
      {showApplicationForm && <ApplicationForm onCancel={() => setShowApplicationForm(false)} />}
    </div>
  );
};
