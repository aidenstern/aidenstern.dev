import React from 'react';

import ReactMarkdown from 'react-markdown';

import markdownStyles from './Markdown.module.css';

type MarkdownProps = {
  content: string;
};

function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown className={markdownStyles.markdown}>
      {props.content}
    </ReactMarkdown>
  );
}

Markdown.propTypes = {};

export default Markdown;
