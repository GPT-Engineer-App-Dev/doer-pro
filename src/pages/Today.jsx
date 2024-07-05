import React from "react";

const TodayPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="w-full p-2 border rounded"
        />
        <button className="mt-2 p-2 bg-blue-500 text-white rounded">Add Task</button>
      </div>
      <ul>
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Task 1</span>
          </div>
          <button className="text-red-500">Delete</button>
        </li>
        <li className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Task 2</span>
          </div>
          <button className="text-red-500">Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodayPage;