import React, { useState } from "react";
import { Button, Group, Modal } from "@mantine/core";
import { StatusButton } from "@component/button/StatusButton";

export const ComfirmPaidModal = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        Modal without header, press escape or click on overlay to close
      </Modal>
      <Group position="center">
        <StatusButton
          title="Draft"
          onClick={() => setOpened(true)}
          modalFlag={false}
        />
      </Group>
    </div>
  );
};
