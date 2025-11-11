import { useState } from "react";

import Header from "./components/Header";
import goalImg from './assets/goals.jpg'
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoalType = {
  title: string,
  description: string,
  id: number,
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([])

  const handleAddNewGoal = (title: string, summary: string) => {
    const newGoal: CourseGoalType = {
      id: Math.random(),
      title: title,
      description: summary
    }

    setGoals((prevGoals) => {
      return ([...prevGoals, newGoal])
    })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) => {
      return (
        prevGoals.filter(goal => goal.id !== id)
      )
    })
  }

  return <main>
    <Header image={{src: goalImg, alt:'A list of goals'}}>
        <h1>Your Course Goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddNewGoal} />
    <CourseGoalList goals={goals} deleteGoal={handleDeleteGoal} />
  </main>
}
