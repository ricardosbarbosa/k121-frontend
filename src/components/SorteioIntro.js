import React from "react";
import {
  Button,
  Container,
  CardHeader,
  Card,
  CardBody,
  CardFooter
} from "reactstrap";

const SorteioIntro = ({
  handleSortearClick,
  handleTestClick,
  handleBackClick
}) => {
  return <Container>
      <Card className="m-3">
        <CardHeader>
          Sorteio
        </CardHeader>
        <CardBody>
          <ul>
            <li>Estamos preparados para sortear quem presenteará quem!</li>
            <li>
              Atenção! Uma vez que você clicar em "Sortear" vamos enviar os
              e-mails. Você já não poderá mais adicionar ou remover
              participantes.
            </li>
            <li>
              Para ter certeza de que tudo está certo, selecione 'Testar'.
            </li>
          </ul>
        </CardBody>
        <CardFooter>
          <div className="d-flex justify-content-between">
            <div>
              <Button color="info" onClick={() => handleBackClick()}>
                <i className="fa fa-arrow-left" /> Members
              </Button>
            </div>
            <div>
              <Button color="info" onClick={() => handleTestClick()}>
                <i className="fas fa-magic" /> Test
              </Button> <Button color="primary" onClick={() => handleSortearClick()}>
                <i className="fas fa-gift" /> Perform
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Container>;
};

export default SorteioIntro


