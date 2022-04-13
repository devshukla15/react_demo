import {
  Box,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
} from "@material-ui/core"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "pink" }}>
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography>Questions? Call 007-803-321-2130</Typography>

        <Box>
          <Grid container spacing={4}>
            <Grid item xs={6} md={3}>
              <ul>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    FAQ
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Investor Relations
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Privacy
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Speed Test
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={3}>
              <ul>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Help Center
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Jobs
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Cookie Preferences
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Legal Notices
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={3}>
              <ul>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Account
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Ways to Watch
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Corporate Information
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Only on Netflix
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={6} md={3}>
              <ul>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Media Center
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Terms of Use
                  </Typography>
                </li>
                <li>
                  <Typography variant="caption" component="a" href="#">
                    Contact Us
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
