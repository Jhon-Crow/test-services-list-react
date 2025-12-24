import type {ServiceType} from "@/entities/Service/model/type.ts";
import {ServiceCard} from "@/shared/Card/ui/Card.tsx";
import {Box, Typography} from "@mui/material";
import {AddDelButton} from "@/features/AddDelButton/ui/AddDelButton.tsx";
import type {FC} from "react";

interface ServiceItemProps {
    service: ServiceType;
    isAdded: boolean;
    onToggle: (service: ServiceType) => void;
}

export const ServiceItem: FC<ServiceItemProps> = (
    {
        service,
        isAdded,
        onToggle,
    }
) => {
    return (
        <ServiceCard elevation="low">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', sm: 'row'},
                    alignItems: {xs: 'stretch', sm: 'center'},
                    gap: {xs: 1.5, sm: 2},
                    width: '100%',
                }}
            >
                <Box sx={{flex: 1}}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: {xs: '16px', sm: '18px', md: '20px'},
                            fontWeight: 600,
                            mb: 0.5,
                            lineHeight: 1.2,
                        }}
                    >
                        {service.title}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {xs: 'row', sm: 'column'},
                        alignItems: {xs: 'center', sm: 'flex-end'},
                        justifyContent: {xs: 'space-between', sm: 'flex-start'},
                        gap: {xs: 1, sm: 1.5},
                        width: {xs: '100%', sm: 'auto'},
                    }}
                >

                    <Box sx={{width: {xs: '120px', sm: '140px', md: '160px'}}}>
                        <AddDelButton
                            service={service}
                            isAdded={isAdded}
                            onToggle={onToggle}
                        />
                    </Box>
                </Box>
            </Box>
        </ServiceCard>
    );
};
