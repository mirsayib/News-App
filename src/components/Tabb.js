import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function BasicTabs({setCat, setSource}) {
    const [category, setCategory] = React.useState('business')

    const handleChange = (event, newValue) => {
        setCategory(newValue);
        setCat(newValue)
        setSource('')
    };

    return (
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        sx={{
                            '& .MuiTabs-flexContainer': {
                                flexWrap: 'wrap',
                            },
                        }}
                        TabIndicatorProps={{ sx: { display: 'none' } }}
                        centered
                        value={category} onChange={handleChange} aria-label="basic tabs example"
                    >
                        <Tab label="business" value="business" />
                        <Tab label="entertainment" value="entertainment" />
                        <Tab label="general" value="general" />
                        <Tab label="health" value="health" />
                        <Tab label="science" value="science" />
                        <Tab label="sports" value="sports" />
                        <Tab label="technology" value="technology" />
                    </Tabs>
                </Box>

            </Box>

    );
}
