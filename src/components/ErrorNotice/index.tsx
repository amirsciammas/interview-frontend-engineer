import React from 'react';
import * as classes from './notice.module.css';

interface Props {
  isVisible?: boolean;
}

function Notice(props: Props) {
  const { isVisible } = props;

  const hiddenStyle = isVisible ? '' : classes.noticeHidden;
  return (
    <div className={`${classes.notice} ${hiddenStyle}`}>
      Error loading data.
      {' '}
      <button type="button" className={classes.reload} onClick={() => document.location.reload()}>
        Reload page?
      </button>
    </div>
  );
}

Notice.defaultProps = {
  isVisible: false,
};

export default Notice;
