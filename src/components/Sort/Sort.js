import { useDispatch, useSelector } from 'react-redux'

import classes from './Sort.module.scss'
import { cheapest, fastest } from '../store/SortReducer'

function Sort() {
  const dispatch = useDispatch()

  const isCheapest = useSelector((state) => state.sort.isCheapest)
  const isFastest = useSelector((state) => state.sort.isFastest)

  return (
    <div className={classes.sort}>
      <button
        className={classes[`${isCheapest ? 'active_first' : 'btn_first'}`]}
        onClick={() => {
          dispatch(cheapest())
        }}
      >
        Самый дешевый
      </button>
      <button
        className={classes[`${isFastest ? 'active_second' : 'btn_second'}`]}
        onClick={() => {
          dispatch(fastest())
        }}
      >
        Самый быстрый
      </button>
    </div>
  )
}
export default Sort
