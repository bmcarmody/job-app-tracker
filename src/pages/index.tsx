// import { useUser } from "@clerk/clerk-react";
import { type NextPage } from "next";
import Head from "next/head";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import StatusColumn, { type ColumnData } from "../components/StatusColumn";
import { useState } from "react";

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
// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const { isSignedIn } = useUser();

  const [columns, setColumns] = useState<ColumnData[]>(initialColumnData);

  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;

    console.log(event);

    if (!over) {
      return;
    }

    const sourceColumnId = (active.id as string).split('-')[0];
    const targetColumnId = over.id;

    if (sourceColumnId === targetColumnId) {
      return;
    }

    const sourceColumn = columns.find(column => column.name.toLowerCase() === sourceColumnId);
    const targetColumn = columns.find(column => column.name.toLowerCase() === targetColumnId);

    if (!sourceColumn || !targetColumn) {
      return;
    }

    const jobBeingMoved = sourceColumn.jobs.find(job => job.id === active.id);

    if (!jobBeingMoved || !targetColumn) {
      return;
    }

    // Create new columns state by first removing the job from the source column
    // and then adding it to the target column.
    const newColumns = columns.map(column => {
      if (column.name.toLowerCase() === sourceColumnId) {
        return { ...column, jobs: column.jobs.filter(job => job.id !== active.id) };
      }

      if (column.name.toLowerCase() === targetColumnId) {
        const newJob = { ...jobBeingMoved };
        // Id should always be present on jobBeingMoved - this is just to ensure type safety
        const jobId = jobBeingMoved.id.split('-')[1] ?? 'default_id';


        newJob.status = targetColumn.name;
        newJob.id = `${targetColumn.name.toLowerCase()}-${jobId}`;
        return { ...column, jobs: [...column.jobs, newJob] };
      }

      return column;
    });

    setColumns(newColumns);
  };

  return (
    <>
      <Head>
        <title>Job App Tracker</title>
        <meta name="description" content="A job tracker personal project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex h-full">
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
                <StatusColumn data={column} className={`basis-5/12 ${margin}`} key={column.name.toLowerCase()} />
              )
            })}
          </DndContext>
        </div>
      </main>
    </>
  );
};

export default Home;
