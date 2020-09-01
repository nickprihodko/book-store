import { Request } from 'express';

export interface IRequest extends Request {
  user: {
    id: string
  },
  query: {
    category: string,
    author: string,
    pricefrom: string,
    priceto: string,
    ratefrom: string,
    rateto: string,
    sort: string,
    page: string
  },
  file: {
    filename: string
  }
}
