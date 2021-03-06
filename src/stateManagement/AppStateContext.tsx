import React, {createContext, useContext, useReducer} from 'react';
import { v4 as uuid } from 'uuid';
import { List } from '../types/interfaces/entities/list';
import { DragItem } from '../types/types/dnd/ColumnDragItem';
import { Action } from '../types/types/stateManagement/action';
import { findItemIndexById } from '../utils/findItemIndexById';
import { moveItem } from '../utils/dnd/moveItem';

export interface AppState {
  lists: List[],
  draggedItem?: DragItem,
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c1", text: "Learn typescript" }]
    },
    {
      id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }]
    },
  ]
}

type AppStateContextProps = {
  state: AppState,
  dispatch: React.Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_LIST": {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: uuid(),
            text: action.payload,
            tasks: [],
          }
        ]
      }
    }
    case "ADD_TASK": {
      const listIndex = findItemIndexById(
        state.lists,
        action.payload.listId,
      )
      const newTasks = [...state.lists[listIndex].tasks, {
        id: uuid(),
        text: action.payload.text,
      }];

      const newLists = [
        ...state.lists.slice(0, listIndex),
        {
          ...state.lists[listIndex],
          tasks: newTasks,
        },
        ...state.lists.slice(listIndex + 1, state.lists.length),
      ]

      return {
        ...state,
        lists: newLists,
      }
    }
    case "MOVE_LIST": {
      const { dragIndex, hoverIndex } = action.payload
      const lists = moveItem(state.lists, dragIndex, hoverIndex)
      return { 
        ...state,
        lists
      }
    }
    case "SET_DRAGGED_ITEM": {
      console.log(action.payload)
      return { ...state, draggedItem: action.payload }
    }
    default: {
      return state
    }
  }
};

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useAppState = () => {
  return useContext(AppStateContext);
}

