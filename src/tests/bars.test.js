
import { Provider } from 'react-redux';
import { render } from 'enzyme';

import {
  ContentBar, SidebarList
} from '../components';
import Store from '../store';


describe('bars components test', () => {
  it('test rendering content in breadcrumb', () => {
    const wrapper = render(<Provider store={Store}>
      <ContentBar />
    </Provider>);

    expect(wrapper.find('div').first().text())
      .toEqual(expect.stringContaining('Solicitação'));
  });

  it('test rendering content in sidebar list', async () => {
    const wrapper = render(<Provider store={Store}>
      <SidebarList />
    </Provider>);

    expect(wrapper.find('h3').first().text())
      .toEqual(expect.stringContaining('123213'))
  });
});
