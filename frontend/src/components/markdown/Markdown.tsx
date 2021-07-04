/* eslint-disable */
import React from "react";

import ReactMarkdown from "react-markdown";

import markdownStyles from "./Markdown.module.css";
import { getStrapiURL } from "src/lib/api";

type MarkdownProps = {
  content: string;
};

function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        img: ({ ...imgProps }: any) => (
          <img src={getStrapiURL(imgProps.src)} alt={imgProps.alt} />
        ),
      }}
      className={markdownStyles.markdown}
    >
      {props.content}
    </ReactMarkdown>
  );
}

export default Markdown;
