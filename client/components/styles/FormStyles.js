import styled from 'styled-components';


const StyledForm = styled.form`
  padding: 20px;
  font-size: 1.3rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${props => props.theme.textGrey};
  background-color: ${props => props.theme.beige};
  box-shadow: ${props => props.theme.bs};
  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      display: block;
      height: 10px;
      content: '';
    }
    h2 {
      text-align: center;
      padding-bottom: 2rem;
    }
    button {
      float: right;
    }
  }
  label {
    display: block;
    margin-bottom: 0.8rem;
  }
  .image-lbl {
    margin: 0;
    block: inherit;
    pading-left: 0.25rem;
    font-size: 1rem;
    font-weight: normal;
    color: black;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    display: block;
    font-size: 1rem;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    background-color: transparent;
    &:focus {
      outline: ${props => props.theme.darkblue};
      border-color: ${props => props.theme.darkblue};
    }
    &:active {
      color: ${props => props.theme.darkblue};
      border-color: ${props => props.theme.darkblue};
    }
  }
  input[type='text'] {
    min-width: 25rem;
  }
  input[type='file'] {
    border: 0;
  }
  input[type=checkbox] {
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    float: left;
  }
  input[type=number] {
    display: block;
    min-width: 12rem;
    width: auto;
  }
  textarea,
  select {
    height: 2rem;
    padding: 0.25rem;
    border: 1px solid ${props => props.theme.lightGrey};
    margin: 0.25rem;
  }
  textarea {
    display: block;
    height: 5rem;
    min-height: 5rem;
    max-height: 15rem;
    resize: vertical;
  }
  select {
    display: block;
    min-width: 12rem;
    width: auto;
  }
  .prdct-creator {
    font-size: 1rem;
    a {
      padding: 0 0.1rem;
      font-weight: bold;
      font-size: 1rem;
      color: ${props => props.theme.textGrey};
      text-decoration: none;
    }
    a:hover {
      color: ${props => props.theme.darkblue};
      text-decoration: underline ${props => props.theme.orange};
    }
  }
  .field-padding {
    padding: 0.5rem 0;
  }
  .chkbx-label {
    padding: 0.2rem 0;
  }
`;


export default StyledForm;
