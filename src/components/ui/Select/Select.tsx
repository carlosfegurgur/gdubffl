import { Select } from "radix-ui";
import styles from "./Select.module.css";
import { Owner } from "@/lib/types";
import { SetStateAction } from "react";
import { Dispatch } from "react";

export const SelectComponent = ({
  owners,
  onChange,
}: {
  owners: Array<Owner>;
  onChange: Dispatch<SetStateAction<string>>;
}) => (
  <Select.Root onValueChange={(e) => onChange(e)}>
    <Select.Trigger className={styles.Trigger}>
      <Select.Value placeholder="Select an owner..." />
      <Select.Icon className={styles.Icon}>{">"}</Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content position="popper" sideOffset={5} className={styles.Content}>
        <Select.Viewport className={styles.Viewport}>
          <Select.Group>
            {owners.map((owner) => (
              <Select.Item
                value={owner.name}
                className={styles.Item}
                key={owner.id}
              >
                <Select.ItemText>{owner.name}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);
