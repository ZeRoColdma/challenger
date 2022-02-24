import { useState, useEffect } from "react";
import api from "../../services/api";

import {
  CardGroup,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";

import IEpisode from "../../interfaces/IEpisodes";
import { defaultUrlImage } from "../../utils/defaultImage";

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
        <img
          src="https://airwallpaper.com/wp-content/uploads/wall004/Powerpuff-Girls-Wallpaper-for-Desktop.jpg"
          className="featured"
        />
        <div className="title_wrapper">
          <span className="has-text-white">Trending Today</span>
          <h1 className="title is-1 has-text-white">Power Puff Girls</h1>
        </div>
      </div>
      <div className="container-fluid">
        <Container>
          <Row>
            <Col md="2">
              <CardGroup>
                <Card>
                  <CardImg
                    alt="Card image cap"
                    src={dataIndex?.image.original || defaultUrlImage}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{dataIndex?.name}</CardTitle>
                    <CardText>
                      {dataIndex?.summary || "Texto Indisponivel"}
                    </CardText>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
            );
          </Row>
        </Container>
      </div>
    </div>
  );
}
