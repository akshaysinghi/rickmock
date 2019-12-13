import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Character from './Character';

const CharacterList = ({characters}) => {
    return (
        <Container fluid>
            <Row className={'mt-4'}>
                {
                    characters.map((character, i) => {
                        return (
                            <Col className={'mb-2'} key={i} xs={12} sm={12} md={3} lg={3} xl={3}>
                                <Character
                                    id={character.id}
                                    name={character.name}
                                    image={character.image}
                                    createdDate={character.created}
                                    status={character.status}
                                    species={character.species}
                                    gender={character.gender}
                                    origin={character.origin}
                                    location={character.location}
                                />
                            </Col>
                        );
                    })
                }

            </Row>
        </Container>
    );
}

export default CharacterList;
