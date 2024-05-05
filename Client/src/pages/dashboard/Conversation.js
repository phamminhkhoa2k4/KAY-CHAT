
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ChatFooter,ChatHeader } from "../../components/Chat";

const Conversation = () => {
    const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:theme.palette.mode === "light" ? "#FFF" : theme.palette.background.default,
        }}
      >
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
          {/* Chat Header */}
          <ChatHeader/>
          {/* MSG */}
          <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
          {/* Chat Footer */}
          <ChatFooter/>

        </Stack>
      </Box>
    </>
  );
};

export default Conversation;
