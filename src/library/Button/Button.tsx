import { ReactElement, useMemo } from 'react';

type TypeStyles = Record<'backgroundColor' | 'backgroundColorHover' | 'textColor', string>;

type Props = {
  content: ReactElement | string;
  type: 'primary' | 'secondary';
  additionalStyles: string;
  onClick?: () => void;
};

const buttonTypeStyles: Record<Props['type'], TypeStyles> = {
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

export const Button = ({ content, type, additionalStyles, onClick }: Props): ReactElement<HTMLButtonElement> => {
  const typeStyles = useMemo(() => {
    const styles = Object.values(buttonTypeStyles[type]);

    return styles.join(' ');
  }, [type]);

  return (
    <button className={`p-4 rounded ${typeStyles} ${additionalStyles}`} onClick={onClick}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  color: 'bg-purple-600',
  textColor: 'text-slate-200',
  additionalStyles: '',
};
