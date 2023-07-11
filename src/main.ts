import { Firebot } from "@crowbartools/firebot-custom-scripts-types";
import { colorOutput } from "./variables/color-output";
interface Params {
}

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name: "Color Custom Script",
      description: "Color custom script",
      author: "CKY",
      version: "1.0",
      firebotVersion: "5",
    };
  },
  getDefaultParameters: () => {
    return {};
  },
  run: (runRequest) => {
    const { logger } = runRequest.modules;
    const replaceVariableManager = runRequest.modules.replaceVariableManager
    replaceVariableManager.registerReplaceVariable(colorOutput);
  },
};

export default script;
