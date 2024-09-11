import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    // Arrange
    render(<App />);

    // Assert
    expect(screen.getByText('Calculator')).toBeInTheDocument();
});
