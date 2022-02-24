interface IEpisode {
  id: number;
  name: string;
  summary: string;
  image: {
    original: string;
  };
}

export default IEpisode;
