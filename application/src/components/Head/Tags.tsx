import * as React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title?: string,
  children?: any,
}

const Tags = (props: Props) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      {props.children}
    </Helmet>
  )
}

export default Tags;
