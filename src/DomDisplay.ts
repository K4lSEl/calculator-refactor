import type { IDisplay } from "./IDisplay";

export class DomDisplay implements IDisplay {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  public render(text: string): void {
    this.element.textContent = text;
  }

  public renderError(message: string): void {
    this.element.textContent = message;
  }
}
