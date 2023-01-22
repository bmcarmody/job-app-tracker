import { ReactElement, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';

type Props = {
  label?: string;
  additionalStyles?: string;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { label, additionalStyles, required, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement<HTMLLabelElement> => (
    <label>
      {label && (
        <div className="mb-2">
          {label}
          {required && '*'}
        </div>
      )}
      <input
        className={`text-black px-4 py-2 rounded-md outline outline-2 outline-slate-300 focus:outline-purple-400 outline-offset-0 ${additionalStyles}`}
        {...props}
        ref={ref}
      />
    </label>
  ),
);

Input.displayName = 'Input';

Input.defaultProps = {
  additionalStyles: '',
  required: true,
};
