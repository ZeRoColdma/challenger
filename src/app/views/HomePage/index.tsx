import React, { useEffect, useState } from "react";
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

interface IRequest {
  id: number;
  name: string;
  image: {
    original: string;
  };
  summary: string;
}

export default function Home() {
  const [showsList, setShowsList] = useState<IRequest[]>([]);

  useEffect(() => {
    async function getListItens() {
      const response = await api.get("/shows/6771/episodes");
      const content = response.data;
      setShowsList(content);
      console.log(content);
    }
    getListItens();
  }, []);

  return (
    <div className="homePage">
      <h1>Episodes List</h1>
      <div className="container-fluid">
        {showsList.map((item) => {
          return (
            <Container>
              <Row className="contentCards">
                <Col md="4">
                  <CardGroup>
                    <Card>
                      <CardImg
                        alt="Card image cap"
                        src={item.image?.original || ""}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">{item.name}</CardTitle>
                        <CardText>{item.summary}</CardText>
                        <Button>Button</Button>
                      </CardBody>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Container>
          );
        })}
      </div>
    </div>
  );
}
