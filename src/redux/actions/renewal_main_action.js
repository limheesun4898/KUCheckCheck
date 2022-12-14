import { SET_STRING_INPUT, SET_LANGUAGE, SET_HAMBURGER } from './types';

export function setSearchStringInput(stringInput) {
  return {
    type: SET_STRING_INPUT,
    data: stringInput,
  };
}

export function setSearchLanguage(language) {
  return {
    type: SET_LANGUAGE,
    data: language,
  };
}

export function setHamburgerRequest(isOpen) {
  return {
    type: SET_HAMBURGER,
    data: isOpen
  }
}