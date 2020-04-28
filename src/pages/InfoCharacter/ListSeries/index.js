import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import api from '../../../services/api';

import { Container } from './styles';

export default function ListSeries({ id }) {
  const [series, setSeries] = useState([]);
  const limitSeries = 6;

  useEffect(() => {
    async function loadSeries() {
      const response = await api.get(`v1/public/characters/${id}/series`, {
        params: {
          limit: limitSeries,
        },
      });

      const { results } = response.data.data;

      setSeries(results);
    }
    loadSeries();
  }, [id]);

  return (
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
  );
}

ListSeries.propTypes = {
  id: PropTypes.number.isRequired,
};
