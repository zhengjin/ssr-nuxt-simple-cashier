import Vue, {VNode} from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}

    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  namespace NodeJS {
    interface Global {
      document: Document;
      window: Window;
      navigator: Navigator;
      fetchClient: any;
      jsfClient: any;
    }
  }
}
