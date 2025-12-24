import React from 'react';
import Button from '@mui/material/Button';

interface AddButtonProps {
    label: string;
    onClickHandler: () => void;
}

export const AddButton: React.FC<AddButtonProps> = ({ label, onClickHandler }) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClickHandler}
            fullWidth
            sx={{
                py: { xs: 1.5, sm: 1.25 },
                px: { xs: 2, sm: 3 },
                fontSize: { xs: '14px', sm: '15px', md: '16px' },
                minHeight: { xs: '44px', sm: '40px' },
                borderRadius: { xs: 2, sm: 2.5 },
                textTransform: 'none',
                fontWeight: 600,
                letterSpacing: { xs: 0.5, sm: 0.75 },
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    transform: { xs: 'none', sm: 'translateY(-1px)' },
                    boxShadow: { xs: 'none', sm: '0 4px 12px rgba(0,0,0,0.15)' },
                },
                '&:active': {
                    transform: 'translateY(0)',
                },
            }}
        >
            {label}
        </Button>
    );
};
