import {Alert, Box, Collapse, IconButton} from '@mui/material';
import {GridCloseIcon} from '@mui/x-data-grid';

export default function CustomAlert({isAlert, setIsAlert, message}) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 10,
        left: 0,
        zIndex: 1111,
        width: '100%'
      }}
    >
      <Collapse in={isAlert}>
        <Alert
          action={
            <IconButton
              aria-label='close'
              color='inherit'
              onClick={() => {
                setIsAlert(false);
              }}
            >
              <GridCloseIcon />
            </IconButton>
          }
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
