import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from '../src/js/components/App.react';

describe('App', () => {
  let app;

  before(() => {
    app = shallow(<App />);
  });

  it('App renders nested components', () => {
      expect(app.find('AccountInfo').length).toEqual(1);
      expect(app.find('List').length).toEqual(1);
  });

});
