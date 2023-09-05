import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

const NotFoundPage = () => {
  return <div>This is 404 Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />

      {/* Define the 404 Page with a wildcard path */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
