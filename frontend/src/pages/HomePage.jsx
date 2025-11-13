import { Typography, Box, Paper } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh" }}>
      <Paper elevation={4} sx={{ p: 4, minWidth: 350, maxWidth: 400 }}>
        <Typography variant="h4" align="center" fontWeight={700}>
          Chào mừng đến với Simple Registration!
        </Typography>
        <Typography align="center" sx={{ mt: 2 }}>
          Đây là trang chủ demo.
        </Typography>
      </Paper>
    </Box>
  );
}
