import React from 'react';
import { AddNewItem } from './components/AddNewItem/AddNewItem';
import { Card } from './components/Card/Card';
import { Column } from './components/Column/Column';
import { AppContainer } from './styles';

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold"></Card>
      </Column>

      <Column text="In Progress">
        <Card text="Learn Typescript"></Card>
      </Column>

      <Column text="Done">
        <Card text="Begin to use static typing"></Card>
      </Column>

      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log}/>
    </AppContainer>
  );
}

export default App;
