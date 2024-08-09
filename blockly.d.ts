declare module 'blockly' {
    export = Blockly;
  }
  
  declare namespace Blockly {
    namespace Xml {
      function textToDom(text: string): Element;
      function domToWorkspace(xml: Element, workspace: Blockly.Workspace): void;
    }
  }