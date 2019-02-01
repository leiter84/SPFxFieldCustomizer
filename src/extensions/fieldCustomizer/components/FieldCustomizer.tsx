import * as React from "react";
import { override } from "@microsoft/decorators";

import styles from "./FieldCustomizer.module.scss";

export interface IFieldCustomizerProps {
  text: string;
}

const map = new Map();
map.set("Red", styles.redBall);
map.set("Green", styles.greenBall);
map.set("Yellow", styles.yellowBall);

export default class FieldCustomizer extends React.Component<
  IFieldCustomizerProps,
  {}
> {
  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        <div className={map.get(this.props.text)} />
      </div>
    );
  }
}
