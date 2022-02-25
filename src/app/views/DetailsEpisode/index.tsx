import { useState, useEffect } from "react";
import api from "../../services/api";

import IEpisode from "../../interfaces/IEpisodes";
import {
  defaultUrlImage,
  headerImage,
  powerPuffGildImage,
} from "../../utils/defaultImage";

import "./index.scss";

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
      <div className="column is-full featured_wrapper p-0">
        <img src={headerImage} className="featured" />
        <div className="title_wrapper">
          <span className="has-text-white">Trending Today</span>
          <h1 className="title is-1 has-text-white">Power Puff Girls</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={powerPuffGildImage} />
              <h1>{dataIndex?.name}</h1>
              <p className="type">Cartoon</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                {dataIndex?.summary || "Text Not Available"}
              </p>
            </div>
          </div>

          <div>
            <img
              className="blur_back"
              src={dataIndex?.image.original || defaultUrlImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
