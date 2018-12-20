import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';


const StyledDisplayError = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${props => props.theme.red};
  border-right: 5px solid ${props => props.theme.red};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const StyledDisplaySuccess = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${props => props.theme.green};
  border-right: 5px solid ${props => props.theme.green};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const DisplayMessage = ({ error, message }) => {
  if ((!error || !error.message) && !message) return null;
  let errors;
  if (!!error) {
    errors = error.networkError && error.networkError.result && !!error.networkError.result.errors.length
      ? error.networkError.result.errors
      : [{ ...error }];
  }

  if (!!message.length) {
    return (
      <StyledDisplaySuccess key={9999}>
        <p>
          <strong>Success!</strong>
          {message}
        </p>
      </StyledDisplaySuccess>
    )
  }

  if (!!errors) {
    return errors.map((error, i) => (
      <StyledDisplayError key={i}>
        <p data-test="graphql-error">
          <strong>Hold up!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </StyledDisplayError>
    ));
  };
};

DisplayMessage.defaultProps = {
  error: {},
  message: '',
};

DisplayMessage.propTypes = {
  error: PropTypes.object,
  success: PropTypes.string,
};


export default DisplayMessage;
