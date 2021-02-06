/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Pdf from 'react-native-pdf';
import config from '../lib/config';

export default function PDFExample() {
  let [source, setSource] = useState({
    uri:
      'http://80.82.78.35/get.php?md5=daa058d44fd2d83ff0d3dff27d590fe7&key=YURALLYECEHY10KR&mirr=1',
    cache: true,
  });

  let [visible, setVisible] = useState(false);
  let [error, setError] = useState('');

  const {viewBookId} = useSelector((store) => store.books);
  useEffect(() => {
    setSourceUrl();
  }, [viewBookId]);

  const setSourceUrl = () => {
    let url = `http://80.82.78.35/get.php?md5=${viewBookId}&key=YURALLYECEHY10KR&mirr=1`;
    setSource({...source, uri: url});
    console.log('calling useeffect...');
  };

  const setSnackBar = (error) => {
    console.log(error);
    setVisible(true);
    setError(error);
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          setSnackBar(error);
        }}
        onPressLink={(uri) => {
          console.log(`Link presse: ${uri}`);
        }}
        style={styles.pdf}
      />
      <Snackbar
        visible={visible}
        onDismiss={() => console.log('snackbar dismissed')}
        style={{backgroundColor: config.FOURTH_THEME_COLOR}}
        action={{
          label: 'Undo',
          onPress: () => {
            // Do something
          },
        }}>
        something
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
