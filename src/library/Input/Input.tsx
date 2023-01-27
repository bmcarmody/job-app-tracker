import { inputStyles as sharedInputStyles } from '../shared';
import { ReactElement, InputHTMLAttributes, forwardRef, ForwardedRef, useMemo } from 'react';

type Props = {
  label?: string;
  required?: boolean;
  precontent?: string;
  containerStyles?: string;
  inputStyles?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { label, required, precontent, containerStyles, inputStyles, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement<HTMLLabelElement> => {
    const getLabel = useMemo(
      () => (
        <div className="mb-2">
          {label}
          {required && '*'}
        </div>
      ),
      [label, required],
    );

    return (
      <label className={containerStyles}>
        {label && getLabel}
        {precontent && (
          <span className={`inline-block rounded-l-md w-2/12 text-center ${sharedInputStyles}`}>{precontent}</span>
        )}
        <input
          className={`text-black ${
            precontent ? 'rounded-r-md' : 'rounded-md'
          } focus:outline-purple-400 ${sharedInputStyles} ${inputStyles}`}
          {...props}
          ref={ref}
        />
      </label>
    );
  },
);

Input.displayName = 'Input';

Input.defaultProps = {
  label: '',
  required: true,
  precontent: '',
  containerStyles: '',
  inputStyles: '',
};
