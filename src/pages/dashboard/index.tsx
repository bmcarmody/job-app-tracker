import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { StatusColumn } from "../components/StatusColumn";
import { useState } from "react";
import { type ColumnData } from '../components/StatusColumn';

const initialColumnData: ColumnData[] = [
  {
    name: 'Researching',
    jobs: [
      {
        id: 'researching-1',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: '1',
        status: 'Researching',
        position: 'Software Engineer',
        company: 'Google',
        jobPostUrl: 'https://www.google.com',
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: '1',
      }
    ],
  },
  {
    name: 'Applied',
    jobs: [
      {
        id: 'applied-2',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: '1',
        status: 'Applied',
        position: 'Software Engineer',
        company: 'Apple',
        jobPostUrl: 'https://www.apple.com',
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: '2',
      }
    ],
  },
  {
    name: 'Interviewing',
    jobs: [
      {
        id: 'interviewing-3',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: '1',
        status: 'Interviewing',
        position: 'Software Engineer',
        company: 'Amazon',
        jobPostUrl: 'https://www.amazon.com',
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: '3',
      }
    ],
  },
  {
    name: 'Offer',
    jobs: [],
  },
  {
    name: 'Rejected',
    jobs: [],
  },
];

const DashboardPage = () => {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumnData);

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;

    if (!over || active.id === over.id) {
      return;
    }

    const sourceColumnId = (active.id as string).split('-')[0];
    const targetColumnId = over.id;

    const sourceColumn = columns.find(column => column.name.toLowerCase() === sourceColumnId);
    const targetColumn = columns.find(column => column.name.toLowerCase() === targetColumnId);

    if (!sourceColumn || !targetColumn) {
      return;
    }

    const itemBeingMoved = sourceColumn.jobs.find(job => job.id === active.id);

    if (!itemBeingMoved) {
      return;
    }

    // Create new columns state by first removing the job from the source column
    // and then adding it to the target column.
    const newColumns = columns.map(column => {
      if (column.name.toLowerCase() === sourceColumnId) {
        return { ...column, jobs: column.jobs.filter(job => job.id !== active.id) };
      }

      if (column.name.toLowerCase() === targetColumnId) {
        itemBeingMoved.status = targetColumn.name;
        itemBeingMoved.id = `${targetColumn.name.toLowerCase()}-${itemBeingMoved.id.split('-')[1]}`;

        return { ...column, jobs: [...column.jobs, itemBeingMoved] };
      }

      return column;
    });

    setColumns(newColumns);
  };

  return (
    <div className="flex">
      <DndContext onDragEnd={handleDragEnd}>
        {columns.map((column, idx) => {
          let margin = 'mx-4';

          if (idx === 0) {
            margin = 'mr-4';
          }

          if (idx === columns.length - 1) {
            margin = 'ml-4';
          }

          return (
            <StatusColumn data={column} className={`flex-grow ${margin}`} key={column.name.toLowerCase()} />
          )
        })}
      </DndContext>
    </div>
  );
};

export default DashboardPage;
