import MainPageLayout from '../components/MainPageLayout';
import { useState } from 'react';
import { apiGet } from '../misc/config';
import ActorGrid from '../components/actor/ActorGrid';
import ShowGrid from '../components/show/ShowGrid';

const Home = () => {
  // eslint-disable-next-line
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const isShowsSearch = searchOption === 'shows';

  const onInputChange = evt => {
    setInput(evt.target.value);
    // console.log(evt.target.value);
  };

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls

    apiGet(`/search/${searchOption}?q=${input}`).then(
      result => {
        setResults(result);
      }
    );
  };

  const onKeyDown = evt => {
    if (evt.keyCode === 13) {
      onSearch();
    }
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  console.log('Search Option:', searchOption);

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      console.log(results)
      return results[0].show 
        ? <ShowGrid data={results} />
        : <ActorGrid data={results} />

        // results.map(item => <div key={item.show.id}> {item.show.name} </div>)
        // : results.map(item => <div key={item.person.id}> {item.person.name} </div>);
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for Something"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows:
          <input
            id="shows-search"
            type="radio"
            value="shows"
            checked={isShowsSearch}
            onChange={onRadioChange}
          />
        </label>

        <label htmlFor="actors-search">
          Actors:
          <input
            id="actors-search"
            type="radio"
            value="people"
            checked={!isShowsSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
