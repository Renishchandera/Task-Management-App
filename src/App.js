import {memo, useCallback, useEffect, useRef, useState} from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import TaskNavTabs from './components/TaskNavTabs';
import BottomPanel from './components/BottomPanel';
import './App.css';
import AlignUpdates from './components/update';
import TasksContainer from './components/TasksContainer';
import HiddenEditForm from './components/HiddenEditForm';

function App() {
  const [type, setType] = useState(false);
  const [filter, setFilter] = useState({type: 'Sort', subType: 'RecentlyAdded'});

  const [appVersion , setAppVersion] = useState(JSON.parse(localStorage.getItem('version')));
  let isUpdated = appVersion !== '3' ?true:false;
  

  const updateType = useCallback((t) =>
  {
    setType(t);
  }, [type]);



  return (
    <>
      <Header />
      {/* <FilterPanel setFilter={setFilter}/> */}
      <TaskNavTabs setType={updateType}/>
      <TasksContainer type={type} filter={filter}/>
      <BottomPanel/>
      {<HiddenEditForm/>}
      {isUpdated && <AlignUpdates setStatus={setAppVersion}/>}
    </>
  );
}

export default (App);
