import React, { Component } from 'react';

import {
  FromStyled,
  InputField,
  TextArea,
  Checkbox,
  Select,
} from './Form.styled';
import { FlexRow } from '../../utils/styles';
import { PrimaryBtn } from '../Globals/Buttons';

export default class Form extends Component {
  state = {
    fullName: '',
    title: 'Mr.',
    email: '',
    phone: '',
    message: '',
    rememberMe: false,
    errors: {},
  };

  handleChange = (e) => {
    const isCheckbox = e.target.type === 'checkbox';
    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value,
    });
  };

  formValidate = () => {
    const { fullName, email, phone } = this.state;
    let isValid = true;
    const errors = {};
    if (!fullName || !isNaN(fullName)) {
      errors.fullNameLength = 'Please enter your Full Name';
      isValid = false;
    }
    if (!email) {
      errors.emailValid = 'Please enter a valid Email address ';
      isValid = false;
    }
    if (!email.includes('@') || !email.includes('.')) {
      errors.emailValid = 'Please enter a valid Email address ';
      isValid = false;
    }
    if (!phone || isNaN(phone)) {
      errors.phone = 'Please enter a valid phone number ';
      isValid = false;
    }
    this.setState({ errors });
    return isValid;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.formValidate();
    if (isValid) {
      window.location.href = '/thankyou';
    }

    return isValid;
  };
  render() {
    const { errors } = this.state;
    return (
      <>
        <FromStyled onSubmit={this.handleSubmit}>
          {Object.keys(errors).map((key) => {
            return (
              <div style={{ color: 'red' }} key={key}>
                {errors[key]}
              </div>
            );
          })}

          <FlexRow>
            <InputField
              placeholder="FullName *"
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />

            <Select
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            >
              <option>Mr.</option>
              <option>Miss.</option>
              <option>Ms.</option>
              <option>Mrs.</option>
            </Select>
          </FlexRow>
          <FlexRow>
            <InputField
              placeholder="Email *"
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <InputField
              placeholder="Phone *"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </FlexRow>
          <FlexRow>
            <TextArea
              placeholder="Message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </FlexRow>
          <FlexRow>
            <PrimaryBtn type="submit">submit</PrimaryBtn>
            <label>
              <Checkbox
                type="checkbox"
                name="rememberMe"
                value={this.state.rememberMe}
                onChange={this.handleChange}
              />
              <span>Remember me</span>
            </label>
          </FlexRow>
        </FromStyled>
      </>
    );
  }
}
