export interface IRequest extends Request {
  pagination: {
    limit: number;
    offset: number;
  };
}
