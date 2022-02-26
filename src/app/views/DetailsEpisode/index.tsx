import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import IEpisode from "../../interfaces/IEpisodes";
import {
  defaultUrlImage,
  headerImage,
  powerPuffGildImage,
} from "../../utils/defaultImage";

import "./index.scss";
import Header from "../../components/header/index";

import IEpisodeDetail from "../../interfaces/IDetailsShow";
import { Button } from "reactstrap";

export default function EpisodeDetail(props: any) {
  const { goBack } = useHistory();

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
      <Header />

      <div className="container-fluid">
        <Button style={{ marginTop: "15px" }} onClick={goBack}>
          Go Back
        </Button>
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
