export default function TaskList({ tasks, updateTask, deleteTask }) {

  function toggleComplete(index) {
    const updatedT = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedT, index);
  }

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <div>
            {/* 👇 Apply inline style conditionally */}
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black"
              }}
            >
              {task.text}
              <small> ({task.category}, {task.priority})</small>
            </span>
          </div>

          <div>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
