import { Spinner, Text } from "@radix-ui/themes";
import { Container } from "./loading.style";

interface LoadingProps {
  message: string;
}

const SIZE = "3";

const Loading = ({ message }: LoadingProps) => {
  return (
    <Container direction="column" gap="20px" align="center" width="100%">
      <Spinner size={SIZE} />
      <Text size={SIZE}>{message}</Text>
    </Container>
  );
};

export default Loading;
