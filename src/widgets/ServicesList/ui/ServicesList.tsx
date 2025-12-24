import React from 'react';
import type {ServiceType} from "@/entities/Service/model/type.ts";
import Grid from "@mui/material/Grid";
import {ServiceItem} from "@/widgets/ServicesList/ui/ServiceItem.tsx";

interface ServicesListProps {
    services: ServiceType[];
    selectedIds: number[];
    onToggleService: (service: ServiceType) => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({
                                                              services,
                                                              selectedIds,
                                                              onToggleService,
                                                          }) => {
    return (
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>
            {services.map((service) => (
                <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <ServiceItem
                        service={service}
                        isAdded={selectedIds.includes(service.id)}
                        onToggle={onToggleService}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
