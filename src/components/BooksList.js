import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {fetchBooksData} from '../actions/booksAction';
import Book from './Book';
import Loader from './Loader';

export default function BooksList(props) {
  const dispatch = useDispatch();
  const {booksList, isLoading} = useSelector((store) => store.books);
  useEffect(() => {
    dispatch(fetchBooksData('walden'));
  }, []);
  console.log({isLoading});
  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={booksList}
          renderItem={({item}) => (
            <Book
              item={item}
              keyExtractor={(item, index) => index.toString()}
              {...props}
            />
          )}
        />
      )}
    </View>
  );
}
