import DeleteTask from "./DeleteTask";
const Task = (props) => {
  return (
    <li>
      {props.taskName}
      <DeleteTask />
    </li>
  );
};
export default Task;
