import React from "react";
import { Box, ThemeContext } from "grommet";
import { useTheme } from "styled-components";
import { gridStyle } from "../../assets/theme/customStyle";
import { Card } from "../lab/components/Card";
import { ComponentWrapper } from "../shared/ComponentWrapper";

function ComponentsMainComponent() {
  const dark = useTheme(ThemeContext).dark;

  return (
    <Box style={gridStyle(dark)}>
      <ComponentWrapper name="Card">
        <Card />
      </ComponentWrapper>
    </Box>
  );
}

export default ComponentsMainComponent;
