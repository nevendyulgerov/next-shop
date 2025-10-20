import { FC, HTMLAttributes } from 'react';
import { cn } from '@/utils/common';
import { SpinnerIcon } from '@/components/base/spinner/spinner-icon';

type SpinnerProps = HTMLAttributes<HTMLDivElement>;

export const Spinner: FC<SpinnerProps> = (props) => {
  const { className, ...restProps } = props;

  return (
    <div className={cn('flex items-center justify-center w-56 h-56', className)} data-testid="spinner" {...restProps}>
      <SpinnerIcon />
    </div>
  );
};
