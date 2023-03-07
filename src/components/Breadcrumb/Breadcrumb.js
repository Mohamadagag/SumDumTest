import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, useNavigate } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {pathnames.length ? (
          <Link onClick={() => navigate("/")}>Home</Link>
        ) : (
          <Typography> Home </Typography>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <Typography key={name}>{name}</Typography>
          ) : (
            <Link key={name} onClick={() => navigate(routeTo)}>
              {name}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
