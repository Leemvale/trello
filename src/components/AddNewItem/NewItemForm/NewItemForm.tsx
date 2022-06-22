import React, { useState } from "react";
import { useFocus } from "../../../hooks/useFocus/useFocus";
import { NewItemButton, NewItemFormContainer, NewItemInput } from "./NewItemForm.styles";

type NewItemFormProps = {
  onAdd(text: string): void
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onNewItemButtonClick = () => {
    onAdd(text)
  }

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={onInputChange}
      />

      <NewItemButton onClick={onNewItemButtonClick}>
        Create
      </NewItemButton>
    </NewItemFormContainer>
  )
}