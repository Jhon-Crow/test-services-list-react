import Grid from "@mui/material/Grid";
import {TotalBlock} from "@/widgets/TotalBlock/ui/TotalBlock.tsx";
import {ServicesList} from "@/widgets/ServicesList/ui/ServicesList.tsx";
import {useState} from "react";
import type {ServiceType} from "@/entities/Service/model/type.ts";
import {db} from "@/entities/mockData/db.ts";

export const MainPage = () => {
    const [selectedServices, setSelectedServices] = useState<ServiceType[] | []>([]);

    const handleToggleService = (service: ServiceType) => {
        setSelectedServices(prev =>
            prev.some(s => s.id === service.id)
                ? prev.filter(s => s.id !== service.id)
                : [...prev, service]
        );
    };
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 8 }}>
                <ServicesList
                    services={db}
                    selectedIds={selectedServices.map(s => s.id)}
                    onToggleService={handleToggleService}
                />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
                <TotalBlock
                    selectedServices={selectedServices}
                    onRemoveService={(id: ServiceType['id']) =>
                        setSelectedServices(prev => prev.filter(s => s.id !== id))
                    }
                    onCheckout={() => setSelectedServices([])}
                />
            </Grid>
        </Grid>

    );

};