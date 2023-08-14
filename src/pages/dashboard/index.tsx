import { DndContext } from "@dnd-kit/core";
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
      <DndContext>
        {columns.map((columnName, idx) => {
          let margin = 'mx-4';

          if (idx === 0) {
            margin = 'mr-4';
          }

          if (idx === columns.length - 1) {
            margin = 'ml-4';
          }

          return (
            <StatusColumn title={columnName} className={`flex-grow ${margin}`} key={columnName.toLowerCase()} />
          )
        })}
      </DndContext>
    </div>
  );
};

export default DashboardPage;
