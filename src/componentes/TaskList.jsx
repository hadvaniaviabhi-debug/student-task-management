import React from "react";

const TaskList = ({
  tasks,
  editingTask,
  deletingTask,
  handleCompleteTask,
}) => {
  return (
    <div className="task-grid">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.completed ? "completed" : ""}`}
          style={{ position: "relative" }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <div className="task-meta">
            <span>Due : {task.dueDate}</span>
            <span
              className={`priority-badge priority-${task.priority.toLowerCase()}`}
            >
              {task.priority}
            </span>
          </div>

          <div className="task-actions">
            {/* Edit */}
            <button
              className="btn-icon"
              style={{ background: "#00d2ff" }}
              title="Edit Task"
              disabled={task.completed}
              onClick={() => editingTask(task)}
            >
              ✍️
            </button>

            {/* Complete / Undo */}
            <button
              className="btn-icon"
              style={{ background: "#00b894" }}
              title="Mark Complete"
              onClick={() => handleCompleteTask(task.id)}
            >
              {task.completed ? "Undo" : "✔️"}
            </button>

            {/* Delete */}
            <button
              className="btn-icon"
              style={{ background: "#ff416c" }}
              title="Delete Task"
              disabled={task.completed}
              onClick={() => deletingTask(task.id)}
            >
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
