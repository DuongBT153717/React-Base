import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    TextField,
    Typography
  } from "@mui/material";
import Header from '../../../components/Header';
const AdminChanagePassword = () => {
  return (
    <Box>
      

      <Grid container>
        <Grid item xs={12}>
        
          <form autoComplete="off" noValidate>
            <Card>
              <CardContent>
              <Header title="Change Password" subtitle="Update Password" />
                <Box sx={{ mb: 1 }}>
                  <Grid item container spacing={3}>
                    <Grid item xs={7}>
                      <TextField
                        fullWidth
                        label="Old Password"
                        name="oldPassword"
                        required
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <TextField
                        fullWidth
                        label="New Password"
                        name="newPassword"
                        required
                      />
                    </Grid>
                    <Grid item xs={7}>
                      <TextField
                        fullWidth
                        label="Confirm New Password"
                        name="confirmPassword"
                        required
                      />
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: "flex-end", py: '10px' }}>
                <Button variant="contained" sx={{bgcolor: 'rgb(94, 53, 177)'}}>Lưu</Button>
              </CardActions>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AdminChanagePassword