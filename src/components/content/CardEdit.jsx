import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const CardEdit = ({ editItems, setEditItems }) => {
  const handleSwitch = (e) => {
    setEditItems({ ...editItems, [e.target.name]: e.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch
            checked={editItems.isFav}
            onChange={handleSwitch}
            name="isFav"
            color="primary"
            size="small"
          />
        }
        label="Favourite:"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={editItems.isLoaned}
            onChange={handleSwitch}
            name="isLoaned"
            color="primary"
            size="small"
          />
        }
        label="Loaned Out:"
        labelPlacement="start"
      />
      <FormControlLabel
        control={
          <Switch
            checked={editItems.isReading}
            onChange={handleSwitch}
            name="isReading"
            color="primary"
            size="small"
          />
        }
        label="Currently Reading:"
        labelPlacement="start"
      />
    </FormGroup>
  );
};

export default CardEdit;
