import { Column } from '../../components/Column';

export const Dashboard = () => {
  return (
    <div className="p-8">
      <button className="p-4 bg-purple-600 text-slate-200 rounded block ml-auto mb-4">Add Application</button>
      <div className="columns-4">
        <Column name="Applied" />
        <Column name="In Process" />
        <Column name="Rejected" />
        <Column name="No Response (after 30 days)" />
      </div>
    </div>
  );
};
