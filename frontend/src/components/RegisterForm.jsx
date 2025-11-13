
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../services/api.js";
import MessageBox from "./MessageBox.jsx";
import { Box, TextField, Button, Typography, CircularProgress, Paper } from "@mui/material";



export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [message, setMessage] = useState(null);
  const onSubmit = async (data) => {
    setMessage(null);
    try {
      const res = await registerUser(data);
      setMessage({ type: "success", text: res.message });
      reset();
    } catch (err) {
      const msg = err.response?.data?.message || "Đã xảy ra lỗi không mong muốn.";
      setMessage({ type: "danger", text: msg });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <Paper elevation={4} sx={{ p: 4, minWidth: 350, maxWidth: 400 }}>
        <Typography variant="h5" align="center" gutterBottom fontWeight={700}>
          Đăng ký tài khoản
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            {...register("email", {
              required: "Email là bắt buộc.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Email không hợp lệ."
              }
            })}
            type="email"
            fullWidth
            margin="normal"
            autoComplete="email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Mật khẩu"
            {...register("password", {
              required: "Mật khẩu là bắt buộc.",
              minLength: {
                value: 6,
                message: "Mật khẩu phải có ít nhất 6 ký tự."
              }
            })}
            type="password"
            fullWidth
            margin="normal"
            autoComplete="new-password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {message && (
            <Box mt={2} mb={1}>
              <MessageBox type={message.type} text={message.text} />
            </Box>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={isSubmitting}
            size="large"
            sx={{ mt: 2, fontWeight: 600 }}
          >
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Đăng ký"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
