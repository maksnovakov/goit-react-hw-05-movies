import styles from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';
import defaultPortrait from '../Cast/default-portrait.jpeg';

export default function Cast({ actors }) {
  return (
    <div className={styles.cast}>
      <ul className={styles.castList}>
        {actors.map(({ profile_path, name, character, id }) => {
          const avatar = profile_path
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : defaultPortrait;
          return (
            <div className={styles.castList_item} key={id}>
              <img src={avatar} alt={name} />
              <div className={styles.castList_itemText}>
                <p>Actor Name: {name}</p>
                <p>Character : {character}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  movies: PropTypes.shape(
    PropTypes.shape({
      profile_path: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};