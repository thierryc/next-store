import React from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import DisplayMessage from '../DisplayMessage';
import StyledForm from '../styles/FormStyles';
import { SIGNIN_MUTATION, CURRENT_USER_QUERY } from '../../graphql';


class SigninForm extends React.Component {
  state = {
    name: '', password: '', email: ''
  };
  saveToState = e => this.setState({ [e.target.name]: e.target.value });
  submitForm = async (e, signin) => {
    e.preventDefault();
    await signin().then((res) => {
      Router.push({
        pathname: "/shop",
        query: { name: `${res.data.signin.name}` }
      });

      this.setState({
        name: '', email: '', password: ''
      });
    });
  }
  render() {
    return (
      <Mutation mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <StyledForm onSubmit={e => this.submitForm(e, signin)}>
            <DisplayMessage error={error} />

            <fieldset disabled={loading} aria-busy={loading}>
              <h2>Sign into your account</h2>

              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>

              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>

              <button className="big-btn"
                disabled={loading}
                type="submit"
              >Sign In!</button>
            </fieldset>
          </StyledForm>
        )}
      </Mutation>
    );
  }
};


export { SigninForm };