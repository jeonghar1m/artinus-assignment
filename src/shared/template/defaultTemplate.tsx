import { Button, Heading, Link } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { Header } from "./defaultTemplate.style";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { DocumentTitle } from "../ui";
import { useLocation } from "react-router-dom";

interface DefaultTemplateProps {
  title?: string;
  enableDocumentTitle?: boolean;
  documentTitle?: string;
  prevHref?: string;
  onClickPrev?: () => void;
  children: ReactNode;
}

const DefaultTemplate = ({
  title,
  enableDocumentTitle = true,
  prevHref,
  onClickPrev,
  children,
}: DefaultTemplateProps) => {
  const { pathname } = useLocation();

  const isPurchaseRoute = pathname.startsWith("/purchase");

  return (
    <>
      {enableDocumentTitle && <DocumentTitle>{title}</DocumentTitle>}
      {title && (
        <Header>
          {(prevHref || onClickPrev) && (
            <Link
              className="prev-button"
              href={prevHref}
              asChild={!!onClickPrev}
            >
              <ChevronLeftIcon width={24} height={24} onClick={onClickPrev} />
            </Link>
          )}
          <Heading mb="10px" size="4" align="center">
            {title}
          </Heading>
          {!isPurchaseRoute && (
            <Button className="cart-button" asChild>
              <Link href="/purchase">🛒</Link>
            </Button>
          )}
        </Header>
      )}
      {children}
    </>
  );
};

export default DefaultTemplate;
