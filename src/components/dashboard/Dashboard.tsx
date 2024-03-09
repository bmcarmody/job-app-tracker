"use client"

import Column from "~/components/dashboard/Column";
import { useState } from "react";
import { type ColumnData } from "~/components/dashboard/Column";

const initialColumnData: ColumnData[] = [
  {
    name: "Researching",
    applications: [
      {
        id: "researching-1",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        status: "Researching",
        position: "Software Engineer",
        company: "Google",
        jobPostUrl: "https://www.google.com",
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: "1",
      },
      {
        id: "researching-2",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        status: "Researching",
        position: "Software Engineer",
        company: "Facebook",
        jobPostUrl: "https://www.facebook.com",
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: "1",
      }
    ],
  },
  {
    name: "Applied",
    applications: [
      {
        id: "applied-2",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        status: "Applied",
        position: "Software Engineer",
        company: "Apple",
        jobPostUrl: "https://www.apple.com",
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: "2",
      },
      {
        id: "applied-1",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        status: "Applied",
        position: "Software Engineer",
        company: "Microsoft",
        jobPostUrl: "https://www.microsoft.com",
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: "2",
      }
    ],
  },
  {
    name: "Interviewing",
    applications: [
      {
        id: "interviewing-3",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        status: "Interviewing",
        position: "Software Engineer",
        company: "Amazon",
        jobPostUrl: "https://www.amazon.com",
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: "3",
      },
    ],
  },
  {
    name: "Offer",
    applications: [
      {
        id: "offer-4",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: "1",
        status: "Offer",
        position: "Software Engineer",
        company: "Netflix",
        jobPostUrl: "https://www.netflix.com",
        confidenceLevel: 0,
        applyDate: new Date(),
        statusId: "4",
      }
    ],
  },
  {
    name: "Rejected",
    applications: [{
      id: "rejected-5",
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: "1",
      status: "Rejected",
      position: "Software Engineer",
      company: "Spotify",
      jobPostUrl: "https://www.spotify.com",
      confidenceLevel: 0,
      applyDate: new Date(),
      statusId: "5",
    }],
  },
];

const Dashboard = () => {
  const [columns, setColumns] = useState<ColumnData[]>(initialColumnData);

  return (
    <>
      {columns.map((column) => {
        return (
          <Column
            data={column}
            key={column.name.toLowerCase()}
          />
        );
      })}
    </>
  )
}

export default Dashboard;
