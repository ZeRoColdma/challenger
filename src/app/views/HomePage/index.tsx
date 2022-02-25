import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
import "./index.css";

import { defaultUrlImage, headerImage } from "../../utils/defaultImage";
import IRequest from "../../interfaces/IRequest";

export default function Home(props: number) {
  const [showsList, setShowsList] = useState<IRequest[]>([]);
  const history = useHistory();

  useEffect(() => {
    async function getListItens() {
      const response = await api.get("/shows/6771/episodes");
      const content = response.data;
      setShowsList(content);
    }
    getListItens();
  }, []);

  async function handleEpisodeDetail(event: any, episodes: number) {
    event.preventDefault();
    const response = await api.get(
      `/shows/6771/episodebynumber?season=1&number=${episodes}`,
    );
    const content = response.data;
    console.log(content);
    history.push({
      pathname: `/episode/${episodes}`,
      state: { idEpisode: episodes },
    });
  }

  return (
    <div>
      <div className="column is-full featured_wrapper p-0">
        <img src={headerImage} className="featured" alt="" />
        <div className="title_wrapper">
          <span className="has-text-white">Trending Today</span>
          <h1 className="title is-1 has-text-white">Power Puff Girls</h1>
        </div>
      </div>
      <div className="container-fluid">
        <Container fluid>
          <Row>
            {showsList.map((item) => {
              return (
                <Col md="2" style={{ margin: "15px" }} key={item.id}>
                  <CardGroup>
                    <Card style={{ margin: "10px" }}>
                      <CardImg
                        alt="Card image cap"
                        src={item.image?.original || defaultUrlImage}
                        top
                        width="100%"
                      />
                      <CardBody style={{ height: "15vh" }}>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <CardText>
                          {item.summary || "Texto Indisponivel"}
                        </CardText>
                      </CardBody>
                      <Button
                        className="buttonEpisode"
                        onClick={(event) => {
                          handleEpisodeDetail(event, item.number);
                        }}
                      >
                        Episode Detail
                      </Button>
                    </Card>
                  </CardGroup>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
