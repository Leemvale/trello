import { useDrag } from "react-dnd"
import { useAppState } from "../../stateManagement/AppStateContext"
import { DragItem } from "../../types/types/dnd/ColumnDragItem";

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch({
        type: "SET_DRAGGED_ITEM",
        payload: item
      });
      return item;
    },
    end: () => dispatch({
      type: "SET_DRAGGED_ITEM", payload: undefined
    })
  })
  return { drag }
}
