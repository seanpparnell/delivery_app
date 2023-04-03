import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';

function useCustomerOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState()

  return (
    <div>useCustomerOrders</div>
  )
}

export default useCustomerOrders