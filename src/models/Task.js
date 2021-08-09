import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: 'No Description',
    },
    label: {
      type: String,
      default: 'No Label',
      enum: ['Bug', 'Feature', 'Improvement', 'No Label'],
    },
    priority: {
      type: String,
      default: 'no_priority',
      enum: ['no_priority', 'low', 'medium', 'high', 'urgent'],
    },
    status: {
      type: String,
      default: 'backlog',
      enum: ['backlog', 'todo', 'in_progress', 'done', 'canceled'],
    },
    assignee: {
      type: String,
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model('Task', taskSchema);
