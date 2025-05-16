import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from '@/app/page';
import type { ImageProps } from 'next/image';

// Properly mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: function MockImage(props: ImageProps) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img 
      src={typeof props.src === 'string' ? props.src : 'test-image-url.jpg'} 
      alt={props.alt || ''} 
      data-testid="mock-image"
    />;
  },
}));

describe('Index page', () => {
  it('renders the hello world text', () => {
    // Render the component
    render(<Index />);
    
    // Check for the text content
    const helloWorldElement = screen.getByText('Hello, world!');
    expect(helloWorldElement).toBeInTheDocument();
  });
});