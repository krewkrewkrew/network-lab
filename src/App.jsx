import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LabSelector from './pages/LabSelector';
import VyOSSimulator from './pages/VyOSSimulator';
import CiscoSimulator from './pages/CiscoSimulator';
import UbuntuSimulator from './pages/UbuntuSimulator';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route path="/" element={<LabSelector />} />
          <Route path="/vyos" element={<VyOSSimulator />} />
          <Route path="/cisco" element={<CiscoSimulator />} />
          <Route path="/ubuntu" element={<UbuntuSimulator />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;