import { View, Text } from 'react-native'
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomerScreenNavigationProp } from '../screens/CustomersScreen';
import { TouchableOpacity } from 'react-native';

type Props = {
  userId: string;
  name: string;
  email: string
}

const CustomerCard = ({email, name, userId}: Props) => {
  const {loading, error, data } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  

  return (
    
    <TouchableOpacity>
      <Text>CustomerCard</Text>
    </TouchableOpacity>
  );
};

export default CustomerCard