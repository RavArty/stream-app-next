import { Container, Typography, Box, Button } from '@material-ui/core';
import Link from 'next/link';

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          hello world
        </Typography>
        <Link href="/index">
          <Button variant="contained" color="primary">
            Go to the Index page
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;
