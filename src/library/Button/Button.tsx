import { ButtonHTMLAttributes, ReactElement, useMemo } from 'react';

type TypeStyles = Record<'backgroundColor' | 'backgroundColorHover' | 'textColor', string>;

type Props = {
  children: ReactElement | string;
  appearance: 'primary' | 'secondary';
  additionalStyles?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const buttonTypeStyles: Record<Props['appearance'], TypeStyles> = {
  primary: {
    backgroundColor: 'bg-purple-500',
    backgroundColorHover: 'hover:bg-purple-600',
    textColor: 'text-slate-200',
  },
  secondary: {
    backgroundColor: 'bg-slate-300',
    backgroundColorHover: 'hover:bg-slate-200',
    textColor: 'text-black',
  },
};

export const Button = ({
  children,
  appearance,
  additionalStyles,
  ...props
}: Props): ReactElement<HTMLButtonElement> => {
  const typeStyles = useMemo(() => {
    const styles = Object.values(buttonTypeStyles[appearance]);

    return styles.join(' ');
  }, [appearance]);

  return (
    <button className={`p-4 rounded-md ${typeStyles} ${additionalStyles}`} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  additionalStyles: '',
};
