import React from "react";
import Chats from "./Chats";
import { Stack } from "@mui/material";
import Conversation from "./Conversation";

const GeneralApp = () => {

  return (
    <Stack direction={"row"} sx={{width:"100%"}}>
      {/* Chats */}
      <Chats />
      {/* conversation */}
      <Conversation/>
    </Stack>
  );
};

export default GeneralApp;
