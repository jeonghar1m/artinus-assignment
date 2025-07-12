import { Heading, Link } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Header } from "./defaultTemplate.style";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

interface DefaultTemplateProps {
  title?: string;
  prevHref?: string;
  children: ReactNode;
}

const DefaultTemplate = ({
  title,
  prevHref,
  children,
}: DefaultTemplateProps) => {
  return (
    <>
      {title && (
        <Header>
          {prevHref && (
            <Link href={prevHref}>
              <ChevronLeftIcon width={24} height={24} />
            </Link>
          )}
          <Heading mb="10px" size="4" align="center">
            {title}
          </Heading>
        </Header>
      )}
      {children}
    </>
  );
};

export default DefaultTemplate;
