import { Box, Typography, Container, Link } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box textAlign="center" sx={{ mb: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontFamily: 'Georgia, serif',
            fontWeight: 'bold',
            color: '#FFF',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '30px',
            background: '#2196F3',
            borderRadius: '15px',
          }}
        >
          About TastyTales
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Discover the story behind our recipe app.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          At TastyTales, our mission is to make cooking fun, easy, and
          accessible for everyone. Whether you&apos;re a seasoned chef or a
          beginner in the kitchen, we provide a wide range of recipes from
          around the world to inspire your culinary journey.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Who We Are
        </Typography>
        <Typography variant="body1" paragraph>
          We are a passionate team of food enthusiasts, developers, and
          designers who believe that good food brings people together. Our goal
          is to create a platform where users can explore, share, and enjoy
          delicious recipes.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Features
        </Typography>
        <Typography variant="body1" paragraph>
          - **Explore Recipes**: Browse thousands of recipes from various
          cuisines. - **Search by Category**: Find recipes based on categories
          like Breakfast, Dessert, Vegan, and more. - **Random Meals**: Get
          inspired with randomly selected recipes. - **Save Favorites**: Save
          your favorite recipes for quick access.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or feedback? We&apos;d love to hear from you! Reach out
          to us at{' '}
          <Link href="mailto:support@tastytales.com" color="primary">
            support@tastytales.com
          </Link>
          .
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Follow Us
        </Typography>
        <Typography variant="body1" paragraph>
          Stay connected with us on social media for the latest updates,
          recipes, and more:
        </Typography>
        <Box>
          <Link
            href="https://facebook.com/tastytales"
            target="_blank"
            rel="noopener"
            color="primary"
            sx={{ mr: 2 }}
          >
            Facebook
          </Link>
          <Link
            href="https://twitter.com/tastytales"
            target="_blank"
            rel="noopener"
            color="primary"
            sx={{ mr: 2 }}
          >
            Twitter
          </Link>
          <Link
            href="https://instagram.com/tastytales"
            target="_blank"
            rel="noopener"
            color="primary"
          >
            Instagram
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
