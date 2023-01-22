import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface ClockProps {
  textColor?: string;
}

export const Clock = ({ textColor = '#FFFFFF' }: ClockProps) => {
  const [hours, setHours] = useState<string>('--');
  const [minutes, setMinutes] = useState<string>('--');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const newHours = ('0' + now.getHours()).slice(-2);
      const newMinutes = ('0' + now.getMinutes()).slice(-2);
      setHours(newHours);
      setMinutes(newMinutes);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Text fontSize="5xl" color={textColor} lineHeight="1" w="20%" textAlign="right">
      {`${hours}:${minutes}`}
    </Text>
  );
};
