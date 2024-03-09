type Props = {
  beforeId: string;
}

export const DropIndicator = ({ beforeId }: Props) => {
  return (
    <div data-before={beforeId} className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0" />
  )
};
