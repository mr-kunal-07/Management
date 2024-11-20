import React from 'react';

const TaskBar = ({ data }) => {
  return (
    <div
      className="mt-10 grid gap-5 
      grid-cols-2 
        lg:grid-cols-4"
    >
      <div className="rounded-xl py-5 px-9 bg-red-400">
        <h2 className="text-3xl font-bold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
      </div>
      <div className="rounded-xl py-5 px-9 bg-blue-400">
        <h2 className="text-3xl font-bold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="rounded-xl py-5 px-9 bg-yellow-400 text-black">
        <h2 className="text-3xl font-bold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="rounded-xl py-5 px-9 bg-green-400">
        <h2 className="text-3xl font-bold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskBar;
