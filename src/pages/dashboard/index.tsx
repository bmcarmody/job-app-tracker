import { StatusColumn } from "../components/StatusColumn";

const columns = [
  'Researching',
  'Applied',
  'Interviewing',
  'Offer',
  'Rejected'
]

const DashboardPage = () => {
  return (
    <div className="flex">
      {columns.map((columnName) => (
        <StatusColumn title={columnName} className="flex-grow m-4" key={columnName} />
      ))}
    </div>
  );
};

export default DashboardPage;
