import type { FC } from 'react';
import { Spinner } from '@/components/base/spinner';

const PageLoader: FC = () => (
  <div className="flex w-full h-full justify-center items-center" style={{ minHeight: 'inherit' }}>
    <Spinner />
  </div>
);

export default PageLoader;
