import React, { useState } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Modal from '@material-ui/core/Modal';
import player from '../../../../assets/images/player.png';
import useStyles from './styles';
import Video from './components/video';

const Trailer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ButtonBase onClick={handleOpen} disableRipple>
        <img style={{ maxWidth: '100%' }} alt="Player Thumbnail" src={player} />
      </ButtonBase>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="wings-of-hope-trailer"
        BackdropProps={{
          style: { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
        }}
      >
        <Video />
      </Modal>
    </>
  );
};

export default Trailer;
