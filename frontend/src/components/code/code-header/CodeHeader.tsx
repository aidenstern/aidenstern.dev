import React from 'react';

import codeHeaderStyles from './CodeHeader.module.css';

type CodeHeaderProps = {
  language: string | undefined;
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
    <div className={`${codeHeaderStyles['badge-btn-wrap']} text-xs -mb-6 px-4`}>
      <div
        className={`${codeHeaderStyles['language-badge']} ${
          codeHeaderStyles[`language-badge-${props.language}`]
        }`}
      >
        {(props.language || '').toUpperCase()}
      </div>
      <button
        className={codeHeaderStyles['btn-copy']}
        type="button"
        onClick={() => copyToClipboard(props.textToCopy)}
      >
        Copy
      </button>
    </div>
  );
};

export default CodeHeader;
