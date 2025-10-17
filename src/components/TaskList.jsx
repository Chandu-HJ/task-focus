export default function TaskList({tasks, updateTask, deleteTask}) {

    function toggleComplete(index) {
        // (tasks[index].completed)? tasks[index].completed = false : tasks[index].completed = true;

        const updatedT = {...tasks[index], completed: !tasks[index].completed};
        updateTask(updatedT, index);
    }
  return (
    <ul>
        {tasks.map((task, index) =>(
            <li key={index}>
                <div>
                    <span>{task.text}
                    <small>({task.category}, {task.priority})</small>
                    </span>

                </div>

                <div>
                    {/* {index  % 2 === 0 ? task.completed = true : task.completed = false} */}
                    <button onClick={() => toggleComplete(index)}>{task.completed ? "Undo" : "Complete"}</button>
                    <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
            </li>
        ))}
    </ul>
  )
}