/* eslint-disable */
import React from "react";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import markdownStyles from "./Markdown.module.css";

type MarkdownProps = {
  content: string;
};

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
