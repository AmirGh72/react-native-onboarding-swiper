import { View } from 'react-native';
import React from 'react';

import { BUTTON_SIZE, MARGIN_RIGHT, getDefaultStyle } from './util';
import TextButton from './TextButton';
import SymbolButton from './SymbolButton';

class DoneButton extends React.Component {
  // state = {
  //   fadeAnim: new Animated.Value(0),
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     Animated.timing(this.state.fadeAnim, {
  //       toValue: 1,
  //       duration: 1000,
  //     }).start();
  //   }, 1000);
  // }

  render() {
    const { isLight, doneLabel, doneStyle, ...rest } = this.props;
    //const { fadeAnim } = this.state;

    return (
      <View>
        <TextButton
          size={BUTTON_SIZE}
          style={{ marginRight: MARGIN_RIGHT }}
          textStyle={[getDefaultStyle('isLight'), doneStyle]}
          {...rest}
        >
          {doneLabel}
        </TextButton>
      </View>
    );
  }
}

export default DoneButton;
