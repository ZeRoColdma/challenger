import { useState, useEffect } from "react";
import api from "../../services/api";

import IEpisode from "../../interfaces/IEpisodes";
import {
  defaultUrlImage,
  headerImage,
  powerPuffGildImage,
} from "../../utils/defaultImage";

import "./index.scss";

import IEpisodeDetail from "../../interfaces/IDetailsShow";

export default function EpisodeDetail(props: any) {
  let [dataIndex, setDataIndex] = useState<IEpisode>();

  const [showsDetailsTitle, setShowsDetailsTitle] = useState<IEpisodeDetail>();
  const [showsDetailsDescription, setShowsDetailsDescription] =
    useState<IEpisodeDetail>();
  const [showsDetailsCoverImage, setShowsDetailsCoverImage] =
    useState<IEpisodeDetail>();

  let dataEpisode = props.location.state.idEpisode;

  async function getListItens() {
    const response = await api.get(
      `/shows/6771/episodebynumber?season=1&number=${dataEpisode}`,
    );
    const content = response.data;
    setDataIndex(content);
  }

  async function getShowInformations() {
    const showDetails = await api.get("/shows/6771");
    const contentDetails = showDetails.data;

    setShowsDetailsTitle(contentDetails.name);
    setShowsDetailsDescription(contentDetails.summary);
    setShowsDetailsCoverImage(contentDetails.image.original);
  }

  useEffect(() => {
    getShowInformations();
    getListItens();
  }, [dataEpisode]);

  return (
    <div>
      <div className="column is-full featured_wrapper p-0">
        <img src={headerImage} className="featured" alt="" />
        <div className="title_wrapper">
          <h1 className="title is-1 has-text-white">{showsDetailsTitle}</h1>
          <h4 className="title is-1 has-text-white">
            {showsDetailsDescription}
          </h4>
        </div>
      </div>
      <div className="container-fluid">
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img className="locandina" src={powerPuffGildImage} alt="" />
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
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
