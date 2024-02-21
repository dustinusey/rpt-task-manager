import { useState } from "react";

import TaskForm from "./TaskForm";
import Tasks from "./Tasks";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="p-5 rounded-lg bg-gray-800 w-full max-w-[500px]">
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </div>
  );
};
export default TaskManager;
