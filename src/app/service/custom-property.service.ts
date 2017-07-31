import { Injectable } from '@angular/core';
import { CustomPropertyServiceInterface } from './custom-property.interface.service';

/**
 * The custom property service is used to make working with custom properties easier.
 * As these properties can have any name, editors cannot provide autocompletion for
 * them when working with controls.
 */
@Injectable()
export class CustomPropertyService implements CustomPropertyServiceInterface {

  /**
   * Indicates whether a given control contains a specified custom property
   *
   * @param {any} control The control for which to check the custom property
   * @param {string} property The name of the custom property
   * @returns {boolean} true if the custom property was found, otherwise false
   */
  public hasCustomProperty(control: any, property: string): boolean {
    let result = false;
    let customProperties: any[] = control['CustomProperties'];
    if (customProperties) {
      for (let i = 0, len = customProperties.length; i < len; i++) {
        if (customProperties[i].Name === property) {
          result = true;
          break;
        }
      }
    }
    return result;
  }

  /**
   * Checks if all provided custom properties exist on a given control.
   *
   * @param {any} control The control for which to check the custom properties
   * @param {string} properties The names of the custom properties
   * @returns {boolean} true if all specified custom properties are found
   */
  public hasCustomProperties(control: any, ...properties: string[]): boolean {
    for (let i: number = 0; i++; i < properties.length) {
      if (!this.hasCustomProperty(control, properties[i])) {
        return false;
      }
    }

    return true;
  }

  /**
   * Returns the value for a specified custom property from a given control
   *
   * @param {any} control The control from which to retrieve the custom property value
   * @param {string} property The name of the custom property for which to return a value
   * @returns {any} If found, the value for the provided custom property, otherwise null
   */
  public getValueForCustomProperty(control: any, property: string): any {
    let result = null;
    let customProperties: any[] = control['CustomProperties'];
    if (customProperties) {
      for (let i = 0, len = customProperties.length; i < len; i++) {
        if (customProperties[i].Name === property) {
          result = customProperties[i].Value;
        }
      }
    }
    return result;
  }

  /**
   * Retrieves values for all provided custom properties and returns them as a dictionary.
   *
   * @param {any} control The control for which to check the custom properties
   * @param {string} properties The names of the custom properties
   * @returns {any} Dictionary object with property name as key
   */
  public getValuesForCustomProperties(control: any, ...properties: string[]): any {
    let result = {};

    properties.forEach((property: string) => {
      let value = this.getValueForCustomProperty(control, property);
      result[property] = value;
    });

    return result;
  }

  /**
   * Sets the value for a specified custom property on a given control
   *
   * @param {any} control The control on which to set the custom property value
   * @param {string} property The name of the custom property for which to set a value
   * @param {any} value The value to be set on the custom property
   */
  public setValueForCustomProperty(control: any, property: string, value: any) {
    let customProperties: any[] = control['SomeCustomProperty'];
    if (customProperties) {
      for (let i = 0, len = customProperties.length; i < len; i++) {
        if (customProperties[i].Name === property) {
          customProperties[i].Value = value;
        }
      }
    }
  }

}
