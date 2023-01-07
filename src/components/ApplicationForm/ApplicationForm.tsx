export const ApplicationForm = () => {
  return (
    <div className="bg-slate-600 p-4 rounded w-full flex flex-col text-slate-200">
      <label>
        Company Name:
        <input type="text" className="ml-4 mb-4 text-black px-4 py-1 rounded outline-none" />
      </label>
      <label>
        Position:
        <input type="text" className="ml-4 mb-4 text-black px-4 py-1 rounded outline-none" />
      </label>
      <label>
        Date Applied:
        <input type="date" className="ml-4 mb-4 text-black px-4 py-1 rounded outline-none" />
      </label>
      <label>
        Job Posting Link:
        <input type="text" className="ml-4 text-black px-4 py-1 rounded outline-none" />
      </label>
    </div>
  );
};
