import { render, screen } from '@testing-library/react';
import { Image } from '@/app/_components/elements/image';

describe('Image', () => {
  it('renders with given alt text', () => {
    render(<Image src="/pic.png" alt="sample" width={50} height={50} />);
    expect(screen.getByAltText('sample')).toBeInTheDocument();
  });
});
