import { Card, Select, SelectItem } from "@nextui-org/react";
import { icons } from "./icons";

export const IconSelector = () => {
  return (
    <Select size="sm" aria-label="select icon">
      {icons.map((icon, index) => (
        <SelectItem key={icon.key} startContent={icon.component}>
          {icon.key}
        </SelectItem>
      ))}
    </Select>
  );
};
