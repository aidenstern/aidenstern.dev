import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import ts from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import tomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('ts', ts);

function CodeBlock({ inline, language, children, ...props }: any) {
  return !inline && language ? (
    <SyntaxHighlighter
      language={language}
      style={tomorrow}
      wrapLines={false}
      showLineNumbers={false}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={language} {...props}>
      {children}
    </code>
  );
}

export default CodeBlock;
