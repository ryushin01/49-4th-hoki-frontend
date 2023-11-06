import FeedList from './FeedList/FeedList';
import './Feed.scss';

/**
 * Feed.js logics
 * @property {function} typingSentry              - 인풋 입력 시 값을 모니터링하기 위한 함수입니다.
 */

const Feed = () => {
  return (
    <main className="feed">
      <section className="feed-section">
        <FeedList />
      </section>
    </main>
  );
};

export default Feed;