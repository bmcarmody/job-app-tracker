import Column from '../../components/Column/Column';

const Dashboard = () => {
  return (
    <div className="columns-4 p-8">
      <Column name="Applied" />
      <Column name="In Process" />
      <Column name="Rejected" />
      <Column name="No Response (after 30 days)" />
    </div>
  );
};

export default Dashboard;
