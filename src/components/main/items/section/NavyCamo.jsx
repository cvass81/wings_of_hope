import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import Trailer from '../trailer';
import useStyles from './styles';
import { Arrow } from '../../../../assets/svgs';

const NavyCamo = () => {
  const classes = useStyles();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = () =>
    axios({
      method: 'post',
      url: '/sendmsg',
      data: { email, message },
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });

  return (
    <Grid
      container
      spacing={8}
      direction="column"
      alignItems="stretch"
      className={classes.section}
    >
      <Grid item>
        <div className={classes.container}>
          <div className={classes.heading}>
            <Typography component="h3" variant="h5">
              This documentary takes us back to...
            </Typography>
          </div>
          <div className={classes.hr}>
            <Arrow />
          </div>
          <div className={classes.paragraph}>
            <Typography align="justify">
              ...the troubled days of 1943. A team of young airmen, of the
              allied forces, is being shot down out the coast of Sifnos. They
              manage to reach the island and get rescued by the locals. We will
              get to know our heroes, through the eyes of their descendants and
              know about their actions that echo to our days.
            </Typography>
          </div>
          <div className={classes.thumbnail}>
            <Trailer />
          </div>
        </div>
      </Grid>
      <Grid item>
        <div className={classes.titleOnlyContainer}>
          <div className={classes.heading}>
            <Typography component="h3" variant="h5">
              Contact
            </Typography>
          </div>
          <div className={classes.hr}>
            <Arrow />
          </div>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} md={5}>
            <Button
              size="small"
              startIcon={<MailIcon />}
              href="mailto:info@grafasdiving.gr"
            >
              <Typography component="span">info@grafasdiving.gr</Typography>
            </Button>
            <br />
            <Button
              size="small"
              startIcon={<FacebookIcon />}
              target="_blank"
              href="https://www.facebook.com/antonis.grafas"
            >
              <Typography component="span">Antonis Grafas</Typography>
            </Button>
            <br />
            <Button
              size="small"
              startIcon={<FacebookIcon />}
              target="_blank"
              href="https://www.facebook.com/grafasdiving/"
            >
              <Typography component="span">Grafas Diving</Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <Grid container alignItems="stretch" direction="column" spacing={2}>
              <Grid item>
                <TextField
                  onChange={e => setEmail(e.target.value)}
                  name="email"
                  fullWidth
                  label="Your Mail"
                />
              </Grid>
              <Grid item>
                <TextareaAutosize
                  onChange={e => setMessage(e.target.value)}
                  name="message"
                  className={classes.textArea}
                  rowsMin={10}
                  placeholder="Place your text here"
                />
              </Grid>
              <Grid item>
                <Button size="small" variant="outlined" onClick={handleSubmit}>
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavyCamo;
