import { ChangeEvent, useCallback, Dispatch, SetStateAction } from 'react';

/**
 * Memoize set state callback functions to prevent all <Input />'s from re-rendering on a
 * single <Input /> value change.
 *
 * NOTE: Must being using <MemoizedInput /> component for this hook to work
 * @param setStateAction set state call
 */
export const useSetValueCallback = (setStateAction: Dispatch<SetStateAction<string>>) => {
  return useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setStateAction(value);
  }, []);
};
