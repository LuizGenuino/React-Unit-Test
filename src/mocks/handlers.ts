import { http, HttpResponse } from 'msw/http'

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/todos?_limit=10', () => {
    return HttpResponse.json({
      id: '1',
      title: 'John',
      lastName: 'Maverick',
    })
  }),
]