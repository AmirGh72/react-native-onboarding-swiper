import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util';

const NextButton = ({ nextLabel, isLight, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginRight: MARGIN_RIGHT }}
    textStyle={[getDefaultStyle(isLight), {color: '#6b6b6b',}]}
    {...rest}
  >
    {nextLabel}
  </TextButton>
);

export default NextButton;
