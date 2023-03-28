type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

interface ITodo {
id: number;
content: string;
// category: CategoryType;
category: string;
isUrgent: boolean;
doneDate: Date;
isDone: boolean
}
