import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../Ticket/Ticket'

import { getTickets } from '../store/TicketReducer'

import classes from './TicketList.module.scss'
import { Alert } from 'antd'

function TicketList(props) {
  const dispatch = useDispatch()
  const stop = useSelector((state)=>state.getTickets.tickets.stop)
  const error = useSelector((state)=> state.getTickets.error)
  let tickets = useSelector((state) => state.getTickets.tickets.tickets)
  const isCheapest = useSelector((state) => state.sort.isCheapest)
  const isAll = useSelector((state) => state.filter.isAll)
  const isWithout = useSelector((state) => state.filter.isWithout)
  const isOne = useSelector((state) => state.filter.isOne)
  const isTwo = useSelector((state) => state.filter.isTwo)
  const isThree = useSelector((state) => state.filter.isThree)
  
  const [ticketsData, setTicketsData] = useState([])

  useEffect(() => {
    if (!stop) {
      const timer = setTimeout(() => {
        dispatch(getTickets(props.id));
      }, 500);
      if(typeof tickets !== 'undefined'){
        setTicketsData([...ticketsData,...tickets])
      }
      return () => clearTimeout(timer);
    }
  }, [dispatch, props.id, stop, tickets, error]);
  
  useEffect(()=>{
    dispatch(getTickets(props.id))
  },[dispatch])

  let allTickets = []
  let key = 0
  let ticketsArr = []


  const [displayedTickets, setDisplayedTickets] = useState(5)

  const showMoreTickets = () => {
    setDisplayedTickets((prev) => prev + 5)
  }

  if (typeof tickets !== 'undefined') {


    isCheapest
      ? ticketsData.sort((a, b) => a.price - b.price)
      : ticketsData.sort(
          (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
        )

    allTickets = ticketsData.slice(0, ticketsData.length)

    if (!isAll) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length <= 3)
    }

    if (!isWithout) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 0)
    }

    if (!isOne) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 1)
    }

    if (!isTwo) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 2)
    }

    if (!isThree) {
      allTickets = allTickets.filter((el) => el.segments[0].stops.length + el.segments[1].stops.length !== 3)
    }

    if (!isAll && !isWithout && !isOne && !isTwo && !isThree) {
      allTickets = []
    }

    allTickets = allTickets.slice(0, displayedTickets)

    ticketsArr = allTickets.map((element) => {
      key+=1
      return <Ticket key={key} price={element.price} carrier={element.carrier} segments={element.segments} />
    })
  } else {
    ticketsArr = []
  }

  const progressBar = (<div className={classes['progress-container']}>
  <div className={classes["progress-materializecss"]}>
    <div className={classes["indeterminate"]}></div>
  </div>
        
</div>)

const btn_more = (<button className={classes['btn_more']} onClick={showMoreTickets}>
Показать еще 5 билетов!
</button>)

const emptyData = ( <Alert
  message="Ошибка"
  description="Рейсов, подходящих под заданные фильтры, не найдено."
  type="error"
  showIcon
/>)

  return (
    <div className={classes.TicketList}>
      {!stop ? progressBar : <React.Fragment/>}
      {ticketsArr}
      {ticketsArr.length === 0 && !isAll ? emptyData :
      ticketsArr.length === 0 ? <React.Fragment/> : btn_more}
    </div>
  )
}
export default TicketList
