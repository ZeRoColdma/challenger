interface IRequest {
  id: number;
  name: string;
  image: {
    original: string;
  };
  summary: string;
  number: number;
}

export default IRequest;
