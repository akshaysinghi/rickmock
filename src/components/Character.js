import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import {getYearsDifference} from '../utils/util-service';

const Character = ({name, id, image, createdDate, status, gender, origin, species, location}) => {
    return (
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title className="lead">{name}</Card.Title>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item className={'pl-0 pr-0'}> <Badge className={'float-left'}
                                                                    variant="success">ID:</Badge>
                        <Card.Text className={'float-right'}>{id}</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className={'pl-0 pr-0'}> <Badge className={'float-left'}
                                                                    variant="dark">STATUS</Badge>
                        <Card.Text className={'float-right'}>{status}</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className={'pl-0 pr-0'}> <Badge className={'float-left'}
                                                                    variant="dark">SPECIES</Badge>
                        <Card.Text className={'float-right'}>{species}</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className={'pl-0 pr-0'}> <Badge className={'float-left'}
                                                                    variant="dark">GENDER</Badge>
                        <Card.Text className={'float-right'}>{gender}</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className={'pl-0 pr-0'}> <Badge className={'float-left'}
                                                                    variant="dark">ORIGIN</Badge>
                        <Card.Text className={'float-right'}>{origin.name}</Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className={'pl-0 pr-0'}> <Badge className={'float-left'}
                                                                    variant="dark">LOCATION</Badge>
                        <Card.Text className={'float-right'}>{location.name}</Card.Text>
                    </ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Created: {getYearsDifference(createdDate)} years ago</small>
            </Card.Footer>
        </Card>
    );
}

export default Character;
