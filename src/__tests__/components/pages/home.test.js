import React from 'react';
import { render } from '@testing-library/react';
import { Home } from '../../pages';
jest.mock('react-router-dom');
describe('Homepage', () => {
    it('renders homepage', () => {
const {container, getByText} = render(<Home />);
 expect(getByText('Unlimited films, TV programmes and more.')).toBeTruthy(); 
 expect(container.firstChild).toMatchSnapshot();
    });
});