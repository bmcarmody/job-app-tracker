import { forwardRef, ForwardedRef, SelectHTMLAttributes } from 'react';

export type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  options: SelectOption[];
  label?: string;
  required?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef(
  ({ options, label, required, ...props }: Props, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <div>
        <label className="label">
          <span className="label-text text-slate-300 text-base">
            {label}
            {required && '*'}
          </span>
        </label>
        <select
          ref={ref}
          {...props}
          className={`select select-bordered select-primary focus:outline-offset-0 border-none text-slate-300 bg-base-300`}
        >
          {options.map(({ label: optionLabel, value }) => (
            <option key={value} value={value}>
              {optionLabel}
            </option>
          ))}
        </select>
      </div>
    );
  },
);

Select.displayName = 'Select';

Select.defaultProps = {
  label: '',
  required: true,
};
