import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

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
  
      <Route path="/show/:id" element={<Show />} />

    </Routes>
  );
};

export default App;
