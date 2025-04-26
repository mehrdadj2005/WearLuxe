"use client";

import { dataFilter } from "@/config/productDatailsFilter";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Container from "../container";

export default function ProductDetailsFilter({
  showDrawerFilter,
}: {
  showDrawerFilter: boolean;
}) {
  const [value, setValue] = useState<number[]>([0, 2000000]);
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

  const handleChange = (_: Event, newValue: number[]) => {
    setValue(newValue);
  };

  useEffect(() => {
    setOpenFilterDrawer(showDrawerFilter);
  }, [showDrawerFilter]);

  const toggleDrawerFilter = (open: boolean) => setOpenFilterDrawer(open);

  return (
    <Box className="flex">
      <Box className="w-full hidden xl:flex flex-col py-2">
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
            <Typography variant="overline" className="!text-[16px]">
              قیمت
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box className="flex gap-2 mb-4">
              <Box>
                <Typography>از</Typography>
                <TextField
                  variant="outlined"
                  dir="ltr"
                  value={(2000000 - value[1]).toLocaleString()}
                />
              </Box>
              <Box>
                <Typography>تا</Typography>
                <TextField
                  variant="outlined"
                  dir="ltr"
                  value={(2000000 - value[0]).toLocaleString()}
                />
              </Box>
            </Box>
            <Box className="flex items-center justify-between">
              <Typography variant="overline" className="!text-xs">
                حداقل
              </Typography>
              <Slider
                className="!w-8/12 !text-primary-400"
                value={value}
                onChange={handleChange}
                step={50000}
                min={0}
                max={2000000}
              />
              <Typography variant="overline" className="!text-xs">
                حداکثر
              </Typography>
            </Box>
          </AccordionDetails>
        </Accordion>

        {Object.entries(dataFilter).map(([key, { title, filters }]) => (
          <Accordion key={key} className="mt-2">
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <Typography variant="overline" className="!text-[16px]">
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {filters.map(({ id, name }) => (
                <FormGroup key={id}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={name}
                    className="flex flex-row-reverse justify-between"
                  />
                </FormGroup>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Drawer
        role="presentation"
        anchor="right"
        open={openFilterDrawer}
        onClose={() => toggleDrawerFilter(false)}
        classes={{ paper: "!w-[90%]" }}
      >
        <Container className="py-4">
          <Box className="flex w-full justify-start">
            <Button variant="text" onClick={() => setOpenFilterDrawer(false)}>
              {<CloseIcon className="text-neutral-800" />}
            </Button>
          </Box>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
              <Typography variant="overline" className="!text-[16px]">
                قیمت
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box className="flex gap-4 mb-4">
                <Box>
                  <Typography>از</Typography>
                  <TextField
                    variant="outlined"
                    dir="ltr"
                    value={(2000000 - value[1]).toLocaleString()}
                  />
                </Box>
                <Box>
                  <Typography>تا</Typography>
                  <TextField
                    variant="outlined"
                    dir="ltr"
                    value={(2000000 - value[0]).toLocaleString()}
                  />
                </Box>
              </Box>
              <Box className="flex items-center justify-between">
                <Typography variant="overline" className="!text-xs !pl-4">
                  حداقل
                </Typography>
                <Slider
                  className="!w-full !text-primary-400"
                  value={value}
                  onChange={handleChange}
                  step={50000}
                  min={0}
                  max={2000000}
                />
                <Typography variant="overline" className="!text-xs !pr-4">
                  حداکثر
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          {Object.entries(dataFilter).map(([key, { title, filters }]) => (
            <Accordion key={key} className="mt-2">
              <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
                <Typography variant="overline" className="!text-[16px]">
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {filters.map(({ id, name }) => (
                  <FormGroup key={id}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label={name}
                      className="flex flex-row-reverse justify-between"
                    />
                  </FormGroup>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Drawer>
    </Box>
  );
}
