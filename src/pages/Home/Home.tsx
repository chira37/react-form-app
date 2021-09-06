import { Button, Container, Paper, TextField } from "@material-ui/core";
import { useFormik } from "formik";
import PriceInput from "../../components/PriceInput";
import { validationSchema } from "./schema";
import logo from "../../images/logo.png";
import "./Home.css";

const Home = () => {
    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            nic: "",
            phone: "",
            amount: 0,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    });

    return (
        <Container maxWidth="xs" className="home-wrapper">
            <Paper className="form-wrapper">
                <div className="form-logo-container">
                    <img className="form-logo" src={logo} alt="company-logo" />
                </div>
                <form className="form-content" onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        id="name"
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleChange}
                        error={touched.name && Boolean(errors.name)}
                        helperText={touched.name && errors.name}
                        InputLabelProps={{ shrink: true }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        id="email"
                        name="email"
                        label="Email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        InputLabelProps={{ shrink: true }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        id="nic"
                        name="nic"
                        label="NIC"
                        value={values.nic}
                        onChange={handleChange}
                        error={touched.nic && Boolean(errors.nic)}
                        helperText={touched.nic && errors.nic}
                        InputLabelProps={{ shrink: true }}
                    />

                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        id="phone"
                        name="phone"
                        label="Phone"
                        value={values.phone}
                        onChange={handleChange}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        InputLabelProps={{ shrink: true }}
                    />

                    <PriceInput
                        label="Amount"
                        error={touched.amount && Boolean(errors.amount)}
                        helperText={touched.amount && errors.amount}
                        onChange={(value) => handleChange({ target: { name: "amount", value: value } })}
                    />

                    <Button color="primary" variant="contained" fullWidth type="submit" disableElevation>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default Home;
