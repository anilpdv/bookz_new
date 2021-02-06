import React from 'react';
import {View, Text} from 'react-native';
import {Epub} from '@ottofeller/epubjs-rn';

export default function ExampleEpub() {
  return (
    <Epub
      src={'https://s3.amazonaws.com/epubjs/books/moby-dick/OPS/package.opf'}
      flow={'paginated'}
    />
  );
}
