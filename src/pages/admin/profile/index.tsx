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
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import * as yup from "yup";
import Header from "../../../components/Header";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("invalid email").required("Required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  address1: yup.string().required("Required"),
  address2: yup.string().required("Required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

interface IForm {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}

interface IUserInfo {
  file: any;
  filepreview: string | null;
}

const AdminProfile = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [userInfo, setuserInfo] = useState<IUserInfo>({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target.files && event.target.files[0]) {
      setuserInfo({
        ...userInfo,
        file: event.target.files[0],
        filepreview: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  const handleFormSubmit = (values: IForm) => {
    console.log(values);
  };
  return (
    <Box>
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card>
            <CardContent>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {userInfo.filepreview !== null ? (
                  <Avatar
                    src={userInfo.filepreview}
                    sx={{
                      height: 80,
                      mb: 2,
                      width: 80,
                    }}
                  />
                ) : null}

                <Typography gutterBottom fontSize='20px' fontWeight='700'>
                  Anika Visser
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  Los Angeles
                </Typography>
              </Box>
            </CardContent>
            <Divider />
            <CardActions>
              <label
                htmlFor="test"
                style={{
                  width: "100%",
                  background: isHovered ? "rgb(94, 53, 177)" : "#fff",
                  borderRadius: "10px",
                  color: isHovered ? "#fff": "#000",
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "8px 0px",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Upload picture
              </label>
              <input
                id="test"
                type="file"
                hidden
                onChange={(e) => handleInputChange(e)}
              />
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <form autoComplete="off" noValidate>
            <Card>
              <Typography sx={{ fontSize: "20px", m: "15px" }}>
                Profile
              </Typography>
              <CardContent>
                <Box sx={{ mb: 1 }}>
                  <Grid item container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        helperText="Please specify the first name"
                        label="First name"
                        name="firstName"
                        required
                        value="Anika"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Last name"
                        name="lastName"
                        required
                        value="Visser"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        required
                        value="demo@devias.io"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        type="number"
                        value="0987212912"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Country"
                        name="country"
                        required
                        value="USA"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        fullWidth
                        label="Select State"
                        name="state"
                      ></TextField>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
              <Divider />
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button variant="contained" sx={{bgcolor: 'rgb(94, 53, 177)'}}>Save details</Button>
              </CardActions>
            </Card>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminProfile;
