import React from 'react';
import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { Column } from './components/Column/Column';
import { useAppState } from './stateManagement/AppStateContext';
import { AppContainer } from './styles';

function App() {
  const { state, dispatch } = useAppState();

  const onListAdd = (text: string) => { 
    dispatch({ type: "ADD_LIST", payload: text })
  }

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column key={list.id} {...list} index={i} />
      ))}

      <AddNewItem toggleButtonText='+ Add another list' onAdd={onListAdd}/>
    </AppContainer>
  );
}

export default App;
