import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";

const navigationLinks = [
  { path: "/", label: "Trang chủ" },
  { path: "/login", label: "Đăng nhập" },
  { path: "/register", label: "Đăng ký" },
];

export default function NavigationButtons({ excludePaths = [] }) {
  const navigate = useNavigate();

  const filteredLinks = navigationLinks.filter(
    (link) => !excludePaths.includes(link.path)
  );

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent: "center",
        flexWrap: "wrap",
        mt: 3,
      }}
    >
      {filteredLinks.map((link) => (
        <Button
          key={link.path}
          variant="outlined"
          color="primary"
          onClick={() => navigate(link.path)}
          sx={{
            textTransform: "none",
            fontSize: { xs: "0.875rem", sm: "1rem" },
            px: { xs: 2, sm: 3 },
            py: { xs: 0.75, sm: 1 },
          }}
        >
          {link.label}
        </Button>
      ))}
    </Box>
  );
}
