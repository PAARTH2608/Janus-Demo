import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Service = props => {
  return (
    <Card sx={{ maxWidth: 345,
    backgroundColor: '#2b2b2b',
    color: '#fff',
    // height: '90%',
    }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"
            sx={{
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
          >
            {props.icon}&nbsp;
            {props.name}
          </Typography>
          <Typography variant="body2" color="#fff">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Service;