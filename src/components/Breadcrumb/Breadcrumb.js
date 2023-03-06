import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Breadcrumb = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  const path = location.pathname.slice(1);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" to={location.pathname}>
        {path}
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
