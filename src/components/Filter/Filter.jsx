import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import css from './filter.module.css';
import { selectStatusFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.forma}>
      <label className={css.nameNumber}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
          className={css.pole}
        />
      </label>
    </div>
  );
};
