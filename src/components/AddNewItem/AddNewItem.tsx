import React, { useState } from "react";
import { AddItemButton } from "./AddNewItem.styles";
import { NewItemForm } from "./NewItemForm/NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void,
  toggleButtonText: string,
  dark?: boolean
}

export const AddNewItem = ({ onAdd, toggleButtonText, dark }: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false);

  const onAddItemButtonClick = () => {
    setShowForm(true);
  } 

  const onAddNewItem = (text: string) => {
    onAdd(text);
    setShowForm(false);
  } 

  return showForm
    ? (
      <NewItemForm
        onAdd={onAddNewItem}
      />
    )
    : (
      <AddItemButton dark={dark} onClick={onAddItemButtonClick}>
        {toggleButtonText}
      </AddItemButton>
    )
}