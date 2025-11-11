import { type CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalListInterface {
    goals: CourseGoalType[];
    deleteGoal: (id: number) => void;
}


export default function CourseGoalList ({goals, deleteGoal} : CourseGoalListInterface ) {
    return <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={deleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>          
        </li>
      ))}
    </ul>
}