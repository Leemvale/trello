import { Task } from "./task";

export interface List {
  id: string,
  text: string,
  tasks: Task[],
}