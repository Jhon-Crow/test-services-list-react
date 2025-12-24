import React from 'react';
import {Button} from '@mui/material';
import type {ServiceType} from "@/entities/Service/model/type.ts";

interface AddDelButtonProps {
    service: ServiceType;
    isAdded: boolean;
    onToggle: (service: ServiceType) => void;
}

export const AddDelButton: React.FC<AddDelButtonProps> = (
    {
        service,
        isAdded,
        onToggle,
    }
) => {
    return (
        <Button
            variant={isAdded ? 'outlined' : 'contained'}
            color={isAdded ? 'secondary' : 'primary'}
            onClick={() => onToggle(service)}
            fullWidth
            sx={{
                py: {xs: 1, sm: 0.75},
                px: {xs: 2, sm: 3},
                fontSize: {xs: '14px', sm: '15px'},
                minHeight: {xs: '36px', sm: '40px'},
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                width: {
                    xs: '120px',
                    sm: '110px',
                    md: '130px',
                    lg: '130px'
                }
            }}
        >
            {isAdded ? 'Убрать' : 'Добавить'}
        </Button>
    );
};
