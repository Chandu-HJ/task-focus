import './styles/Taskform.css'
function Taskform() {
    return(
        <div>
            {/* <h1>Task Form Compnent</h1> */}
            <input type="text" value={task} class="searchBar" placeholder='Enter the Task'></input>
            <input type="button" value="Add Task"></input>
            <select name="difficulty" class="selectBox">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
    )
}

export default Taskform;


