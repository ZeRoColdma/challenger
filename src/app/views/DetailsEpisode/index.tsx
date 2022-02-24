import { useState, useEffect } from "react";
import api from "../../services/api";

interface IEpisode {
  id: number;
  name: string;
  summary: string;
  image: {
    original: string;
  };
}

export default function EpisodeDetail(props: any) {
  let [dataIndex, setDataIndex] = useState<IEpisode>();

  let dataEpisode = props.location.state.idEpisode;

  useEffect(() => {
    async function getListItens() {
      const response = await api.get(
        `/shows/6771/episodebynumber?season=1&number=${dataEpisode}`,
      );
      const content = response.data;
      setDataIndex(content);
    }
    getListItens();
  }, [dataEpisode]);

  return (
    <div>
      <h1>Episode title: {dataIndex?.name}</h1>
      <h1>Episode Summary: {dataIndex?.summary}</h1>
      <h1>Episode cover image: {dataIndex?.image.original}</h1>
    </div>
  );
}
