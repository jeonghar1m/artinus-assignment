import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Container } from "./error.style";
import { Button, Heading, Link, Text } from "@radix-ui/themes";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  console.log(error.message);
  return (
    <Container direction="column" gap="10" align="center">
      <ExclamationTriangleIcon width={100} height={100} color="red" />
      <Heading size="7">Error! 다음 이유로 오류가 발생했습니다.</Heading>
      <Text size="5">
        {error.name}: {error.message}
      </Text>
      <Button asChild>
        <Link href="/">홈으로 돌아가기</Link>
      </Button>
    </Container>
  );
};

export default Error;
