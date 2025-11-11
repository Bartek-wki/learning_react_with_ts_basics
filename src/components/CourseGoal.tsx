import { type ReactNode } from "react";

interface CourseGoalInterface {
    id: number;
    title: string;
    children: ReactNode;
    onDelete: (id: number) => void
}

export default function CourseGoal({id, title, children, onDelete} : CourseGoalInterface) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    </article>
}