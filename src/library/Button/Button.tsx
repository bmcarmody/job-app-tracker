import { ReactElement, useMemo } from 'react';

type TypeStyles = Record<'backgroundColor' | 'backgroundColorHover' | 'textColor', string>;

type Props = {
  content: ReactElement | string;
  type: 'primary' | 'secondary';
  additionalStyles: string;
};

const buttonTypeStyles: Record<Props['type'], TypeStyles> = {
  primary: {
    backgroundColor: 'bg-purple-600',
    backgroundColorHover: 'hover:bg-purple-700',
    textColor: 'text-slate-200',
  },
  secondary: {
    backgroundColor: 'bg-purple-600',
    backgroundColorHover: 'hover:bg-purple-700',
    textColor: 'text-slate-200',
  },
};

export const Button = ({ content, type, additionalStyles }: Props): ReactElement<HTMLButtonElement> => {
  const typeStyles = useMemo(() => {
    const styles = Object.values(buttonTypeStyles[type]);

    return styles.join(' ');
  }, [type]);

  return <button className={`p-4 rounded ${typeStyles} ${additionalStyles}`}>{content}</button>;
};

Button.defaultProps = {
  color: 'bg-purple-600',
  textColor: 'text-slate-200',
  additionalStyles: '',
};
