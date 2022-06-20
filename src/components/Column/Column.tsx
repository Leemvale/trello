import React from 'react';
import { AddNewItem } from '../AddNewItem/AddNewItem';
import { ColumnContainer, ColumnTitle } from './Column.styles';

type ColumnProps = {
  text?: string
}

export const Column = ({ text, children }: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText='+ Add another task'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>) 
}