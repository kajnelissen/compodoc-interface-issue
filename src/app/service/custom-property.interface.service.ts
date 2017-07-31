import { Injectable } from '@angular/core';

/**
 * The custom property service is used to make working with custom properties easier.
 * As these properties can have any name, editors cannot provide autocompletion for
 * them when working with controls.
 */
export interface CustomPropertyServiceInterface {

  /**
   * Indicates whether a given control contains a specified custom property
   *
   * @param {any} control The control for which to check the custom property
   * @param {string} property The name of the custom property
   * @returns {boolean} true if the custom property was found, otherwise false
   */
  hasCustomProperty(control: any, property: string): boolean;

  /**
   * Checks if all provided custom properties exist on a given control.
   *
   * @param {any} control The control for which to check the custom properties
   * @param {string} properties The names of the custom properties
   * @returns {boolean} true if all specified custom properties are found
   */
  hasCustomProperties(control: any, ...properties: string[]): boolean;

  /**
   * Returns the value for a specified custom property from a given control
   *
   * @param {any} control The control from which to retrieve the custom property value
   * @param {string} property The name of the custom property for which to return a value
   * @returns {any} If found, the value for the provided custom property, otherwise null
   */
  getValueForCustomProperty(control: any, property: string): any;

  /**
   * Retrieves values for all provided custom properties and returns them as a dictionary.
   *
   * @param {any} control The control for which to check the custom properties
   * @param {string} properties The names of the custom properties
   * @returns {any} Dictionary object with property name as key
   */
  getValuesForCustomProperties(control: any, ...properties: string[]): any;

  /**
   * Sets the value for a specified custom property on a given control
   *
   * @param {any} control The control on which to set the custom property value
   * @param {string} property The name of the custom property for which to set a value
   * @param {any} value The value to be set on the custom property
   */
  setValueForCustomProperty(control: any, property: string, value: any): void;

}
