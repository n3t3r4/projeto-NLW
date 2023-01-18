interface HabitProps{
    completed: number
}

export function Habit(props: HabitProps){
    return(
        <div className='bg-white w-10 h-10 text-zinc-900 rounded m-2 flex items-center justify-center'>{props.completed}</div>
    )
}