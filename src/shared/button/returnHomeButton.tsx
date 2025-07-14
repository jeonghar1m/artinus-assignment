import { Button, Link } from "@radix-ui/themes";

const ReturnHomeButton = () => {
  return (
    <Button asChild>
      <Link href="/">홈으로 돌아가기</Link>
    </Button>
  );
};

export default ReturnHomeButton;
