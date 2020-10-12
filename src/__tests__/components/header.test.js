import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components';
jest.mock('react-router-dom');
describe('<Header />', () => {
    it('renders the basic <Header /> component without a background', () => {
const {container, getByTestId, getByText} = render(
<Header bg={false}>
<Header.Frame>
<Header.Logo src="/logo.svg" alt="Netflix"/>
<Header.ButtonLink active="true">Sign In</Header.ButtonLink>
<Header.TextLink active="false">Hello I am a link!</Header.TextLink>
</Header.Frame>
</Header>
);
 expect(getByText('Hello I am a link!')).toBeTruthy();
 expect(getByTestId('header-bg')).toBeFalsy();
          expect(container.firstChild).toMatchSnapshot();
    });
    it('renders the full <Header /> component with a background', () => {
const {container, getByTestId, getByText} = render(
 <Header src="joker1" dontShowOnSmallViewPort>
         <Header.Frame>
           <Header.Group>
             <Header.Logo  src="/images/logo.svg" alt="Netflix" />
             <Header.TextLink
             >
               Series
             </Header.TextLink>
             <Header.TextLink>
               Films
             </Header.TextLink>
           </Header.Group>
           <Header.Group>
             <Header.Search
               searchTerm="Joker"
               setSearchTerm={() => {}}
             />
             <Header.Profile>
               <Header.Picture src="/images/users/1.png" />
               <Header.Dropdown>
                 <Header.Group>
                   <Header.Picture src="/images/users/1.png" />
                   <Header.TextLink>darac</Header.TextLink>
                 </Header.Group>
                 <Header.Group>
                   <Header.TextLink onClick={() => {}}>
                     Sign out
                   </Header.TextLink>
                 </Header.Group>
               </Header.Dropdown>
             </Header.Profile>
           </Header.Group>
         </Header.Frame>

         <Header.Feature>
           <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
           <Header.Text>
             Forever alone in a crowd, failed comedian Arthur Fleck seeks
             connection as he walks the streets of Gotham City. Arthur wears two
             masks -- the one he paints for his day job as a clown, and the
             guise he projects in a futile attempt to feel like he's part of the
             world around him.
           </Header.Text>
           <Header.PlayButton>Play</Header.PlayButton>
         </Header.Feature>
       </Header>
);
 
 expect(getByTestId('search-input')).toBeTruthy();
 expect(getByTestId('search-input').value).toBe('Joker');
 
 fireEvent.change(getByTestId('search-input'), {target: {value: 'Simpsons'}});
 fireEvent.click(getByTestId('search-click'));
 expect(getByText('Series')).toBeTruthy();
 expect(getByText('Films')).toBeTruthy();
 expect(container.firstChild).toMatchSnapshot();
    });

    });