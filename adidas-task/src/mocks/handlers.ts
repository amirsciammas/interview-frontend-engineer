import { rest } from 'msw';
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'DC',
          body: 'All DC Movies',
        },
        {
          userId: 2,
          id: 2,
          title: 'Marvel',
          body: 'All Marvel Movies',
        },
        {
          userId: 3,
          id: 3,
          title: 'Others',
          body: 'Other Movies',
        },
      ])
    );
  }),
];
