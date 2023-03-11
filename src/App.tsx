import { Dashboard } from './pages/Dashboard';

const App = () => {
  return (
    <div className="w-full max-w-7xl h-screen bg-base-100 p-8 mx-auto flex flex-col">
      <h1 className="text-primary-content text-2xl mb-4">📋 Job Application Tracker</h1>
      <Dashboard />
    </div>
  );
};

export default App;
