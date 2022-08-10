import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button', () => {
	const buttonText = 'Button from test';

	it('should render button correctly', () => {
		const component = render(<Button text={buttonText} />);
		component.getByText(buttonText);
	});

	it('clicking the button calls event handler once', () => {
		const mockHandler = vi.fn();

		const component = render(
			<Button text={buttonText} handleClick={mockHandler} />
		);
		const button = component.getByText(buttonText);
		fireEvent.click(button);

		expect(mockHandler).toHaveBeenCalledTimes(1);
	});
});
