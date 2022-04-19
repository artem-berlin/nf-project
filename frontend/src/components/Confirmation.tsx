
import './Status.css';
import { Button, Typography } from '@material-ui/core';
import React from 'react';


interface Props {}

const Confirmation: React.FC<Props> = props => {



  return (
    <div className="Confirmation">
      <div className="content">
        <Typography variant="h4">Success</Typography>
        <Typography variant="body2">
          Congratulations, on your purchase. The order has been received and is being processed.
        </Typography>
        <Typography variant="body2">
          <em>This is for demo purposes only. You have not been charged, the order is not being processed.</em>
        </Typography>
        <div className="buttons">
          <Button variant="text" onClick={() =>('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
