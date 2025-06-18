import { render, screen } from '@testing-library/react';
import { Heading } from '@/app/_components/elements/heading';

describe('Heading', () => {
  it('renders the correct heading level', () => {
    render(<Heading as="h2">Test Heading</Heading>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Test Heading');
  });

  it('applies variant style for h1', () => {
    render(<Heading as="h1">Title</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-3xl', 'font-bold', 'leading-normal');
  });
});
