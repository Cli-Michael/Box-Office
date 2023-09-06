import MainPageLayout from "../components/MainPageLayout";
import { useState } from "react";

const Home = () => {

  // eslint-disable-next-line 
  const [ input, setInput] = useState('');

  const onInputChange = (evt) => {
    setInput(evt.target.value);
    // console.log(evt.target.value);
  }

  const onSearch = () => {
    // https://api.tvmaze.com/search/shows?q=girls
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r => r.json()).then(result => {
      console.log(result);
    });
  };

  const onKeyDown = (evt) => {
    if(evt.keyCode === 13){
      onSearch();
    }
  }

  return (
    <MainPageLayout>
      <input type="text" onChange={ onInputChange } onKeyDown={ onKeyDown } value={ input } />
      <button type="button" onClick={ onSearch }>Search</button>
    </MainPageLayout>
  )
}

export default Home;