import { Stack } from "@mui/material";
import { leftCard } from "../../../../services/raw_data";
import LeftCard from "./LeftCard";

const LeftSide = () => {
  return (
    <Stack
      spacing={-1}
      display={"flex"}
      mt={"60px"}
      direction={{ xs: "column", sm: "column", md: "column", lg: "column" }}
      justifyContent="center"
    >
      {leftCard.map((item, index) => (
        <LeftCard
          key={index}
          title={item.title}
          num={item.num}
          sugest={item.sugest}
          avg={item.avg}
          index={index}
        />
      ))}
    </Stack>
  );
};

export default LeftSide;
