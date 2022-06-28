import { Task } from "./task";

export type List = {
  id: string,
  text: string,
  tasks: Task[],
}