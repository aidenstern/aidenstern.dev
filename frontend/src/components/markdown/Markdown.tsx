/* eslint-disable */
import React from "react";

import ReactMarkdown from "react-markdown";
import markdownStyles from "./Markdown.module.css";

type MarkdownProps = {
  content: string;
};

import Code from "src/components/code";

const components = {
  img: ({ ...imgProps }: any) => <img src={imgProps.src} alt={imgProps.alt} />,
  code: ({ node, inline, className, children, ...props }: any) => (
    <Code inline={inline} className={className} {...props}>{children}</Code>
  ),
};

function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown components={components} className={markdownStyles.markdown}>
      {props.content}
    </ReactMarkdown>
  );
}

export default Markdown;
