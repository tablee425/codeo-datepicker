import React from 'react';
import renderer from 'react-test-renderer';
import { PDFView } from '../../../src/components';

test('<PDFView />', () => {
  const tree = renderer.create(<PDFView />).toJSON();
  expect(tree).toMatchSnapshot();
});
