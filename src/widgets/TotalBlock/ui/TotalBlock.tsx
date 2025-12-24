import React from 'react';
import {Button, Typography, Box, Stack} from '@mui/material';
import type {ServiceType} from "@/entities/Service/model/type.ts";
import {ServiceCard} from "@/shared/Card/ui/Card.tsx";
import {TotalPrice} from "@/widgets/TotalBlock/ui/TotalPrice.tsx";

interface TotalBlockProps {
    selectedServices: ServiceType[] | [];
    onRemoveService: (id: number) => void;
    onCheckout: () => void;
}

export const TotalBlock: React.FC<TotalBlockProps> = (
    {
        selectedServices,
        onRemoveService,
        onCheckout,
    }
) => {

    const totalAmount = selectedServices?.length ? selectedServices.reduce(
        (sum, service) => sum + service.price,
        0
    ) : 0;

    return (
        <ServiceCard elevation="medium">
            <Typography
                variant="h5"
                sx={{
                    fontSize: {xs: '18px', sm: '20px'},
                    fontWeight: 700,
                    mb: 2,
                }}
            >
                Ваш заказ
            </Typography>

            {selectedServices?.length > 0 ? (
                <>
                    <Stack spacing={1.5} sx={{mb: 2}}>
                        {selectedServices.map((service) => (
                            <Box
                                key={service.id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    py: 1,
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: {xs: '14px', sm: '16px'},
                                            fontWeight: 500,
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            fontSize: {xs: '12px', sm: '14px'},
                                        }}
                                    >
                                        {service.price} ₽
                                    </Typography>
                                </Box>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                    onClick={() => onRemoveService(service.id)}
                                    sx={{
                                        fontSize: {xs: '12px', sm: '14px'},
                                        py: 0.5,
                                        px: 2,
                                    }}
                                >
                                    Удалить
                                </Button>
                            </Box>
                        ))}
                    </Stack>

                    <TotalPrice amount={totalAmount}/>

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={onCheckout}
                        disabled={selectedServices.length === 0}
                        sx={{
                            py: {xs: 1.5, sm: 1.75},
                            mt: 3,
                            fontSize: {xs: '16px', sm: '18px'},
                            fontWeight: 600,
                        }}
                    >
                        Оформить заказ
                    </Button>
                </>
            ) : (
                <Typography
                    color="text.secondary"
                    sx={{
                        textAlign: 'center',
                        py: 3,
                        fontSize: {xs: '14px', sm: '16px'},
                    }}
                >
                    Выберите услуги из списка
                </Typography>
            )}
        </ServiceCard>
    );
};
