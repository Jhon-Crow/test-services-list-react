import React from 'react';
import { Typography, Box } from '@mui/material';

interface TotalPriceProps {
    amount: number;
    currency?: string;
}

export const TotalPrice: React.FC<TotalPriceProps> = ({
                                                          amount,
                                                          currency = '₽',
                                                      }) => {
    const formattedAmount = amount.toLocaleString('ru-RU');

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                py: 2,
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider',
                mt: 2,
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                    fontWeight: 600,
                }}
            >
                Итого
            </Typography>
            <Typography
                variant="h5"
                color="primary"
                sx={{
                    fontSize: { xs: '18px', sm: '20px', md: '24px' },
                    fontWeight: 700,
                }}
            >
                {formattedAmount} {currency}
            </Typography>
        </Box>
    );
};