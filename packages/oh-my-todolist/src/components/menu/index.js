import React from 'react';
import classnames from 'classnames';
import Styles from './index.css';

export default (props) => {
  const cls = classnames({
    [Styles.menu]: !props.current,
    [Styles.menuCurrent]: props.current
  })
  return (
    <li className={cls}>
      {props.children}
    </li>
  )
};
