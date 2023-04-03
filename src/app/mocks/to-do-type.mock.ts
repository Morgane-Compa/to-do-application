type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

export interface Task {
id: number;
content: string;
// category: CategoryType;
category: string;
isUrgent: boolean;
doneDate: number;
isDone: boolean
}
