import * as yup from "yup";

export const validationSchema = yup.object({
    name: yup.string().max(20).required("Name is required"),
    email: yup.string().email("Email is not valid").required("Email is required"),
    nic: yup
        .string()
        .matches(/^([0-9]{9}v|[0-9]{12})$/, { message: "NIC number is not valid" })
        .required("NIC is required"),
    phone: yup
        .string()
        .required("Phone no is required")
        .test("len", "Phone no must be exactly 10 numbers", (val) => val?.length === 10),
    amount: yup.number().min(10, "Minimum amount is 10 Rs").max(10000, "Maximum amount is 10000 Rs").required("Amount is required"),
});
