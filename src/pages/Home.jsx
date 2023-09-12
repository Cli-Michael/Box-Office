import MainPageLayout from '../components/MainPageLayout';
import { useState } from 'react';
import { apiGet } from '../misc/config';

const Home = () => {
  // eslint-disable-next-line
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = evt => {
    setInput(evt.target.value);
    // console.log(evt.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
 
    apiGet(`https://api.tvmaze.com/search/shows?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onKeyDown = evt => {
    if (evt.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}> {item.show.name} </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
