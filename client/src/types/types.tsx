export type Status = "todo" | "planned" | "in-progress" | "closed";

export interface TaskCardProps {
  id: string;
  title: string;
  points?: number;
  status: Status;
}

export const statuses: Status[] = ["todo", "planned", "in-progress", "closed"];
