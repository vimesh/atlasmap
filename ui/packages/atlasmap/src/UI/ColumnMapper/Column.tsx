import React, { FunctionComponent, useMemo } from "react";
import { css, StyleSheet } from "@patternfly/react-styles";

const styles = StyleSheet.create({
  column: {
    flexFlow: "column nowrap",
    display: "flex",
    minWidth: "400px",
    padding: "1rem",
  },
  hidden: {
    opacity: 0,
  },
});

export interface IColumnProps {
  totalColumns?: number;
  visible?: boolean;
}

export const Column: FunctionComponent<IColumnProps> = ({
  totalColumns = 1,
  visible = true,
  children,
  ...props
}) => {
  const style = useMemo(() => ({ flex: `0 0 ${100 / totalColumns}%` }), [
    totalColumns,
  ]);
  return (
    <div
      className={css(styles.column, !visible && styles.hidden)}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};
