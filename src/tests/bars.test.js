import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import {
  ContentBar, SidebarList
} from '../components';
import Store from '../store';


describe('bars components test', () => {
  it('test rendering content in breadcrumb', () => {
    const { getAllByText } = render(<Provider store={Store}>
      <ContentBar />
    </Provider>);

    expect(getAllByText(/Solicitação/i)).toHaveLength;
  });

  it('test rendering content in sidebar list', () => {
    const wrapper = shallow(<Provider store={Store}>
      <SidebarList />
    </Provider>);

    expect(wrapper.find('h3').first().text())
      .toEqual(expect.stringContaining('123213'));
  });
});