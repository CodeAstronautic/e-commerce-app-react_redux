import React from 'react'
import SearchBox from '../SearchBox/SearchBox';
import FilterList from '../FilterList/FilterList';
import PhoneGrid from '../VivoGrid/PhoneGrid';
import AddPhoneBtn from '../AddVivoBtn/AddVivoBtn';

const HomePage = () => {
  return (
    <div className="App">
      <SearchBox />
      <FilterList />
      <AddPhoneBtn />
      <div className='main-grid'>
        <PhoneGrid />
      </div>
    </div>
  )
}

export default HomePage
