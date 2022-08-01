import { Item } from "../types/interfaces/entities/item";

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
  return items.findIndex((item: T) => item.id === id)
}