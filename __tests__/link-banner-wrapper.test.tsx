import { render, screen } from '@testing-library/react';
import { LinkBannerWrapper } from '@/app/(home)/_components';

const props = {
  href: '/test',
  iconLink: '/icon.png',
  iconAlt: 'test icon',
  title: 'Sample Title',
  description: 'Sample description',
};

describe('LinkBannerWrapper', () => {
  it('renders link with correct href', () => {
    render(<LinkBannerWrapper {...props} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', props.href);
  });

  it('renders image with provided alt text', () => {
    render(<LinkBannerWrapper {...props} />);
    const img = screen.getByAltText(props.iconAlt);
    expect(img).toBeInTheDocument();
  });

  it('shows title and description', () => {
    render(<LinkBannerWrapper {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
