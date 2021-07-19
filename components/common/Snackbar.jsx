import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const SimpleSnackbar = ({ retultMessage, durationProps }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [duration, setDuration] = useState(2000);

  function closeSnackbar(reason) {
    if (reason === "clickaway") return;
    setOpen(false);
  }
  useEffect(() => {
    setOpen(true);
    setMessage(retultMessage);
    setDuration(durationProps);
  }, []);

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={duration} // 2초동안 나타남
        onClose={closeSnackbar}
        message={message}
        action={
          <>
            <Button color="primary" size="small" onClick={closeSnackbar}>
              닫기
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={closeSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      />
    </div>
  );
};

export default SimpleSnackbar;
