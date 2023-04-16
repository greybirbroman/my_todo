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

  export const tasksVariants = {
    initial: {
      opacity: 0,
      maxHeight: 0,
    },
    animate: {
      opacity: 1,
      maxHeight: 'auto'
    },
    transition: {
      delay: 0.3
    },
    exit: {
      opacity: 0,
      maxHeight: 0,
    },
  }

  export const setReorderConstraints = (itemRects) => {
    let minTop = 0;
    let maxTop = 0;
    let minLeft = 0;
    let maxLeft = 0;
    
    itemRects.forEach((rect) => {
      minTop = Math.min(minTop, rect.top);
      maxTop = Math.max(maxTop, rect.bottom);
      minLeft = Math.min(minLeft, rect.left);
      maxLeft = Math.max(maxLeft, rect.right);
    });
  
    const constraints = {
      top: minTop,
      left: minLeft,
      bottom: maxTop - itemRects[0].height,
      right: maxLeft - itemRects[0].width,
    };
  
    return constraints;
  };