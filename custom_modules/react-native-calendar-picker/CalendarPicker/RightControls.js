import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function RightControls({ styles, textStyles, label, onPressControl }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
    >
      <Text style={{color: '#ffffff', textAlign: 'right', marginLeft: 10,
        paddingBottom: 7, paddingTop: 7, fontSize: 12}}>
        { label } 
      </Text>
    </TouchableOpacity>
  );
}

RightControls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
