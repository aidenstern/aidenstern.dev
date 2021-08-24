import React from 'react';

type CodeHeaderProps = {
  language: string;
  textToCopy: string;
};

function copyToClipboard(content: string) {
  const el = document.createElement('textarea');
  el.value = content;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

const CodeHeader = (props: CodeHeaderProps) => {
  return (
    <div className="flex justify-between">
      <span>{props.language}</span>
      <button type="button" onClick={() => copyToClipboard(props.textToCopy)}>
        Copy
      </button>
    </div>
  );
};

export default CodeHeader;
