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
      {columns.map((columnName, idx) => {
        const useMargin = idx !== 0 && idx !== columns.length - 1;

        return (
          <StatusColumn title={columnName} className={`flex-grow ${useMargin ? 'mx-4' : ''}`} key={columnName} />
        )
      })}
    </div>
  );
};

export default DashboardPage;
