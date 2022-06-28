import React from 'react';
import { useAppState } from '../../stateManagement/AppStateContext';
import { Task } from '../../types/entities/task';
import { AddNewItem } from '../AddNewItem/AddNewItem';
import { Card } from '../Card/Card';
import { ColumnContainer, ColumnTitle } from './Column.styles';

type ColumnProps = {
  text: string,
  tasks: Task[],
  id: string,
}

export const Column = ({ text, tasks, id }: React.PropsWithChildren<ColumnProps>) => {
  const { dispatch } = useAppState();
  
  const onTaskAdd = (taskText: string) => {
    dispatch({ type: "ADD_TASK", payload: { text: taskText, listId: id }})
  }

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={onTaskAdd}
        dark
      />
    </ColumnContainer>) 
}