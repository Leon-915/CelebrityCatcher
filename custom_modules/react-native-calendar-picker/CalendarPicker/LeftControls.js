import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

export default function LeftControls({ styles, textStyles, label, onPressControl }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
    >
      <Text style={{color: '#ffffff', textAlign: 'left', marginRight: 10, 
        paddingBottom: 7, paddingTop: 7, fontSize: 12}}>
        { label } 
      </Text>
    </TouchableOpacity>
  );
}

LeftControls.propTypes = {
  styles: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
