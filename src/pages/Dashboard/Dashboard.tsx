import { ApplicationForm } from '../../components/ApplicationForm';
import { Column } from '../../components/Column';
import { Button } from '../../library/Button';

export const Dashboard = () => {
  return (
    <div className="p-8">
      <Button content="Add Application" type="primary" additionalStyles="block ml-auto mb-4" />
      <div className="columns-4">
        <Column name="Applied" />
        <Column name="In Process" />
        <Column name="Rejected" />
        <Column name="No Response (after 30 days)" />
      </div>
      <ApplicationForm />
    </div>
  );
};
