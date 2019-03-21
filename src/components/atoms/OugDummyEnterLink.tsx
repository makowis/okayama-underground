import React, { FunctionComponent } from 'react';

type Props = { className: string; key: string };
const OugDummyEnterLink: FunctionComponent<Props> = ({ key, className }) => (
  <a
    {...{ key, className }}
    href="https://www.yahoo.co.jp/"
    target="_blank"
    rel="noopener noreferrer"
  >
    ENTER
  </a>
);

export default OugDummyEnterLink;
