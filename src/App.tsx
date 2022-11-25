import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/templates/AppLayout';
import Home from './pages/Home';
import MyRecord from './pages/MyRecord';
import Columns from './pages/Columns';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/columns" element={<Columns />} />
        <Route path="/my-record" element={<MyRecord />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
