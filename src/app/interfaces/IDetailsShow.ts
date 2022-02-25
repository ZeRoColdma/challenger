interface IEpisodeDetail {
  id: number;
  name: string;
  summary: string;
  genres: [];
  image: {
    original: string;
  };
}

export default IEpisodeDetail;
