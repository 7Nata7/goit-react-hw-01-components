import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ title, stats }) => {

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
          <span className="percentage">{stats[0].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">{stats[1].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">{stats[2].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

Statistics.propTypes = {
 title: PropTypes.string,
 stats: PropTypes.arrayOf(
   PropTypes.shape({
     id: PropTypes.string.isRequired,
     label: PropTypes.string.isRequired,
     percentage: PropTypes.number.isRequired,
   })
 ).isRequired,
};

export default Statistics;
