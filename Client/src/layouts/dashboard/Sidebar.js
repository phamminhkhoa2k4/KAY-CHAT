import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/index";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import AntSwitch from "../../components/AntSwitch";
import useSettings from "../../hooks/useSettings";

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack alignItems={"center"} spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.info.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img
                style={{ height: "100%" }}
                src={Logo}
                alt={"Logo App Chat"}
              />
            </Box>
            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems={"center"}
              spacing={3}
            >
              {Nav_Buttons.map((item) =>
                item.index === selected ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.info.main,
                      borderRadius: 1.5,
                    }}
                  >
                    <IconButton
                      sx={{
                        width: "max-content",
                        color: "#FFF",
                      }}
                      key={item.index}
                    >
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => setSelected(item.index)}
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#000" : "#FFF",
                    }}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.info.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{
                      width: "max-content",
                      color: "#FFF",
                    }}
                  >
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton onClick={() => setSelected(3)}>
                  <Gear />
                </IconButton>
              )}
            </Stack>
          </Stack>
          {/* Switch */}
          <Stack spacing={4}>
            <AntSwitch onChange={() => onToggleMode()} defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Sidebar;
