import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Icon } from 'semantic-ui-react';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function NewsElement({element}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card elevation={2} className="news-card">
                <CardMedia
                    component="img"
                    height="194"
                    image={element.urlToImage}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {element.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Icon name='favorite'/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <Icon name='share alternate'/>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Icon name='expand'/>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant='h7'>
                            {element.description}
                        </Typography>
                        <Typography paragraph>
                            {element.content}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
        
    );
}
