import React from 'react';
import Counter from '../../components/Counter';

const TestPage: React.FC = () => {
  return (
    <div className="basic-page">
      <Counter />
      Test Page
    </div>
  );
};

export { TestPage };