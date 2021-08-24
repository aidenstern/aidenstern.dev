import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('ts', ts);

function CodeBlock({ inline, className, children, ...props }: any) {
  const match = /language-(\w+)/.exec(className || '');

  return !inline && match ? (
    <SyntaxHighlighter
      language={match[1]}
      style={tomorrow}
      wrapLines={false}
      showLineNumbers={false}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

export default CodeBlock;
