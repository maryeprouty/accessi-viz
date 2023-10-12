import './App.css';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Screen Reader User Preferences</h1>
      </header>
      <main>
        <Dashboard></Dashboard>
      </main>
    </div>
  );
}

export default App;
