import { inputStyles as sharedInputStyles } from '../shared';
import { forwardRef, ForwardedRef, SelectHTMLAttributes, useMemo } from 'react';
import { ChevronDown } from 'react-feather';

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
      <label>
        {label && getLabel}
        <div className="relative w-min">
          <select ref={ref} {...props} className={`appearance-none rounded-md leading-6 pr-10 ${sharedInputStyles}`}>
            {options.map(({ label: optionLabel, value }) => (
              <option key={value} value={value}>
                {optionLabel}
              </option>
            ))}
          </select>
          <span className="absolute right-5 top-2/4 translate-x-2/4 -translate-y-2/4 pointer-events-none">
            <ChevronDown />
          </span>
        </div>
      </label>
    );
  },
);

Select.displayName = 'Select';

Select.defaultProps = {
  label: '',
  required: true,
};
