import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import api from '../../../services/api';

import { Container, Navigation } from './styles';

export default function ListSeries({ id }) {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [series, setSeries] = useState([]);
  const limit = 6;

  useEffect(() => {
    async function loadSeries() {
      const response = await api.get(`v1/public/characters/${id}/series`, {
        params: {
          limit,
          offset,
        },
      });

      const { total, count, results } = response.data.data;

      setSeries(results);
      if (pageCount === 0) {
        setPageCount(Math.ceil(total / count));
      }
    }
    loadSeries();
    // eslint-disable-next-line
  }, [offset, pageCount]);

  function handleNextPage() {
    setCurrentPage(currentPage + 1);
    setOffset(limit * currentPage);
  }

  function handleTotalPage() {
    setCurrentPage(currentPage - 1);
    setOffset(limit * currentPage);
  }
  return (
    <>
      <Container>
        {series !== 0 &&
          series.map(infoSerie => (
            <li key={infoSerie.title}>
              <a href="#A">
                <div>
                  <img
                    src={`${infoSerie.thumbnail.path}.${infoSerie.thumbnail.extension}`}
                    alt={infoSerie.name}
                  />
                </div>
                <strong>LEIA AGORA</strong>
                <span>{infoSerie.title}</span>
              </a>
            </li>
          ))}
      </Container>
      <Navigation>
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={handleTotalPage}
        >
          Voltar
        </button>
        <span>{`${currentPage} de ${pageCount}`}</span>
        <button
          type="button"
          disabled={currentPage === pageCount}
          onClick={handleNextPage}
        >
          Próximo
        </button>
      </Navigation>
    </>
  );
}

ListSeries.propTypes = {
  id: PropTypes.number.isRequired,
};
