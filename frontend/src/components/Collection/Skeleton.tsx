import React from 'react';
import ContentLoader from 'react-content-loader';

interface SkeletonProps {
  size: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ size }) => {
  return (
    <ContentLoader
      style={{ minWidth: size }}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      title="Загрузка..."
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede">
      <rect x="0" y="0" rx="0" ry="0" width={size} height={size} />
    </ContentLoader>
  );
};

export default Skeleton;
