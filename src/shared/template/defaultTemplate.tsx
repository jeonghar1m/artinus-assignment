import { Heading, Link } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Header } from "./defaultTemplate.style";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { DocumentTitle } from "../ui";

interface DefaultTemplateProps {
  title?: string;
  enableDocumentTitle?: boolean;
  documentTitle?: string;
  prevHref?: string;
  children: ReactNode;
}

const DefaultTemplate = ({
  title,
  enableDocumentTitle = true,
  prevHref,
  children,
}: DefaultTemplateProps) => {
  return (
    <>
      {enableDocumentTitle && <DocumentTitle>{title}</DocumentTitle>}
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
