import type { HTMLAttributes } from "react";
import { SERVICE_TITLE } from "../../constants";

type DocumentTitleProps = Pick<HTMLAttributes<HTMLTitleElement>, "children">;

const DocumentTitle = ({ children }: DocumentTitleProps) => {
  return <title>{`${children} | ${SERVICE_TITLE}`}</title>;
};

export default DocumentTitle;
