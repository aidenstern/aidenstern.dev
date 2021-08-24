import React from 'react';

import CodeBlock from './code-block/CodeBlock';
import CodeHeader from './code-header/CodeHeader';

const Code = ({ inline, className, children, ...props }: any) => {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  return (
    <>
      {inline ? (
        <></>
      ) : (
        <CodeHeader language={language} textToCopy={children} />
      )}
      <CodeBlock inline={inline} language={language} props={props}>
        {children}
      </CodeBlock>
    </>
  );
};

export default Code;
