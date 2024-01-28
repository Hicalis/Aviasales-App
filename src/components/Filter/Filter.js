import { useDispatch, useSelector } from 'react-redux'

import { filterAll, filterWithout, filterOne, filterTwo, filterThree } from '../store/FilterReducer'

import classes from './Filter.module.scss'
import { Checkbox } from 'antd'

function Filter() {
  const dispatch = useDispatch()

  const isAll = useSelector((state) => state.filter.isAll)
  const isWithout = useSelector((state) => state.filter.isWithout)
  const isOne = useSelector((state) => state.filter.isOne)
  const isTwo = useSelector((state) => state.filter.isTwo)
  const isThree = useSelector((state) => state.filter.isThree)

  return (
    <div className={classes.filter}>
      <h1>Количество пересадок</h1>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <Checkbox
            checked={isAll}
            onChange={() => {
              dispatch(filterAll())
            }}
          />
          <h2>Все</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <Checkbox
            checked={isWithout}
            onChange={() => {
              dispatch(filterWithout())
            }}
          />
          <h2>Без пересадок</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <Checkbox
            checked={isOne}
            onChange={() => {
              dispatch(filterOne())
            }}
          />
          <h2>1 пересадка</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <Checkbox
            checked={isTwo}
            onChange={() => {
              dispatch(filterTwo())
            }}
          />
          <h2>2 пересадки</h2>
        </label>
      </div>
      <div className={classes['filter_name']}>
        <label className={classes['checkbox-container']}>
          <Checkbox
            checked={isThree}
            onChange={() => {
              dispatch(filterThree())
            }}
          />
          <h2>3 пересадки</h2>
        </label>
      </div>
    </div>
  )
}
export default Filter
