import { ReactElement, InputHTMLAttributes, forwardRef, ForwardedRef } from 'react';

type Props = {
  label?: string;
  required?: boolean;
  containerStyles?: string;
  inputStyles?: string;
  inputGroupLabel?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  (
    { label, required, inputStyles, containerStyles, inputGroupLabel, ...props }: Props,
    ref: ForwardedRef<HTMLInputElement>,
  ): ReactElement<HTMLLabelElement> => {
    const getInputType = (input: ReactElement): ReactElement => {
      if (!inputGroupLabel) {
        return input;
      }

      return (
        <label className="input-group">
          <span className="bg-base-200 text-slate-300">{inputGroupLabel}</span>
          {input}
        </label>
      );
    };

    return (
      <div className={`form-control ${containerStyles}`}>
        <label className="label">
          <span className="label-text text-slate-300 text-base">
            {label}
            {required && '*'}
          </span>
        </label>
        {getInputType(
          <input
            className={`input input-bordered input-primary border-none text-slate-300 placeholder:text-slate-600 focus:outline-offset-0 bg-base-300 ${inputStyles}`}
            {...props}
            ref={ref}
          />,
        )}
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
  inputGroupLabel: '',
};
