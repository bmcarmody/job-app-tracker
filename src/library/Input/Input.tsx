import { ReactElement, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';

type Props = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  ({ label, ...props }: Props, ref: ForwardedRef<HTMLInputElement>): ReactElement<HTMLLabelElement> => (
    <label>
      {label && <>{label}:</>}
      <input className="ml-4 mb-4 text-black px-4 py-1 rounded outline-none" {...props} ref={ref} />
    </label>
  ),
);

Input.displayName = 'Input';
