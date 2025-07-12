import { Heading } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface DefaultTemplateProps {
  title?: string;
  children: ReactNode;
}

const DefaultTemplate = ({ title, children }: DefaultTemplateProps) => {
  return (
    <>
      {title && (
        <Heading mb="10px" size="4" align="center">
          {title}
        </Heading>
      )}
      {children}
    </>
  );
};

export default DefaultTemplate;
