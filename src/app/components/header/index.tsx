import { useState, useEffect } from "react";

import { headerImage } from "../../utils/defaultImage";
import IEpisodeDetail from "../../interfaces/IDetailsShow";

import api from "../../services/api";
import { useHistory } from "react-router-dom";

export default function Header() {
  const [showsDetailsTitle, setShowsDetailsTitle] = useState<IEpisodeDetail>();
  const [showsDetailsDescription, setShowsDetailsDescription] =
    useState<IEpisodeDetail>();

  async function getShowInformations() {
    const showDetails = await api.get("/shows/6771");
    const contentDetails = showDetails.data;
    setShowsDetailsTitle(contentDetails.name);
    setShowsDetailsDescription(contentDetails.summary);
  }

  useEffect(() => {
    getShowInformations();
  }, []);

  return (
    <div className="column is-full featured_wrapper p-0">
      <img src={headerImage} className="featured" alt="" />
      <div className="title_wrapper">
        <h1 className="title is-1 has-text-white">{showsDetailsTitle}</h1>
        <h4 className="title is-1 has-text-white">{showsDetailsDescription}</h4>
      </div>
    </div>
  );
}
