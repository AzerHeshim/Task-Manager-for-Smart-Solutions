
interface Organization {
  name: string;
  phone: string;
  address: string;
}
export const users = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@example.com',
    password: 'adminpassword',
    role: 'admin',
    organization:  null as Organization | null,
    tasks: [{ id: 5, title: 'Task 5', description: 'Description 5', deadline: '2023-12-31', status: 'todo' },
      { id: 6, title: 'Task 6', description: 'Description 6', deadline: '2023-12-31', status: 'in-progress' }],
  },
  {
    id: 2,
    name: 'User 1',
    email: 'user1@example.com',
    password: 'user1password',
    role: 'user',
    tasks: [
      { id: 1, title: 'Task 1', description: 'Description 1', deadline: '2023-12-31', status: 'todo' },
      { id: 2, title: 'Task 2', description: 'Description 2', deadline: '2023-12-31', status: 'in-progress' }]
  },
  {
    id: 3,
    name: 'User 2',
    email: 'user2@example.com',
    password: 'user2password',
    role: 'user',
    tasks: [
      { id: 2, title: 'Task 2', description: 'Description 2', deadline: '2023-12-31', status: 'in-progress' },
      { id: 3, title: 'Task 3', description: 'Description 3', deadline: '2023-12-31', status: 'todo' }],
  },
];

export const tasks = [
  { id: 1, title: 'Task 1', description: 'Description 1', deadline: '2023-12-31', status: 'todo' },
  { id: 2, title: 'Task 2', description: 'Description 2', deadline: '2023-12-31', status: 'in-progress' },
  { id: 3, title: 'Task 3', description: 'Description 3', deadline: '2023-12-31', status: 'todo' },
  { id: 4, title: 'Task 4', description: 'Description 4', deadline: '2023-12-31', status: 'in-progress' },
  { id: 5, title: 'Task 5', description: 'Description 5', deadline: '2023-12-31', status: 'todo' },
  { id: 6, title: 'Task 6', description: 'Description 6', deadline: '2023-12-31', status: 'in-progress' },
];
