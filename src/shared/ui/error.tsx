import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Container } from "./error.style";
import { Heading, Text } from "@radix-ui/themes";
import { ReturnHomeButton } from "../button";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <Container direction="column" gap="10" align="center">
      <ExclamationTriangleIcon width={100} height={100} color="red" />
      <Heading size="7">Error! 다음 이유로 오류가 발생했습니다.</Heading>
      <Text size="5">
        {error.name}: {error.message}
      </Text>
      <ReturnHomeButton />
    </Container>
  );
};

export default Error;
