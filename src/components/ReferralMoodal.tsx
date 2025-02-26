import { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import toast from 'react-hot-toast';
import axios from 'axios'

const FormModal = () => {
  const [open, setOpen] = useState(false);
  const [disable,setDisable] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referralCode: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true)
    try{
      const req = await axios.post(`${process.env.URL}`, formData);
      console.log(req)
      toast("\u2714 Referral confirmation request sent successfully.")
      handleClose()
    }catch (error) {
      toast("Try again later.")
      console.log(error)
    }finally{
    setDisable(false)
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Button
        color="white"
        onClick={handleOpen}
      >
        <p className="inline-flex w-[100px]">Refer Now</p>
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          className="bg-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-20"
          sx={{ outline: "none" }}
        >
          <Typography variant="h6" className="mb-4 text-center">
            Contact Form
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4 flex flex-col gap-4">
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="ReferralCode"
              name="referralCode"
              variant="outlined"
              fullWidth
              value={formData.referralCode}
              onChange={handleChange}
              required
            />
            <div className="flex justify-end gap-2">
              <Button
              disabled={disable}
              onClick={handleClose} className="text-gray-600">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={disable}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default FormModal;
