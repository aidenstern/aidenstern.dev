/* eslint-disable */
import React from "react";
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";
import ReactMarkdown from "react-markdown";
import markdownStyles from "./Markdown.module.css";

type MarkdownProps = {
  content: string;
};

SyntaxHighlighter.registerLanguage('js', js);

const components = {
  img: ({ ...imgProps }: any) => <img src={imgProps.src} alt={imgProps.alt} />,
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        style={tomorrow}
        wrapLines={true}
        showLineNumbers={true}
      >
        {children}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown components={components} className={markdownStyles.markdown}>
      {props.content}
    </ReactMarkdown>
  );
}

export default Markdown;
