type Props = {
  columnName: string;
  jobCards?: unknown;
};

const StatusColumn = ({ columnName }: Props) => {
  return (
    <div>
      <h2 className="mb-4 text-xl text-slate-100">{columnName}</h2>
      <div className="rounded-md bg-slate-100 p-2">Card</div>
    </div>
  );
};

export default StatusColumn;
