import PropTypes from 'prop-types';
import React from 'react';
import ProgressBar from 'Components/ProgressBar';
import { sizes } from 'Helpers/Props';
import getProgressBarKind from 'Utilities/Author/getProgressBarKind';
import translate from 'Utilities/String/translate';
import styles from './AuthorIndexProgressBar.css';

function AuthorIndexProgressBar(props) {
  const {
    monitored,
    status,
    bookCount,
    bookFileCount,
    totalBookCount,
    posterWidth,
    detailedProgressBar
  } = props;

  const progress = bookCount ? bookCount / totalBookCount * 100 : 100;
  const text = `${bookCount} / ${totalBookCount}`;

  return (
    <ProgressBar
      className={styles.progressBar}
      containerClassName={styles.progress}
      progress={progress}
      kind={getProgressBarKind(status, monitored, progress)}
      size={detailedProgressBar ? sizes.MEDIUM : sizes.SMALL}
      showText={detailedProgressBar}
      text={text}
      title={translate('BookFileCountBookCountTotalTotalBookCountInterp', [bookFileCount, bookCount, totalBookCount])}
      width={posterWidth}
    />
  );
}

AuthorIndexProgressBar.propTypes = {
  monitored: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
  bookCount: PropTypes.number.isRequired,
  bookFileCount: PropTypes.number.isRequired,
  totalBookCount: PropTypes.number.isRequired,
  posterWidth: PropTypes.number.isRequired,
  detailedProgressBar: PropTypes.bool.isRequired
};

export default AuthorIndexProgressBar;
