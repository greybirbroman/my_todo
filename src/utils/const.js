export const categories = [
    {
      id: 1,
      class: 'bg-purple-400',
      name: 'Work',
    },
    {
      id: 2,
      class: 'bg-blue-400',
      name: 'Study',
    },
    {
      id: 3,
      class: 'bg-red-400',
      name: 'Entertainment',
    },
    {
      id: 4,
      class: 'bg-green-400',
      name: 'Shopping',
    },
    {
      id: 5,
      class: 'bg-yellow-400',
      name: 'Family',
    },
  ];

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  export const createdAt = `${year}-${month}-${day}`;

  export const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };