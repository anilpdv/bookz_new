import React from 'react';
import {View, Image} from 'react-native';
import {
  Card,
  Button,
  Title,
  Paragraph,
  Badge,
  Chip,
  Divider,
} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setViewBookId} from '../actions/set-data/setViewBookId';

export default function Book({item, jumpTo}) {
  const dispatch = useDispatch();

  const viewBook = () => {
    dispatch(setViewBookId(item.md5));
    jumpTo('search');
  };

  return (
    <View style={{padding: 20}}>
      <Card style={{padding: 10}}>
        <Card.Cover resizeMode="stretch" source={{uri: item.bookImage}} />
        <Card.Content style={{padding: 10}}>
          <Title>{item.title}</Title>
          <Paragraph> {item.author}</Paragraph>
        </Card.Content>
        <View
          style={{
            marginLeft: 12,
            flexDirection: 'row',
            paddingBottom: 20,
          }}>
          <Chip
            style={{marginRight: 10}}
            onPress={() => console.log('Pressed')}>
            {item.filesize}
          </Chip>
          <Chip onPress={() => console.log('Pressed')}>{item.extension}</Chip>
        </View>
        <Divider style={{marginBottom: 10}} />
        <Card.Actions style={{marginLeft: 10}}>
          <Button mode="contained" style={{marginRight: 10}} onPress={viewBook}>
            View
          </Button>
          <Button>Download</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
