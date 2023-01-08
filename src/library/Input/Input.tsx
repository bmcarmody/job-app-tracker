import { ChangeEventHandler, ReactElement, memo } from 'react';

type Props = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
};

export const Input = ({ label, value, onChange, type }: Props): ReactElement<HTMLLabelElement> => {
  return (
    <label>
      {label}:
      <input
        type={type}
        className="ml-4 mb-4 text-black px-4 py-1 rounded outline-none"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
};

export const MemoizedInput = memo(Input);
