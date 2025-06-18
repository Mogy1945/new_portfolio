import { render, screen } from '@testing-library/react';
import { MainContentsWrapper } from '@/app/_components/wrapper/main-contents-wrapper';

describe('MainContentsWrapper', () => {
  it('renders children', () => {
    render(
      <MainContentsWrapper>
        <p>child content</p>
      </MainContentsWrapper>
    );
    expect(screen.getByText('child content')).toBeInTheDocument();
  });
});
