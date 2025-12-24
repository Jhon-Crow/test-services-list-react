import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ServiceCardProps {
  children: React.ReactNode;
  elevation?: 'none' | 'low' | 'medium' | 'high';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  children,
  elevation = 'low'
}) => {
  const elevationMap = {
    none: 0,
    low: 1,
    medium: 3,
    high: 8
  };

  return (
    <Card
      elevation={elevationMap[elevation]}
      sx={{
        width: '100%',
        borderRadius: { xs: 2, sm: 3 },
        border: '1px solid',
        borderColor: 'divider',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: { xs: 'none', sm: 'translateY(-2px)' },
          boxShadow: { xs: 'none', sm: '0 4px 12px rgba(0,0,0,0.1)' },
        },
        marginBottom: { xs: 1.5, sm: 2 },
        overflow: 'hidden',
        boxShadow: { xs: 'none', sm: '0 2px 8px rgba(0,0,0,0.05)' },
      }}
    >
      <CardContent
        sx={{
          padding: { xs: 2, sm: 2.5, md: 3 },
          '&:last-child': {
            paddingBottom: { xs: 2, sm: 2.5, md: 3 },
          },
          minHeight: { xs: 'auto', sm: 120 },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1.5, sm: 2 },
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};
