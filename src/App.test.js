import { render, screen } from '@testing-library/react';
import Card from './components/Card';

test('should render card component', () => {
    render(<Card/>);
    const element = screen.getByTestId('card');
    expect(element).toBeInTheDocument(); 
})

