import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import Language from '../../lang/translations';

export default function DrawerContainer(props) {
  const {navigation} = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title={Language.about}
          source={require('../../../assets/icons/home1.png')}
          onPress={() => {
            navigation.navigate('About');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title={Language.recipes}
          source={require('../../../assets/icons/ingredients.png')}
          onPress={() => {
            navigation.navigate('Recipes');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title={Language.info}
          source={require('../../../assets/icons/info.png')}
          onPress={() => {
            navigation.navigate('Info');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title={Language.cuts}
          source={require('../../../assets/icons/cookie50.png')}
          onPress={() => {
            navigation.navigate('Cuts');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="CATEGORIES"
          source={require('../../../assets/icons/category.png')}
          onPress={() => {
            navigation.navigate('Categories');
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require('../../../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('Search');
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};
