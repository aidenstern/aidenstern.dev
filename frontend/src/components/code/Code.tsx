import React from 'react';

import CodeBlock from './code-block/CodeBlock';
import CodeHeader from './code-header/CodeHeader';

const Code = ({ inline, className, children, ...props }: any) => {
  return (
    <>
      {inline ? (
        <></>
      ) : (
        <CodeHeader language={className} textToCopy={children} />
      )}
      <CodeBlock inline={inline} className={className} props={props}>
        {children}
      </CodeBlock>
    </>
  );
};

export default Code;
