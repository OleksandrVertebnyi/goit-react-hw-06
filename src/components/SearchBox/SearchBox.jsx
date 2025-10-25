import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilterName } from '../../redux/selectors';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const value = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="Type name…"
      />
    </div>
  );
}
