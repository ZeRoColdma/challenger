interface IRequest {
  id: number;
  name: string;
  image: {
    original: string;
  };
  summary: string;
}

export type { IRequest };
