
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ManageStocks from './components/ManageStocks';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/manage-stocks" element={<ManageStocks />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;