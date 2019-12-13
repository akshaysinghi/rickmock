import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const PaginationView = ({onNextPagination, onPrevPagination, nextPagination, prevPagination}) => {
    return (
        <ButtonGroup className={'mt-2 text-center d-block'} aria-label="Pagination" size="sm">
            <Button onClick={onPrevPagination} disabled={prevPagination.length === 0}>Prev Page</Button>
            <Button onClick={onNextPagination} disabled={nextPagination.length === 0}>Next Page</Button>
        </ButtonGroup>
    );
}

export default PaginationView;

