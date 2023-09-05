import { Route, Routes } from 'react-router-dom';

const HomePage = () => {
  return <div>This is HomePage</div>;
};

const StarredPage = () => {
  return <div>This is Starred Page</div>;
};

const NotFoundPage = () => {
  return <div>This is 404 Page</div>;
};

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/starred" element={<StarredPage />} />
      
      {/* Define the 404 Page with a wildcard path */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;

