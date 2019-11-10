import React from 'react';

export default function ContentBlock({ heading, body, _ref }) {
  return (
    <div className="row row--md block" ref={_ref}>
      <h1>{heading}</h1>
      {body.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  );
}
