import Dashboard from "~/components/dashboard/Dashboard";
import { api } from "~/trpc/server";

const DashboardPage = () => {
  const test = api.application.getAll.query();

  console.log(test);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
