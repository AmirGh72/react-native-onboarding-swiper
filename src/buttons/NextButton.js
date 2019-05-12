import React from 'react';

import TextButton from './TextButton';
import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util';

const NextButton = ({ nextLabel, isLight, nextStyle, ...rest }) => (
  <TextButton
    size={BUTTON_SIZE}
    style={{ marginRight: MARGIN_RIGHT }}
    textStyle={[getDefaultStyle(isLight), nextStyle]}
    {...rest}
  >
    {nextLabel}
  </TextButton>
);

export default NextButton;
