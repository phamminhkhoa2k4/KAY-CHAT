import { Box, Stack } from "@mui/material";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from "./MsgTypes";

const Message = () => {
  return (
    <>
      <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((item) => {
                switch(item.type) {
                    case "divider":
                    // Time Line
                    return <TimeLine text={item.text} />;
                    case "msg":
                     switch (item.subtype) {
                       case "img":
                       // Img msg
                       return  <MediaMsg msg={item}/>
                       case "doc":
                       // Doc msg
                         return <DocMsg msg={item}/>
                       case "link":
                       // Link msg
                     return <LinkMsg msg={item} />
                       case "reply":
                       // Reply msg
                        return <ReplyMsg msg={item} />                  

                       default:
                         return <TextMsg  msg={item}/>
                     }
                    default: 
                    
                    break;
                }
            })}
        </Stack>
      </Box>
    </>
  );
};

export default Message;
