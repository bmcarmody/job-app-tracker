import { ReactElement } from 'react';

type Props = {
  label: string;
  type?: string;
};

export const Input = ({ label, type }: Props): ReactElement<HTMLLabelElement> => {
  return (
    <label>
      {label}:
      <input type={type} className="ml-4 mb-4 text-black px-4 py-1 rounded outline-none" />
    </label>
  );
};

Input.defaultProps = {
  type: 'text',
};
