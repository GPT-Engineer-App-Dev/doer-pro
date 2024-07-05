import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const TaskDetailsModal = ({ task }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Task Details</DialogTitle>
          <DialogDescription>
            Edit the details of your task below.
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Task Name</label>
            <Input type="text" defaultValue={task.name} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Due Date</label>
            <Input type="date" defaultValue={task.dueDate} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Project</label>
            <Input type="text" defaultValue={task.project} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Description</label>
            <Textarea defaultValue={task.description} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailsModal;