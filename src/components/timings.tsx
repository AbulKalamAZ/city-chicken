import { days, pause } from "@/data/timing";
import DoorFrontIcon from "@mui/icons-material/DoorFront";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { Box, Grid, Typography } from "@mui/material";
const Timings = () => {
  return (
    <Box>
      <Box>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#3B3A4A ",
            fontSize: "32px",
            fontWeight: 400,
            fontFamily: "Contrail One !important",
          }}
        >
          Öffnungszeiten
        </Typography>
        <Typography sx={{ color: "#838383", mb: 5 }}>
          Wir haben zu folgenden Uhrzeiten <br /> für Sie geöffnet.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              className="relative overflow-x-hidden"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <table
                style={{ fontFamily: "Inter", fontSize: "12px" }}
                className=" text-sm text-left  dark:text-gray-400"
              >
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr className="border-b">
                    <th scope="col" className="pr-6 py-3">
                      Ladenzeiten
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <MeetingRoomIcon />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <DoorFrontIcon />
                    </th>
                  </tr>
                </thead>
                {days?.map((day, index) => (
                  <tbody key={index}>
                    <tr className="bg-[#fafafa] border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="px-r py-4"> {day.name}</td>
                      <td className="px-6 py-4">{day.openTime}</td>
                      <td className="px-6 py-4">{day.closeTime}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              className="relative overflow-x-hidden"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <table
                style={{ fontFamily: "Inter", fontSize: "12px" }}
                className=" text-sm text-left  dark:text-gray-400"
              >
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr className="border-b">
                    <th
                      scope="col"
                      style={{ fontFamily: "Inter" }}
                      className="pr-6 py-3"
                    >
                      Pausenzieten
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <PauseIcon />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <PlayArrowIcon />
                    </th>
                  </tr>
                </thead>
                {pause?.map((day, index) => (
                  <tbody key={index}>
                    <tr className="bg-[#fafafa] border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="pr-6 py-4"> {day.name}</td>
                      <td className="px-6 py-4">{day.openTime}</td>
                      <td className="px-6 py-4">{day.closeTime}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              className="relative overflow-x-hidden"
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                alignItems: "center",
              }}
            >
              <table
                style={{ fontFamily: "Inter", fontSize: "12px" }}
                className=" text-sm text-left  dark:text-gray-400"
              >
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr className="border-b">
                    <th scope="col" className="pr-6 py-3">
                      Kuchenzeiten
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <WhatshotIcon />
                    </th>
                    <th scope="col" className="px-6 py-3">
                      <LocalFireDepartmentIcon />
                    </th>
                  </tr>
                </thead>
                {days?.map((day, index) => (
                  <tbody key={index}>
                    <tr className="bg-[#fafafa] border-b dark:bg-gray-800 dark:border-gray-700">
                      <td className="pr-6 py-4"> {day.name}</td>
                      <td className="px-6 py-4">{day.openTime}</td>
                      <td className="px-6 py-4">{day.closeTime}</td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Timings;
