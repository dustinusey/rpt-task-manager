import { useState } from "react";

const TaskForm = (props) => {
  const [val, setVal] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.setTasks([...props.tasks, val]);
        console.log(props.tasks);
      }}
    >
      <input
        onChange={(e) => {
          setVal(e.target.value);
        }}
        className="w-full rounded-md p-4 bg-gray-900 border-gray-500 text-gray-300 border-2 outline-none"
        type="text"
        value={val}
        placeholder="Whatcha need to do?"
      />
    </form>
  );
};
export default TaskForm;
