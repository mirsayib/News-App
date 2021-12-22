import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function Tagg({country, source}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs 
            value={value} onChange={handleChange} aria-label="icon label tabs example"
            TabIndicatorProps={{ sx: { display: 'none' } }}
        >
            {!source && <Tab  label={country} disabled/>}
            {source && <Tab  label={source} disabled/>}
            {!source && <Tab label="All Sources" disabled/>}
        </Tabs>
    );
}
