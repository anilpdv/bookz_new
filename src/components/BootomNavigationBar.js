import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import BooksList from './BooksList';
import ExampleEpub from './ExampleEpub';
import PDFExample from './ExamplePdf';

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNavigationBar = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'books', title: 'Books', icon: 'book'},
    {key: 'search', title: 'Search', icon: 'file-search'},
    {key: 'saved', title: 'Saved', icon: 'bookmark-plus'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    books: BooksList,
    search: PDFExample,
    saved: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      style={{flex: 1}}
    />
  );
};

export default BottomNavigationBar;
