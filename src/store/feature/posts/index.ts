const posts = [
  {
    id: 1,
    title: 'React Native',
    active: true,
    comments: [
      {
        id: 1,
        user: {
          name: 'Mateus Conceição',
        },
        text: 'Muito massa',
      },
      {
        id: 2,
        user: {
          name: 'Felipe Kaue',
        },
        text: '#React',
      },
    ],
  },
  {
    id: 3,
    title: 'NodeJS',
    active: true,
    comments: [
      {
        id: 1,
        user: {
          name: 'Rodrigo da Conceição',
        },
        text: '#Dev',
      },
      {
        id: 2,
        user: {
          name: 'Thayna Campos',
        },
        text: '#Top',
      },
    ],
  },
];

export { posts };
