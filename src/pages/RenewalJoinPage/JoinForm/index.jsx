import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { signUpRequest } from '@redux/actions/renewal_member_action';

import {
  AuthInputWithLabel,
  AuthTextAreaWithLabel,
  LoadingButton,
} from '@components';
import { StyledForm } from '@pages/RenewalLoginPage/LoginForm/style';

import {
  EXISTING_EMAIL,
  FORM_IS_NOT_FULL,
  PASSWORD_DOSE_NOT_MATCH,
  RandomEmoji,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '@utility';
import { FAILURE, SUCCESS } from '@utility/ALERT_MESSAGE';
import { RENEWAL_PATH } from '@utility/COMMON_FUNCTION';

function JoinForm() {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    comment: '',
    detail_comment: '',
    github_id: '',
    instagram_id: '',
    emoji: RandomEmoji(),
  });

  const { status, error } = useSelector(state => state.member.signUp);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    email,
    password,
    passwordConfirm,
    name,
    comment,
    detail_comment,
    github_id,
    instagram_id,
    emoji,
  } = inputs;

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const validationSignUp = () => {
    if (!email || !password || !passwordConfirm || !name || !comment) {
      return false;
    }
    if (password !== passwordConfirm) {
      alert(PASSWORD_DOSE_NOT_MATCH);
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (status === SUCCESS) {
      alert(SIGNUP_SUCCESS);
      window.location.href = RENEWAL_PATH.login;
    }
    if (status === FAILURE) {
      setIsSubmitted(false);

      if (error === 'existing_email') {
        alert(EXISTING_EMAIL);
        window.location.href = RENEWAL_PATH.login;
      } else alert(SIGNUP_FAILURE);
    }
  }, [status, error]);

  const handleSignUp = e => {
    e.preventDefault();

    if (!validationSignUp()) {
      alert(FORM_IS_NOT_FULL);
      return false;
    }

    const signUpData = {
      email,
      password,
      name,
      comment,
      emoji,
      detail_comment: detail_comment ? detail_comment : null,
      github_id: github_id ? github_id : null,
      instagram_id: instagram_id ? instagram_id : null,
    };

    setIsSubmitted(true);
    dispatch(signUpRequest(signUpData));
  };

  return (
    <StyledForm onSubmit={handleSignUp}>
      <AuthInputWithLabel
        labelTitle='?????????'
        inputName='email'
        inputType='email'
        value={email}
        onChange={onChange}
      />

      <AuthInputWithLabel
        labelTitle='????????????'
        inputName='password'
        inputType='password'
        value={password}
        onChange={onChange}
      />

      <AuthInputWithLabel
        labelTitle='???????????? ??????'
        inputName='passwordConfirm'
        inputType='password'
        value={passwordConfirm}
        onChange={onChange}
      />

      <AuthInputWithLabel
        labelTitle='??????'
        inputName='name'
        inputType='text'
        value={name}
        onChange={onChange}
      />

      <AuthTextAreaWithLabel
        labelTitle='?????? ??????'
        inputName='comment'
        inputType='text'
        placeholder='?????? 100??? ????????? ??????????????????.'
        value={comment}
        onChange={onChange}
      />

      <AuthTextAreaWithLabel
        labelTitle='?????? ??????'
        inputName='detail_comment'
        inputType='text'
        placeholder='?????? 200??? ????????? ??????????????????.'
        value={detail_comment}
        onChange={onChange}
        isRequired={true}
      />

      <AuthInputWithLabel
        labelTitle='?????? ??????'
        inputName='github_id'
        inputType='text'
        placeholder='?????? ?????? ex) https://github.com/'
        value={github_id}
        onChange={onChange}
        isRequired={true}
      />

      <AuthInputWithLabel
        inputName='instagram_id'
        inputType='text'
        placeholder='??????????????? ??????????????? ex) @kucc_rlffkdlwkqdl'
        value={instagram_id}
        onChange={onChange}
      />

      <LoadingButton
        style={{
          width: '220px',
          height: isMobile ? '52px' : '60px',
          fontSize: isMobile ? '16px' : '20px',
          margin: '18% auto',
        }}
        htmlType='submit'
        text='JOIN'
        isLoading={isSubmitted}
        isActive={validationSignUp()}
      />
    </StyledForm>
  );
}

export default JoinForm;
