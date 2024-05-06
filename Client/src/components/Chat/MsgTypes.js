import { Box, Divider, IconButton, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DownloadSimple, Image } from "phosphor-react";
const TimeLine = ({ text }) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Divider width="46%" />
        <Typography>{text}</Typography>
        <Divider width="46%" />
      </Stack>
    </>
  );
};

const TextMsg = ({ msg }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={msg.incoming ? "start" : "end"}
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor: msg.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: "max-content",
            borderRadius: 1.5,
          }}
        >
          <Typography
            variant="body2"
            color={msg.incoming ? theme.palette.text : "#FFF"}
          >
            {msg.message}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

const MediaMsg = ({ msg }) => {
  const theme = useTheme();
  console.log();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={msg.incoming ? "start" : "end"}
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor: msg.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: "max-content",
            borderRadius: 1.5,
          }}
        >
          <Stack
            spacing={1}
            p={2}
            backgroundColor={theme.palette.background.paper}
            borderRadius={1}
          >
            <img
              src={msg.img}
              alt={msg.message}
              style={{ maxHeight: 210, borderRadius: "10px" }}
            />
            <Typography
              variant="body2"
              color={msg.incoming ? theme.palette.text : "#FFF"}
            >
              {msg.message}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

const ReplyMsg = ({ msg }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={msg.incoming ? "start" : "end"}
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor: msg.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: "max-content",
            borderRadius: 1.5,
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              direction="column"
              spacing={3}
              alignItems={"center"}
              sx={{
                background: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" color={theme.palette.text}>
                {msg.message}
              </Typography>
            </Stack>
            <Typography
              variant="body2"
              color={msg.incoming ? theme.palette.text : "#FFF"}
            >
              {msg.message}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

const LinkMsg = ({ msg }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={msg.incoming ? "start" : "end"}
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor: msg.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: "max-content",
            borderRadius: 1.5,
          }}
        >
          <Stack spacing={2}>
            <Stack
              p={2}
              spacing={3}
              justifyContent={"center"}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1,
              }}
            >
              <img
                src={msg.preview}
                alt={msg.message}
                style={{ maxHeight: 210, borderRadius: "10px" }}
              />
              <Stack spacing={2}>
                <Typography variant="subtitle2">This is Chat</Typography>
                <Typography
                  variant="subtitle2"
                  sx={{color:theme.palette.primary.main}}
                  component={Link}
                  to={"https://www.youtube.com"}
                >
                  www.youtube.com
                </Typography>
              </Stack>
              <Typography variant="body2" color={msg.incoming ? theme.palette.text : "#FFF"}>{msg.message}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

const DocMsg = ({ msg }) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={msg.incoming ? "start" : "end"}
      >
        <Box
          p={1.5}
          sx={{
            backgroundColor: msg.incoming
              ? theme.palette.background.default
              : theme.palette.primary.main,
            width: "max-content",
            borderRadius: 1.5,
          }}
        >
          <Stack
            p={2}
            spacing={2}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 1,
            }}
          >
            <Stack direction={"row"} spacing={3} alignItems={"center"}>
              <Image size={48} />
              <Typography variant="caption">Image.png</Typography>
              <IconButton>
                <DownloadSimple />
              </IconButton>
            </Stack>
            <Typography
              variant="body2"
              sx={{ color: msg.incoming ? theme.palette.text : "#FFF" }}
            >
              {msg.message}
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};
export { TimeLine, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };
