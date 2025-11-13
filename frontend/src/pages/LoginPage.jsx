import { useState } from "react";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, Typography, CircularProgress, Paper } from "@mui/material";
import MessageBox from "../components/MessageBox.jsx";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    setMessage(null);
    // Simulate login feedback
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (data.email === "test@example.com" && data.password === "password123") {
      setMessage({ type: "success", text: "Đăng nhập thành công!" });
      // Simulate redirection or further logic here
    } else {
      setMessage({ type: "danger", text: "Email hoặc mật khẩu không đúng." });
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <Paper elevation={4} sx={{ p: 4, minWidth: 350, maxWidth: 400 }}>
        <Typography variant="h5" align="center" gutterBottom fontWeight={700}>
          Đăng nhập
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
            autoComplete="current-password"
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
            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : "Đăng nhập"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
