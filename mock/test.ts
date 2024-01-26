import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/ldf',
    method: 'get',
    response: ({ query }) => {
      console.log(query)
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      }
    }
  },
  {
    url: '/lbl',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    }
  }
] as MockMethod[]
