import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');
const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      {/* 
        Header me 2 cheeze hoti hai Left and right
            -   left me icon hota hai ya back button 
            -   bheech me title 
            -   right side me 1 hor icon chaiye hota hai 
      */}

      <TouchableOpacity
        onPress={() => {
          onClickLeftIcon();
        }}
        style={styles.btn}>
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.btn}>
        <Image
          source={rightIcon}
          style={{...styles.icon, width: 35, height: 35}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 65,
    backgroundColor: '#0786DAFD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});
