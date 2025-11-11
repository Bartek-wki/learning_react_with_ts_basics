import { useRef, type FormEvent } from "react";

interface NewGoalInterface {
    onAddGoal: (title: string, summary: string) => void
}

export default function NewGoal({onAddGoal}: NewGoalInterface) {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const enternedGoal = goal.current!.value
        const enternedSummary = summary.current!.value

        event.currentTarget.reset()
        onAddGoal(enternedGoal, enternedSummary)
    }

    return <form onSubmit={handleSubmit}>
        <p>
            <label htmlFor="goal">Your goal</label>
            <input id="goal" type="text" ref={goal} />
        </p>
        <p>
            <label htmlFor="summary">Short summary</label>
            <input id="summary" type="text" ref={summary} />
        </p>
        <button>Add Goal</button>
    </form>
}