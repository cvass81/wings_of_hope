import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';
import { Arrow } from '../../../../assets/svgs';
import player from '../../../../assets/images/player.png';

const NavyCamo = () => {
  const classes = useStyles();
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
            <img
              className={classes.image}
              alt="Player Thumbnail"
              src={player}
            />
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
            <form>
              <Grid
                container
                alignItems="stretch"
                direction="column"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    className={classes.textAreaLabel}
                    component="div"
                    variant="h6"
                  >
                    Your Mail
                  </Typography>
                </Grid>
                <Grid item>
                  <TextareaAutosize
                    className={classes.textArea}
                    rowsMin={10}
                    placeholder="Place your text here"
                  />
                </Grid>
                <Grid item>
                  <Button size="small" variant="outlined">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavyCamo;
