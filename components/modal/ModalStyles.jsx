import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  // Prevent page scrolling when modal is open
  "@global": {
    body: {
      overflow: "hidden"
    }
  },

  // Modal wrapper
  modalOverlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    padding: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "9999",
    opacity: 1,
    animation: "$show .5s ease",
    overflowX: "hidden",
    overflowY: "auto"
  },

  // Fade in open animation
  "@keyframes show": {
    "0%": {
      display: "none",
      opacity: 0
    },
    "1%": {
      display: "flex",
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },

  // Modal itself
  modal: {
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.2)"],
    position: "relative",
    padding: "1.5rem",
    borderRadius: '4px',
    "@media (min-width: 576px)": {
      width: "42rem"
    },

    "& p:last-of-type": {
      marginBottom: 0
    }
  },

  // Close button
  closeButton: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    right: 0,
    backgroundColor: "#34363a",
    width: "2.5rem",
    height: "2.5rem",
    padding: 0,
    border: 0,
    cursor: "pointer",
    outline: 0,
    boxShadow: [0, 0, "0.625rem", "rgba(0, 0, 0, 0.1)"],

    "&:hover": {
      backgroundColor: "#424f63"
    },

    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "1.2rem",
      left: "0.25rem",
      width: "2rem",
      height: "0.1rem",
      backgroundColor: "#fff"
    },

    "&:before": {
      transform: "rotate(45deg)"
    },

    "&:after": {
      transform: "rotate(-45deg)"
    }
  }
});

export default useStyles;
