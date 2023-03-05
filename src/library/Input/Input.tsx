import { ReactElement, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';

type Props = {
  label?: string;
  required?: boolean;
  containerStyles?: string;
  inputStyles?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { label, required, inputStyles, containerStyles, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement<HTMLLabelElement> => {
    return (
      <div className={`form-control ${containerStyles}`}>
        <label className="label">
          <span className="label-text text-slate-600 text-sm">
            {label}
            {required && '*'}
          </span>
        </label>
        <input
          className={`input input-bordered input-primary text-black border-slate-300 border-2 focus:outline-offset-0 bg-white ${inputStyles}`}
          {...props}
          ref={ref}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

Input.defaultProps = {
  label: '',
  required: true,
  containerStyles: '',
  inputStyles: '',
};
