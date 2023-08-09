import { StatusColumn } from "../components/StatusColumn";

const DashboardPage = () => {
  return (
    <div className="flex justify-between">
      <StatusColumn title="Researching" />
      <StatusColumn title="Applied" />
      <StatusColumn title="Interviewing" />
      <StatusColumn title="Offer" />
      <StatusColumn title="Rejected / Withdrawn" />
    </div>
  );
};

export default DashboardPage;
