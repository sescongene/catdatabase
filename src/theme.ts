import { makeStyles } from '@material-ui/core/styles';
import { secondaryColor } from './constants/colors';

export const useStyles = makeStyles((theme) => ({
  catCard: {
    width: 250,
    margin: '10px 0',
  },
  media: {
    height: 140,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
  },
  catDetailList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  details: {
    fontSize: '12px',
    textTransform: 'uppercase',
    color: secondaryColor,
    marginBottom: '10px',
  },
  nav: {
    padding: 0,
    margin: '20px 0 10px',
  },
  title: {
    marginTop: '40px',
  },
  input: {
    margin: '10px 0 0',
    display: 'block',
    width: '300px',
  },
  previewImage: {
    display: 'block',
    height: '300px',
    margin: '10px 0',
    backgroundSize: 'contain',
  },
  formCard: {
    maxWidth: '340px',
  },
  mainContainer: {
    padding: '20px 0',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  filterInput: {},
}));
