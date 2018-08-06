import React from 'react';
import {
  View,
  Text, ImageBackground, Image
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';
import LeftControls from './LeftControls';
import RightControls from './RightControls';

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'Previous';
  const next = nextTitle ? nextTitle : 'Next';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <ImageBackground style={{ marginLeft: -6, marginRight: -6 }} resizeMode='stretch'
                  source={require('../../../src/images/button-bg.png')} >
    <View style={styles.headerWrapper}>
      
      <LeftControls
        label={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />

 
      <View style={{}}>
        <Text style={[styles.monthLabel, textStyle], 
          { color: '#ffffff', width: 120, textAlign: 'center', 
            paddingBottom: 7, paddingTop: 7, fontSize: 10 }}
        >
           { month } { year }
        </Text>
      </View>

      <RightControls
        label={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
    </View>
      </ImageBackground>

  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
