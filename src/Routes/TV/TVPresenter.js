import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Section from 'Components/Section'

const Container = styled.div`
        padding: 0px 10px;
`;

const TVPresenter = ({topRated, airingToday, popular, error, loading}) => 
loading ? null :  (
        <Container>
                {topRated && topRated.length > 0 && (
                        <Section title = "Top Rated Shows">
                                {topRated.map(show => show.name)}
                        </Section>
                )}{popular && popular.length > 0 && (
                        <Section title = "Popular Shows">
                                {popular.map(show => show.name)}
                        </Section>
                )}{airingToday && airingToday.length > 0 && (
                        <Section title = "Airing Today">
                                {airingToday.map(show => show.name)}
                        </Section>
                )}
        </Container>
);

TVPresenter.propTypes = {
        topRated: PropTypes.array,
        airingToday: PropTypes.array,
        popular: PropTypes.array,
        error: PropTypes.string,
        loading: PropTypes.bool.isRequired  
}

export default TVPresenter;