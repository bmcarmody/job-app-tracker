import { Dashboard } from './pages/Dashboard';

const App = () => {
  return (
    <div className="w-full h-screen bg-base-100">
      <div className="max-w-7xl mx-auto p-8 h-full">
        <h1 className="text-primary-content text-2xl mb-4">📋 Job Application Tracker</h1>
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
