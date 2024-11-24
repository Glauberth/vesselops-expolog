import { Icon, Stack } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <Stack
      direction="row"
      mx="8"
      spacing={["6", "8"]}
      pr={["6", "8"]}
      py={["6", "8"]}
      color="gray.300"
      borderRightWidth={3}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </Stack>
  );
}
