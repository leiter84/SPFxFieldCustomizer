import * as React from "react";
import * as ReactDOM from "react-dom";

import { override } from "@microsoft/decorators";
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from "@microsoft/sp-listview-extensibility";

import * as strings from "FieldCustomizerFieldCustomizerStrings";
import FieldCustomizer, {
  IFieldCustomizerProps
} from "./components/FieldCustomizer";

export interface IFieldCustomizerFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = "FieldCustomizerFieldCustomizer";

export default class FieldCustomizerFieldCustomizer extends BaseFieldCustomizer<
  IFieldCustomizerFieldCustomizerProperties
> {
  @override
  public onInit(): Promise<void> {
    return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const text: string = event.fieldValue;

    const fieldCustomizer: React.ReactElement<{}> = React.createElement(
      FieldCustomizer,
      { text } as IFieldCustomizerProps
    );

    ReactDOM.render(fieldCustomizer, event.domElement);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
