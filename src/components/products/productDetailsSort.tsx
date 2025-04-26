import { dataSort } from "@/config/productDatailsFilter";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Drawer,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Container from "../container";
import SwitchButton from "../SwitchButton";

export default function ProductDetailsSort({
  showDarwerSort,
}: {
  showDarwerSort: boolean;
}) {
  const [openSortDrawer, setOpenSortDrawer] = useState(false);
  const [select, setSelect] = useState(123129);
  const [selectSort, setSelectSort] = useState(123129);

  useEffect(() => {
    setOpenSortDrawer(showDarwerSort);
  }, [showDarwerSort]);

  const toggleDrawerSort = (open: boolean) => setOpenSortDrawer(open);

  return (
    <Box>
      <Box className="xl:flex hidden h-14 px-4 justify-between items-center">
        <Box className="flex items-center gap-2">
          <Typography variant="h6" className="!h-fit !text-base">
            {dataSort.title}
          </Typography>
          {dataSort.filters.map((item) => (
            <Button
              key={item.id}
              variant="text"
              className={`!text-neutral-800 !border !border-neutral-200 hover:!border-neutral-300 hover:!bg-secondary-200 ${
                selectSort == item.id &&
                "!bg-secondary-200 !shadow-neutral-900 shadow-2xl"
              }`}
              onClick={() => setSelectSort(item.id)}
              size="small"
            >
              {item.name}
            </Button>
          ))}
        </Box>
        <Box className="flex items-center">
          <SwitchButton label=":فقط کالاهای موجود" />
        </Box>
      </Box>

      <Drawer
        role="presentation"
        anchor="right"
        open={openSortDrawer}
        onClose={() => toggleDrawerSort(false)}
        onClick={() => {
          setTimeout(() => {
            toggleDrawerSort(false);
          }, 500);
        }}
        classes={{ paper: "w-[70%] sm:w-[40%]" }}
        className="xl:hidden flex"
      >
        <Container className="py-4">
          <Box className="flex w-full justify-start">
            <Button variant="text">
              {<CloseIcon className="text-neutral-800" />}
            </Button>
          </Box>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            {dataSort.filters.map((item) => (
              <Box
                key={item.id}
                className="p-1 pr-0"
                onClick={() => setSelect(item.id)}
              >
                <FormControlLabel
                  defaultChecked={select == item.id}
                  checked={select == item.id}
                  control={
                    <Radio
                      className={select == item.id ? "!text-secondary-400" : ""}
                    />
                  }
                  label={item.name}
                  dir="ltr"
                  className="flex justify-between w-full"
                />
              </Box>
            ))}
          </RadioGroup>
        </Container>
      </Drawer>
    </Box>
  );
}
