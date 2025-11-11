import { type ReactNode } from "react";
import { type CourseGoalType } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListInterface {
    goals: CourseGoalType[];
    deleteGoal: (id: number) => void;
}


export default function CourseGoalList ({goals, deleteGoal} : CourseGoalListInterface ) {
  if(goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goal yet. Start adding some!
      </InfoBox>
    )
  }

  let warningBox: ReactNode

  if(goals.length >= 4) {
    warningBox = <InfoBox mode="warning" severity="high">You have to many goal!</InfoBox>
  }
    return (
      <>
        {warningBox}
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal id={goal.id} title={goal.title} onDelete={deleteGoal}>
                <p>{goal.description}</p>
              </CourseGoal>          
            </li>
          ))}
        </ul>
      </>
    ) 
}