import React, { useRef } from 'react';
import { useDrop } from "react-dnd";
import { useItemDrag } from '../../hooks/useItemDrag/useItemDrag';
import { useAppState } from '../../stateManagement/AppStateContext';
import { List } from '../../types/interfaces/entities/list';
import { DragItem } from '../../types/types/dnd/ColumnDragItem';
import { isHidden } from '../../utils/dnd/isHidden';
import { AddNewItem } from '../AddNewItem/AddNewItem';
import { Card } from '../Card/Card';
import { ColumnContainer, ColumnTitle } from './Column.styles';


interface ColumnProps extends List {
  index: number,
}

export const Column = ({ text, tasks, index, id }: React.PropsWithChildren<ColumnProps>) => {
  const { state, dispatch } = useAppState();

  const ref = useRef<HTMLDivElement>(null)
  const { drag } = useItemDrag({ type: "COLUMN", id, index, text })

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      dispatch({
        type: "MOVE_LIST", payload: { dragIndex, hoverIndex }
      })
      item.index = hoverIndex
    }
  })

  drag(drop(ref));

  const onTaskAdd = (taskText: string) => {
    dispatch({ type: "ADD_TASK", payload: { text: taskText, listId: id }})
  }

  return (
    <ColumnContainer ref={ref} isHidden={isHidden(state.draggedItem, "COLUMN", id)}>
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