import { Box, Typography, Grid, Link } from '@mui/material';
import cooking from '../assets/images/cooking64.png';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2C3E50',
        color: '#ECF0F1',
        padding: '40px 20px',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <img
              src={cooking}
              alt="logo"
              style={{ width: '64px', height: '41px' }}
            />
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              TastyTales
            </Typography>
          </Box>
          <Typography variant="body2">
            Your ultimate recipe destination. Discover delicious recipes from
            around the world.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email: info@tastytales.com</Typography>
          <Typography variant="body2">
            Phone: +962 78 234 5678
            <Link href="tel:+962782345678" color="inherit" underline="hover">
              {' '}
              (Call Us)
            </Link>
          </Typography>
          <Typography variant="body2">
            Address: 123 Recipe St, Food City, FC 12345
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Suggestions
          </Typography>
          <Typography variant="body2">
            We value your feedback! Share your suggestions with us:
          </Typography>
          <Link
            href="mailto:suggestions@tastytales.com"
            color="inherit"
            underline="hover"
          >
            suggestions@tastytales.com
          </Link>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #555',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} TastyTales. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
