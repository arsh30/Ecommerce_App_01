import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../Common/Header';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Wishlist from '../tabs/Wishlist';
import Notification from '../tabs/Notification';
import User from '../tabs/User';

const HomeScreen = () => {
  const [selectedtab, setselectedTab] = useState(0);
  return (
    <View style={styles.container}>
      {/* <Header
        leftIcon={require('../Images/menu.png')}
        rightIcon={require('../Images/bag.png')}
        title={'Grocery App'}
      /> */}
      {selectedtab == 0 ? (
        <Home />
      ) : selectedtab == 1 ? (
        <Search />
      ) : selectedtab == 2 ? (
        <Wishlist />
      ) : selectedtab == 3 ? (
        <Notification />
      ) : (
        <User />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          onPress={() => setselectedTab(0)}
          style={styles.bottomTab}>
          <Image
            source={
              selectedtab == 0
                ? require('../Images/home-fill.png')
                : require('../Images/home.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setselectedTab(1)}
          style={styles.bottomTab}>
          <Image
            source={require('../Images/search.png')}
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setselectedTab(2)}
          style={styles.bottomTab}>
          <Image
            source={
              selectedtab == 2
                ? require('../Images/wishlist-fill.png')
                : require('../Images/wishlist.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setselectedTab(3)}
          style={styles.bottomTab}>
          <Image
            source={
              selectedtab == 3
                ? require('../Images/notification-fill.png')
                : require('../Images/notification.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setselectedTab(4)}
          style={styles.bottomTab}>
          <Image
            source={
              selectedtab == 4
                ? require('../Images/user-fill.png')
                : require('../Images/user.png')
            }
            style={styles.bottomTabIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 65,
    flexDirection: 'row', // bcoz 1 line me sare icon aayege
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
});
