import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {sortingParams, filterParams} from './../utils/constants';

const FilterSort = ({sortChange, sortingType, speciesFilter, genderFilter}) => {
    return (
        <Card>
            <Card.Body>
                <Row>
                    <Col lg={4}>
                        <Form>
                            <Form.Group controlId="speciesFilter">
                                <Form.Label>Filter By Species</Form.Label>
                                <Form.Control as="select" onChange={speciesFilter}>
                                    <option value={''}>Select</option>
                                    {filterParams.SPECIES.map((name, i) => (
                                        <option key={i} value={name}>{name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={4}>
                        <Form>
                            <Form.Group controlId="genderFilter">
                                <Form.Label>Filter By Gender</Form.Label>
                                <Form.Control as="select" onChange={genderFilter}>
                                    <option value={''}>Select</option>
                                    {filterParams.GENDER.map((name, i) => (
                                        <option key={i} value={name}>{name}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col lg={4}>
                        <Form>
                            <Form.Group controlId="sortById">
                                <Form.Label>Sort By ID</Form.Label>
                                <Form.Control as="select" onChange={sortChange} value={sortingType}>
                                    <option value={sortingParams.ASCENDING}>ASCENDING</option>
                                    <option value={sortingParams.DESCENDING}>DESCENDING</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default FilterSort;

