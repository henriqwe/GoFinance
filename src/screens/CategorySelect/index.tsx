import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  containerStyle,
  categoryStyle,
  separatorStyle,
  footerStyle,
  titleStyle,
} from './categorySelect.style';
import {Header} from '@components/Header/Header';
import {categories} from '@utils/categories';
import {Button} from '@components/Button/Button';

type TCategory = (typeof categories)[0];

interface Props {
  category: TCategory | undefined;
  setCategory: (category: TCategory) => void;
  closeSelect: () => void;
}
export function CategorySelect({category, closeSelect, setCategory}: Props) {
  function handleCategory(item: TCategory) {
    setCategory(item);
  }

  return (
    <View style={containerStyle}>
      <Header title="Categorias" />
      <FlatList
        data={categories}
        keyExtractor={({key}) => key}
        ItemSeparatorComponent={() => <View style={separatorStyle} />}
        renderItem={({item}) => {
          const isActive = item.key === category?.key;
          return (
            <TouchableOpacity
              style={categoryStyle({isActive})}
              onPress={() => handleCategory(item)}>
              {item.icon(isActive ? 'white' : 'text')}
              <Text style={titleStyle({isActive})}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
      <View style={footerStyle}>
        <Button title="Selecionar" onPress={closeSelect} />
      </View>
    </View>
  );
}
