// Link.react.test.js
import React from 'react';
import Home from '../home';
import renderer from 'react-test-renderer';
import reducer from '../homeReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

test('Renders home component', () => {
  const store = createStore(reducer)
  const component = renderer.create(
    <Provider store={store}>
      <Home/>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
