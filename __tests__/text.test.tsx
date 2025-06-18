import { render, screen } from '@testing-library/react';
import { Text } from '@/app/_components/elements/text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text variant="normal">sample text</Text>);
    expect(screen.getByText('sample text')).toBeInTheDocument();
  });

  it('applies xl style', () => {
    render(<Text variant="xl">big text</Text>);
    const paragraph = screen.getByText('big text');
    expect(paragraph).toHaveClass('text-xl', 'font-bold');
  });
});
