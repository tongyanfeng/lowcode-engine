"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BUILTIN_SLOT_NAMES: () => BUILTIN_SLOT_NAMES,
  CLASS_DEFINE_CHUNK_NAME: () => CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME: () => COMMON_CHUNK_NAME,
  COMMON_SUB_MODULE_NAME: () => COMMON_SUB_MODULE_NAME,
  CONTAINER_TYPE: () => CONTAINER_TYPE,
  ChunkBuilder: () => ChunkBuilder,
  ChunkType: () => ChunkType,
  CodeBuilder: () => CodeBuilder,
  CodeGeneratorError: () => CodeGeneratorError,
  CompatibilityError: () => CompatibilityError,
  ComponentValidationError: () => ComponentValidationError,
  DEFAULT_LINK_AFTER: () => DEFAULT_LINK_AFTER,
  DependencyType: () => DependencyType,
  FILE_TYPE_FAMILY: () => FILE_TYPE_FAMILY,
  FileType: () => FileType,
  InternalDependencyType: () => InternalDependencyType,
  NATIVE_ELE_PKG: () => NATIVE_ELE_PKG,
  PIECE_TYPE: () => PIECE_TYPE,
  PluginType: () => PluginType,
  ProjectBuilder: () => ProjectBuilder,
  PublisherError: () => PublisherError,
  SUPPORT_SCHEMA_VERSION_LIST: () => SUPPORT_SCHEMA_VERSION_LIST,
  SchemaParser: () => SchemaParser,
  componentAnalyzer: () => componentAnalyzer,
  createModuleBuilder: () => createModuleBuilder,
  createProjectBuilder: () => createProjectBuilder,
  default: () => src_default,
  groupChunks: () => groupChunks,
  isBuiltinSlotName: () => isBuiltinSlotName
});
module.exports = __toCommonJS(src_exports);

// src/parser/SchemaParser.ts
var import_change_case2 = __toESM(require("change-case"));

// src/types/core.ts
var FileType = /* @__PURE__ */ ((FileType2) => {
  FileType2["CSS"] = "css";
  FileType2["SCSS"] = "scss";
  FileType2["LESS"] = "less";
  FileType2["HTML"] = "html";
  FileType2["JS"] = "js";
  FileType2["MJS"] = "mjs";
  FileType2["JSX"] = "jsx";
  FileType2["TS"] = "ts";
  FileType2["MTS"] = "mts";
  FileType2["TSX"] = "tsx";
  FileType2["JSON"] = "json";
  FileType2["MD"] = "md";
  return FileType2;
})(FileType || {});
var ChunkType = /* @__PURE__ */ ((ChunkType2) => {
  ChunkType2["AST"] = "ast";
  ChunkType2["STRING"] = "string";
  ChunkType2["JSON"] = "json";
  return ChunkType2;
})(ChunkType || {});
var PluginType = /* @__PURE__ */ ((PluginType2) => {
  PluginType2["COMPONENT"] = "component";
  PluginType2["UTILS"] = "utils";
  PluginType2["I18N"] = "i18n";
  return PluginType2;
})(PluginType || {});

// src/types/deps.ts
var InternalDependencyType = /* @__PURE__ */ ((InternalDependencyType2) => {
  InternalDependencyType2["PAGE"] = "pages";
  InternalDependencyType2["BLOCK"] = "components";
  InternalDependencyType2["COMPONENT"] = "components";
  InternalDependencyType2["UTILS"] = "utils";
  return InternalDependencyType2;
})(InternalDependencyType || {});
var DependencyType = /* @__PURE__ */ ((DependencyType2) => {
  DependencyType2["External"] = "External";
  DependencyType2["Internal"] = "Internal";
  return DependencyType2;
})(DependencyType || {});

// src/types/error.ts
var CodeGeneratorError = class extends Error {
  constructor(message, detail) {
    super(message);
    __publicField(this, "detail");
    this.name = this.constructor.name;
    this.detail = detail;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var ComponentValidationError = class extends CodeGeneratorError {
};
var CompatibilityError = class extends CodeGeneratorError {
};
var PublisherError = class extends CodeGeneratorError {
};

// src/types/jsx.ts
var PIECE_TYPE = /* @__PURE__ */ ((PIECE_TYPE2) => {
  PIECE_TYPE2["BEFORE"] = "NodeCodePieceBefore";
  PIECE_TYPE2["TAG"] = "NodeCodePieceTag";
  PIECE_TYPE2["ATTR"] = "NodeCodePieceAttr";
  PIECE_TYPE2["CHILDREN"] = "NodeCodePieceChildren";
  PIECE_TYPE2["AFTER"] = "NodeCodePieceAfter";
  return PIECE_TYPE2;
})(PIECE_TYPE || {});

// src/const/index.ts
var const_exports = {};
__export(const_exports, {
  BUILTIN_SLOT_NAMES: () => BUILTIN_SLOT_NAMES,
  CLASS_DEFINE_CHUNK_NAME: () => CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME: () => COMMON_CHUNK_NAME,
  COMMON_SUB_MODULE_NAME: () => COMMON_SUB_MODULE_NAME,
  CONTAINER_TYPE: () => CONTAINER_TYPE,
  DEFAULT_LINK_AFTER: () => DEFAULT_LINK_AFTER,
  FILE_TYPE_FAMILY: () => FILE_TYPE_FAMILY,
  NATIVE_ELE_PKG: () => NATIVE_ELE_PKG,
  SUPPORT_SCHEMA_VERSION_LIST: () => SUPPORT_SCHEMA_VERSION_LIST,
  isBuiltinSlotName: () => isBuiltinSlotName
});

// src/const/file.ts
var FILE_TYPE_FAMILY = [["tsx" /* TSX */, "ts" /* TS */, "jsx" /* JSX */, "js" /* JS */]];

// src/const/generator.ts
var COMMON_CHUNK_NAME = {
  ExternalDepsImport: "CommonExternalDependencyImport",
  InternalDepsImport: "CommonInternalDependencyImport",
  ImportAliasDefine: "CommonImportAliasDefine",
  FileVarDefine: "CommonFileScopeVarDefine",
  FileUtilDefine: "CommonFileScopeMethodDefine",
  FileMainContent: "CommonFileMainContent",
  FileExport: "CommonFileExport",
  StyleDepsImport: "CommonStyleDepsImport",
  StyleCssContent: "CommonStyleCssContent",
  HtmlContent: "CommonHtmlContent",
  CustomContent: "CommonCustomContent"
};
var CLASS_DEFINE_CHUNK_NAME = {
  Start: "CommonClassDefineStart",
  ConstructorStart: "CommonClassDefineConstructorStart",
  ConstructorContent: "CommonClassDefineConstructorContent",
  ConstructorEnd: "CommonClassDefineConstructorEnd",
  StaticVar: "CommonClassDefineStaticVar",
  StaticMethod: "CommonClassDefineStaticMethod",
  InsVar: "CommonClassDefineInsVar",
  InsVarMethod: "CommonClassDefineInsVarMethod",
  InsMethod: "CommonClassDefineInsMethod",
  InsPrivateMethod: "CommonClassDefineInsPrivateMethod",
  End: "CommonClassDefineEnd"
};
var DEFAULT_LINK_AFTER = {
  [COMMON_CHUNK_NAME.ExternalDepsImport]: [],
  [COMMON_CHUNK_NAME.InternalDepsImport]: [COMMON_CHUNK_NAME.ExternalDepsImport],
  [COMMON_CHUNK_NAME.ImportAliasDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport
  ],
  [COMMON_CHUNK_NAME.FileVarDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine
  ],
  [COMMON_CHUNK_NAME.FileUtilDefine]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine
  ],
  [CLASS_DEFINE_CHUNK_NAME.Start]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorStart]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod
  ],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorContent]: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart],
  [CLASS_DEFINE_CHUNK_NAME.ConstructorEnd]: [
    CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
    CLASS_DEFINE_CHUNK_NAME.ConstructorContent
  ],
  [CLASS_DEFINE_CHUNK_NAME.StaticVar]: [CLASS_DEFINE_CHUNK_NAME.Start],
  [CLASS_DEFINE_CHUNK_NAME.StaticMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsVar]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsVarMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
  ],
  [CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.InsMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
  ],
  [CLASS_DEFINE_CHUNK_NAME.End]: [
    CLASS_DEFINE_CHUNK_NAME.Start,
    CLASS_DEFINE_CHUNK_NAME.StaticVar,
    CLASS_DEFINE_CHUNK_NAME.StaticMethod,
    CLASS_DEFINE_CHUNK_NAME.InsVar,
    CLASS_DEFINE_CHUNK_NAME.InsVarMethod,
    CLASS_DEFINE_CHUNK_NAME.InsMethod,
    CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
    CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
  ],
  [COMMON_CHUNK_NAME.FileMainContent]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
    CLASS_DEFINE_CHUNK_NAME.End
  ],
  [COMMON_CHUNK_NAME.FileExport]: [
    COMMON_CHUNK_NAME.ExternalDepsImport,
    COMMON_CHUNK_NAME.InternalDepsImport,
    COMMON_CHUNK_NAME.ImportAliasDefine,
    COMMON_CHUNK_NAME.FileVarDefine,
    COMMON_CHUNK_NAME.FileUtilDefine,
    CLASS_DEFINE_CHUNK_NAME.End,
    COMMON_CHUNK_NAME.FileMainContent
  ],
  [COMMON_CHUNK_NAME.StyleDepsImport]: [],
  [COMMON_CHUNK_NAME.StyleCssContent]: [COMMON_CHUNK_NAME.StyleDepsImport],
  [COMMON_CHUNK_NAME.HtmlContent]: []
};
var COMMON_SUB_MODULE_NAME = "index";

// src/const/index.ts
var NATIVE_ELE_PKG = "native";
var CONTAINER_TYPE = {
  COMPONENT: "Component",
  BLOCK: "Block",
  PAGE: "Page"
};
var SUPPORT_SCHEMA_VERSION_LIST = ["0.0.1", "1.0.0"];
var BUILTIN_SLOT_NAMES = [
  "pages",
  "components",
  "router",
  "entry",
  "appConfig",
  "buildConfig",
  "constants",
  "utils",
  "i18n",
  "globalStyle",
  "htmlEntry",
  "packageJSON",
  "demo"
];
var isBuiltinSlotName = function(name) {
  return BUILTIN_SLOT_NAMES.includes(name);
};

// src/utils/errors.ts
function getErrorMessage(error) {
  if (!error) {
    return null;
  }
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (typeof error === "object" && error !== null) {
    return getErrorMessage(error.message) || getErrorMessage(error.errorMessage) || getErrorMessage(error.detail);
  }
  return null;
}

// src/utils/schema.ts
var schema_exports = {};
__export(schema_exports, {
  ContainerType: () => ContainerType,
  handleSubNodes: () => handleSubNodes,
  isContainerSchema: () => isContainerSchema,
  isNpmInfo: () => isNpmInfo,
  isValidContainerType: () => isValidContainerType
});
var _ = __toESM(require("lodash"));
var import_lowcode_types = require("@alilc/lowcode-types");

// src/utils/common.ts
var common_exports = {};
__export(common_exports, {
  camel2dash: () => camel2dash,
  camelize: () => camelize,
  generateID: () => generateID,
  getStaticExprValue: () => getStaticExprValue,
  isExternalDependency: () => isExternalDependency,
  isInternalDependency: () => isInternalDependency,
  isJSExpressionFn: () => isJSExpressionFn,
  uniqueArray: () => uniqueArray,
  upperCaseFirst: () => upperCaseFirst
});
var import_change_case = __toESM(require("change-case"));
var import_short_uuid = __toESM(require("short-uuid"));
function camel2dash(input) {
  return import_change_case.default.paramCase(input);
}
function camelize(str) {
  return import_change_case.default.camelCase(str);
}
function generateID() {
  return import_short_uuid.default.generate();
}
function upperCaseFirst(inputValue) {
  return import_change_case.default.upperCaseFirst(inputValue);
}
function uniqueArray(arr, by) {
  const map = {};
  arr.forEach((item) => {
    map[by(item)] = item;
  });
  const uniqueKeys = Array.from(new Set(Object.keys(map)));
  const uniqueItems = uniqueKeys.map((key) => map[key]);
  return uniqueItems;
}
function getStaticExprValue(expr) {
  return Function(`"use strict";return (${expr})`)();
}
function isJSExpressionFn(data) {
  return (data == null ? void 0 : data.type) === "JSExpression" && (data == null ? void 0 : data.extType) === "function";
}
function isInternalDependency(dependency) {
  return dependency.dependencyType === "Internal" /* Internal */;
}
function isExternalDependency(dependency) {
  return dependency.dependencyType === "External" /* External */;
}

// src/utils/schema.ts
function isContainerSchema(x) {
  return typeof x === "object" && x && typeof x.componentName === "string" && typeof x.fileName === "string";
}
function isNpmInfo(x) {
  return typeof x === "object" && x && typeof x.package === "string";
}
var noop = () => void 0;
var handleChildrenDefaultOptions = {
  rerun: false
};
var DEFAULT_MAX_DEPTH = 1e5;
function handleSubNodes(children, handlers, options) {
  var _a;
  const opt = {
    ...handleChildrenDefaultOptions,
    ...options || {}
  };
  const maxDepth = (_a = opt.maxDepth) != null ? _a : DEFAULT_MAX_DEPTH;
  if (maxDepth <= 0) {
    throw new Error("handleSubNodes maxDepth reached");
  }
  if (Array.isArray(children)) {
    const list = children;
    return list.map((child) => handleSubNodes(child, handlers, { ...opt, maxDepth: maxDepth - 1 })).reduce((p, c) => p.concat(c), []);
  }
  let result;
  const childrenRes = [];
  if (children === null || children === void 0) {
    return [];
  } else if ((0, import_lowcode_types.isDOMText)(children)) {
    const handler = handlers.string || noop;
    result = handler(children);
  } else if ((0, import_lowcode_types.isJSExpression)(children)) {
    const handler = handlers.expression || noop;
    result = handler(children);
  } else if ((0, import_lowcode_types.isJSSlot)(children)) {
    return handleSubNodes(children.value, handlers, { ...opt, maxDepth: maxDepth - 1 });
  } else if ((0, import_lowcode_types.isNodeSchema)(children)) {
    const handler = handlers.node || noop;
    const child = children;
    result = handler(child);
    if (child.children) {
      const childRes = handleSubNodes(child.children, handlers, opt);
      childrenRes.push(...childRes);
    }
    if (child.props) {
      if (Array.isArray(child.props)) {
        child.props.forEach(({ value }) => {
          const childRes = handleCompositeValueInProps(value);
          childrenRes.push(...childRes);
        });
      } else {
        Object.values(child.props).forEach((value) => {
          const childRes = handleCompositeValueInProps(value);
          childrenRes.push(...childRes);
        });
      }
    }
  } else {
    throw new CodeGeneratorError("handleSubNodes got invalid NodeData", children);
  }
  if (result !== void 0) {
    childrenRes.unshift(result);
  }
  return childrenRes;
  function handleCompositeValueInProps(value) {
    if ((0, import_lowcode_types.isJSSlot)(value)) {
      return handleSubNodes(value.value, handlers, { ...opt, maxDepth: maxDepth - 1 });
    }
    if (Array.isArray(value)) {
      return _.flatMap(value, (v) => handleCompositeValueInProps(v));
    }
    if (!(0, import_lowcode_types.isJSExpression)(value) && !isJSExpressionFn(value) && !(0, import_lowcode_types.isJSFunction)(value) && typeof value === "object" && value !== null) {
      return _.flatMap(Object.values(value), (v) => handleCompositeValueInProps(v));
    }
    return [];
  }
}
function isValidContainerType(schema) {
  return [
    "Page",
    "Component",
    "Block"
  ].includes(schema.componentName);
}
var ContainerType = /* @__PURE__ */ ((ContainerType2) => {
  ContainerType2["Page"] = "Page";
  ContainerType2["Component"] = "Component";
  ContainerType2["Block"] = "Block";
  return ContainerType2;
})(ContainerType || {});

// src/analyzer/componentAnalyzer.ts
var componentAnalyzer = (container) => {
  let hasRefAttr = false;
  const nodeValidator = (n) => {
    if (n.props) {
      const props = n.props;
      if (props.ref) {
        hasRefAttr = true;
      }
    }
  };
  nodeValidator(container);
  if (!hasRefAttr && container.children) {
    handleSubNodes(
      container.children,
      {
        node: nodeValidator
      },
      {
        rerun: true
      }
    );
  }
  return {
    isUsingRef: hasRefAttr
  };
};

// src/utils/validate.ts
var validate_exports = {};
__export(validate_exports, {
  ensureValidClassName: () => ensureValidClassName,
  isValidComponentName: () => isValidComponentName,
  isValidIdentifier: () => isValidIdentifier
});
var isValidIdentifier = (name) => {
  return /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/.test(name);
};
var isValidComponentName = (name) => {
  return /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF.]*$/.test(name);
};
var ensureValidClassName = (name) => {
  if (!isValidIdentifier(name)) {
    return `$${name.replace(/[^_$a-zA-Z0-9]/g, "")}`;
  }
  return name;
};

// src/parser/SchemaParser.ts
var defaultContainer = {
  containerType: "Component",
  componentName: "Component",
  moduleName: "Index",
  fileName: "Index",
  css: "",
  props: {}
};
function getRootComponentName(typeName, maps) {
  if (maps[typeName]) {
    const rec = maps[typeName];
    if (rec.destructuring) {
      return rec.componentName || typeName;
    }
    const peerName = Object.keys(maps).find((depName) => {
      const depInfo = maps[depName];
      return depName !== typeName && !depInfo.destructuring && depInfo.package === rec.package && depInfo.version === rec.version && depInfo.main === rec.main && depInfo.exportName === rec.exportName && depInfo.subName === rec.subName;
    });
    return peerName || typeName;
  }
  return typeName;
}
function processChildren(schema) {
  if (schema.props) {
    if (Array.isArray(schema.props)) {
    } else {
      const nodeProps = schema.props;
      if (nodeProps.children) {
        if (!schema.children) {
          schema.children = nodeProps.children;
        } else {
          let _children = [];
          if (Array.isArray(schema.children)) {
            _children = _children.concat(schema.children);
          } else {
            _children.push(schema.children);
          }
          if (Array.isArray(nodeProps.children)) {
            _children = _children.concat(nodeProps.children);
          } else {
            _children.push(nodeProps.children);
          }
          schema.children = _children;
        }
        delete nodeProps.children;
      }
    }
  }
}
function getInternalDep(internalDeps, depName) {
  const dep = internalDeps[depName];
  return dep && dep.type !== "pages" /* PAGE */ ? dep : null;
}
var SchemaParser = class {
  validate(schema) {
    if (SUPPORT_SCHEMA_VERSION_LIST.indexOf(schema.version) < 0) {
      throw new CompatibilityError(`Not support schema with version [${schema.version}]`);
    }
    return true;
  }
  parse(schemaSrc) {
    const compDeps = {};
    const internalDeps = {};
    let utilsDeps = [];
    const schema = this.decodeSchema(schemaSrc);
    schema.componentsMap.forEach((info) => {
      var _a, _b;
      if (info.componentName) {
        compDeps[info.componentName] = {
          ...info,
          dependencyType: "External" /* External */,
          componentName: info.componentName,
          exportName: (_a = info.exportName) != null ? _a : info.componentName,
          version: info.version || "*",
          destructuring: (_b = info.destructuring) != null ? _b : false
        };
      }
    });
    let containers;
    if (schema.componentsTree.length > 0) {
      const firstRoot = schema.componentsTree[0];
      if (!firstRoot.fileName && !isValidContainerType(firstRoot)) {
        const container = {
          ...firstRoot,
          ...defaultContainer,
          props: firstRoot.props || defaultContainer.props,
          css: firstRoot.css || defaultContainer.css,
          moduleName: firstRoot.moduleName || defaultContainer.moduleName,
          children: schema.componentsTree
        };
        containers = [container];
      } else {
        containers = schema.componentsTree.map((n) => {
          const subRoot = n;
          const container = {
            ...subRoot,
            componentName: getRootComponentName(subRoot.componentName, compDeps),
            containerType: subRoot.componentName,
            moduleName: ensureValidClassName(subRoot.componentName === "Component" /* Component */ ? subRoot.fileName : import_change_case2.default.pascalCase(subRoot.fileName))
          };
          return container;
        });
      }
    } else {
      throw new CodeGeneratorError("Can't find anything to generate.");
    }
    containers = containers.map((con) => ({
      ...con,
      analyzeResult: componentAnalyzer(con)
    }));
    containers.forEach((container) => {
      let type;
      switch (container.containerType) {
        case "Page":
          type = "pages" /* PAGE */;
          break;
        case "Block":
          type = "components" /* BLOCK */;
          break;
        default:
          type = "components" /* COMPONENT */;
          break;
      }
      const dep = {
        type,
        moduleName: container.moduleName,
        destructuring: false,
        exportName: container.moduleName,
        dependencyType: "Internal" /* Internal */
      };
      internalDeps[dep.moduleName] = dep;
    });
    const containersDeps = [].concat(...containers.map((c) => c.deps || []));
    containers.forEach((container) => {
      if (container.children) {
        handleSubNodes(
          container.children,
          {
            node: (i) => processChildren(i)
          },
          {
            rerun: true
          }
        );
      }
    });
    containers.forEach((container) => {
      const depNames = this.getComponentNames(container);
      container.deps = uniqueArray(depNames, (i) => i).map((depName) => getInternalDep(internalDeps, depName) || compDeps[depName]).filter(Boolean);
    });
    const routes = containers.filter((container) => container.containerType === "Page").map((page) => {
      const { meta } = page;
      if (meta) {
        return {
          path: meta.router || `/${page.fileName}`,
          fileName: page.fileName,
          componentName: page.moduleName
        };
      }
      return {
        path: "",
        fileName: page.fileName,
        componentName: page.moduleName
      };
    });
    const routerDeps = routes.map((r) => internalDeps[r.componentName] || compDeps[r.componentName]).filter((dep) => !!dep);
    let utils;
    if (schema.utils) {
      utils = schema.utils;
      utilsDeps = schema.utils.filter(
        (u) => u.type !== "function"
      ).map(
        (u) => {
          var _a, _b;
          return {
            ...u.content,
            componentName: u.name,
            version: u.content.version || "*",
            destructuring: (_a = u.content.destructuring) != null ? _a : false,
            exportName: (_b = u.content.exportName) != null ? _b : u.name
          };
        }
      );
    } else {
      utils = [];
    }
    let npms = [];
    containers.forEach((con) => {
      const p = (con.deps || []).map((dep) => {
        return dep.dependencyType === "External" /* External */ ? dep : null;
      }).filter((dep) => dep !== null);
      const npmInfos = p.filter(Boolean).map((i) => ({
        package: i.package,
        version: i.version
      }));
      npms.push(...npmInfos);
    });
    npms.push(
      ...utilsDeps.map((utilsDep) => ({
        package: utilsDep.package,
        version: utilsDep.version
      }))
    );
    npms = uniqueArray(npms, (i) => i.package).filter(Boolean);
    return {
      containers,
      globalUtils: {
        utils,
        deps: utilsDeps
      },
      globalI18n: schema.i18n,
      globalRouter: {
        routes,
        deps: routerDeps
      },
      project: {
        css: schema.css,
        constants: schema.constants,
        config: schema.config || {},
        meta: schema.meta || {},
        i18n: schema.i18n,
        containersDeps,
        utilsDeps,
        packages: npms || [],
        dataSourcesTypes: this.collectDataSourcesTypes(schema),
        projectRemark: this.getProjectRemark(containers)
      }
    };
  }
  getProjectRemark(containers) {
    return {
      isSingleComponent: containers.length === 1 && containers[0].containerType === "Component"
    };
  }
  getComponentNames(children) {
    return handleSubNodes(
      children,
      {
        node: (i) => i.componentName
      },
      {
        rerun: true
      }
    );
  }
  decodeSchema(schemaSrc) {
    let schema;
    if (typeof schemaSrc === "string") {
      try {
        schema = JSON.parse(schemaSrc);
      } catch (error) {
        throw new CodeGeneratorError(
          `Parse schema failed: ${getErrorMessage(error) || "unknown reason"}`
        );
      }
    } else {
      schema = schemaSrc;
    }
    return schema;
  }
  collectDataSourcesTypes(schema) {
    var _a, _b;
    const dataSourcesTypes = /* @__PURE__ */ new Set();
    const defaultDataSourceType = "fetch";
    (_b = (_a = schema.dataSource) == null ? void 0 : _a.list) == null ? void 0 : _b.forEach((ds) => {
      dataSourcesTypes.add(ds.type || defaultDataSourceType);
    });
    schema.componentsTree.forEach((rootNode) => {
      var _a2, _b2;
      (_b2 = (_a2 = rootNode.dataSource) == null ? void 0 : _a2.list) == null ? void 0 : _b2.forEach((ds) => {
        dataSourcesTypes.add(ds.type || defaultDataSourceType);
      });
    });
    return Array.from(dataSourcesTypes.values());
  }
};

// src/utils/resultHelper.ts
var resultHelper_exports = {};
__export(resultHelper_exports, {
  addDirectory: () => addDirectory,
  addFile: () => addFile,
  createResultDir: () => createResultDir,
  createResultFile: () => createResultFile,
  findDir: () => findDir,
  findFile: () => findFile,
  flattenResult: () => flattenResult,
  getFileNameWithExt: () => getFileNameWithExt,
  globDirs: () => globDirs,
  globFiles: () => globFiles,
  removeDirsFromResult: () => removeDirsFromResult,
  removeFilesFromResult: () => removeFilesFromResult,
  scanDirs: () => scanDirs,
  scanFiles: () => scanFiles
});
var import_nanomatch = __toESM(require("nanomatch"));
function createResultFile(name, ext = "jsx", content = "") {
  return {
    name,
    ext,
    content
  };
}
function createResultDir(name) {
  return {
    name,
    dirs: [],
    files: []
  };
}
function addDirectory(target, dir) {
  if (target.dirs.findIndex((d) => d.name === dir.name) < 0) {
    target.dirs.push(dir);
  } else {
    throw new CodeGeneratorError(
      `Adding same directory to one directory: ${dir.name} -> ${target.name}`
    );
  }
}
function addFile(target, file2) {
  if (target.files.findIndex((f) => f.name === file2.name && f.ext === file2.ext) < 0) {
    target.files.push(file2);
  } else {
    throw new CodeGeneratorError(
      `Adding same file to one directory: ${file2.name} -> ${target.name}`
    );
  }
}
function flattenResult(dir, cwd = "") {
  if (!dir.files.length && !dir.dirs.length) {
    return [];
  }
  return [
    ...dir.files.map(
      (file2) => ({
        pathName: joinPath(cwd, `${file2.name}${file2.ext ? `.${file2.ext}` : ""}`),
        content: file2.content
      })
    )
  ].concat(...dir.dirs.map((subDir) => flattenResult(subDir, joinPath(cwd, subDir.name))));
}
function findFile(result, fileGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
  const maxDepth = !/\/|\*\*/.test(fileGlobExpr) ? 1 : void 0;
  const files = scanFiles(result, resultDirPath, maxDepth);
  for (let [filePath, file2] of files) {
    if (import_nanomatch.default.isMatch(filePath, fileGlobExpr, options)) {
      return file2;
    }
  }
  return null;
}
function* globFiles(result, fileGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
  const files = scanFiles(result, resultDirPath);
  for (let [filePath, file2] of files) {
    if (import_nanomatch.default.isMatch(filePath, fileGlobExpr, options)) {
      yield [filePath, file2];
    }
  }
}
function* scanFiles(result, resultDirPath = getResultNameOrDefault(result, ""), maxDepth = 1e4) {
  for (let file2 of result.files) {
    const fileName = getFileNameWithExt(file2);
    yield [joinPath(resultDirPath, fileName), file2];
  }
  for (let subDir of result.dirs) {
    yield* scanFiles(subDir, joinPath(resultDirPath, subDir.name), maxDepth - 1);
  }
}
function getFileNameWithExt(file2) {
  return `${file2.name}${file2.ext ? `.${file2.ext}` : ""}`;
}
function getResultNameOrDefault(result, defaultDir = "/") {
  return result.name && result.name !== "." ? result.name : defaultDir;
}
function joinPath(...pathParts) {
  return pathParts.filter((x) => x !== "" && x !== ".").join("/").replace(/\\+/g, "/").replace(/\/+/g, "/");
}
function* scanDirs(result, resultDirPath = getResultNameOrDefault(result, ""), maxDepth = 1e4) {
  yield [resultDirPath, result];
  for (let subDir of result.dirs) {
    yield* scanDirs(subDir, joinPath(resultDirPath, subDir.name), maxDepth - 1);
  }
}
function* globDirs(result, dirGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
  const dirs = scanDirs(result, resultDirPath);
  for (let [dirPath, dir] of dirs) {
    if (import_nanomatch.default.isMatch(dirPath, dirGlobExpr, options)) {
      yield [dirPath, dir];
    }
  }
}
function findDir(result, dirGlobExpr, options = {}, resultDirPath = getResultNameOrDefault(result, "")) {
  const dirs = scanDirs(result, resultDirPath);
  for (let [dirPath, dir] of dirs) {
    if (import_nanomatch.default.isMatch(dirPath, dirGlobExpr, options)) {
      return dir;
    }
  }
  return null;
}
function removeFilesFromResult(result, filePathGlobExpr, globOptions = {}) {
  let removedCount = 0;
  const [dirPath, fileName] = splitPath(filePathGlobExpr);
  const dirs = dirPath ? globDirs(result, dirPath) : [["", result]];
  for (let [, dir] of dirs) {
    const files = globFiles(dir, fileName, globOptions, ".");
    for (let [, file2] of files) {
      dir.files.splice(dir.files.indexOf(file2), 1);
      removedCount += 1;
    }
  }
  return removedCount;
}
function removeDirsFromResult(result, dirPathGlobExpr, globOptions = {}) {
  let removedCount = 0;
  const [dirPath, fileName] = splitPath(dirPathGlobExpr);
  const dirs = dirPath ? globDirs(result, dirPath) : [["", result]];
  for (let [, dir] of dirs) {
    const foundDirs = globDirs(dir, fileName, globOptions, ".");
    for (let [, foundDir] of foundDirs) {
      dir.dirs.splice(dir.dirs.indexOf(foundDir), 1);
      removedCount += 1;
    }
  }
  return removedCount;
}
function splitPath(filePath) {
  const parts = filePath.split("/");
  const fileName = parts.pop() || "";
  return [joinPath(...parts), fileName];
}

// src/generator/ChunkBuilder.ts
function whichFamily(type) {
  const idx = FILE_TYPE_FAMILY.findIndex((family) => family.indexOf(type) >= 0);
  if (idx < 0) {
    return void 0;
  }
  return [idx, FILE_TYPE_FAMILY[idx]];
}
var groupChunks = (chunks) => {
  const tmp = {};
  const col = chunks.reduce((chunksSet, chunk) => {
    const fileKey = chunk.subModule || COMMON_SUB_MODULE_NAME;
    if (!chunksSet[fileKey]) {
      chunksSet[fileKey] = [];
    }
    const res = whichFamily(chunk.fileType);
    const info = {
      chunk
    };
    if (res) {
      const [familyIdx, family] = res;
      const rank = family.indexOf(chunk.fileType);
      if (tmp[fileKey]) {
        if (tmp[fileKey][familyIdx] !== void 0) {
          if (tmp[fileKey][familyIdx] > rank) {
            tmp[fileKey][familyIdx] = rank;
          }
        } else {
          tmp[fileKey][familyIdx] = rank;
        }
      } else {
        tmp[fileKey] = {};
        tmp[fileKey][familyIdx] = rank;
      }
      info.familyIdx = familyIdx;
    }
    chunksSet[fileKey].push(info);
    return chunksSet;
  }, {});
  const result = [];
  Object.keys(col).forEach((key) => {
    const byType = {};
    col[key].forEach((info) => {
      let t3 = info.chunk.fileType;
      if (info.familyIdx !== void 0) {
        t3 = FILE_TYPE_FAMILY[info.familyIdx][tmp[key][info.familyIdx]];
        info.chunk.fileType = t3;
      }
      if (!byType[t3]) {
        byType[t3] = [];
      }
      byType[t3].push(info.chunk);
    });
    result.push(...Object.keys(byType).map((t3) => byType[t3]));
  });
  return result;
};
var ChunkBuilder = class {
  constructor(plugins5 = []) {
    __publicField(this, "plugins");
    this.plugins = plugins5;
  }
  async run(ir, initialStructure = {
    ir,
    chunks: [],
    depNames: [],
    contextData: {}
  }) {
    const structure = initialStructure;
    const finalStructure = await this.plugins.reduce(
      async (previousPluginOperation, plugin) => {
        const modifiedStructure = await previousPluginOperation;
        return plugin(modifiedStructure);
      },
      Promise.resolve(structure)
    );
    const chunks = groupChunks(finalStructure.chunks);
    return {
      chunks
    };
  }
  getPlugins() {
    return this.plugins;
  }
  addPlugin(plugin) {
    this.plugins.push(plugin);
  }
};

// src/generator/CodeBuilder.ts
var CodeBuilder = class {
  constructor(chunkDefinitions = []) {
    __publicField(this, "chunkDefinitions", []);
    __publicField(this, "generators", {
      ["string" /* STRING */]: (str) => str,
      ["json" /* JSON */]: (json) => JSON.stringify(json)
    });
    this.chunkDefinitions = chunkDefinitions;
  }
  link(chunkDefinitions = []) {
    const chunks = chunkDefinitions || this.chunkDefinitions;
    if (chunks.length <= 0) {
      return "";
    }
    const unprocessedChunks = chunks.map((chunk) => {
      return {
        name: chunk.name,
        type: chunk.type,
        content: chunk.content,
        linkAfter: this.cleanupInvalidChunks(chunk.linkAfter, chunks)
      };
    });
    const resultingString = [];
    while (unprocessedChunks.length > 0) {
      let indexToRemove = 0;
      for (let index = 0; index < unprocessedChunks.length; index++) {
        if (unprocessedChunks[index].linkAfter.length <= 0) {
          indexToRemove = index;
          break;
        }
      }
      if (unprocessedChunks[indexToRemove].linkAfter.length > 0) {
        throw new CodeGeneratorError(
          "Operation aborted. Reason: cyclic dependency between chunks."
        );
      }
      const { type, content, name } = unprocessedChunks[indexToRemove];
      const compiledContent = this.generateByType(type, content);
      if (compiledContent) {
        resultingString.push(`${compiledContent}
`);
      }
      unprocessedChunks.splice(indexToRemove, 1);
      if (!unprocessedChunks.some((ch) => ch.name === name)) {
        unprocessedChunks.forEach(
          (ch) => {
            ch.linkAfter = ch.linkAfter.filter((after) => after !== name);
          }
        );
      }
    }
    return resultingString.join("\n");
  }
  generateByType(type, content) {
    if (!content) {
      return "";
    }
    if (Array.isArray(content)) {
      return content.map((contentItem) => this.generateByType(type, contentItem)).join("\n");
    }
    if (!this.generators[type]) {
      throw new Error(
        `Attempted to generate unknown type ${type}. Please register a generator for this type in builder/index.ts`
      );
    }
    return this.generators[type](content);
  }
  cleanupInvalidChunks(linkAfter, chunks) {
    return linkAfter.filter((chunkName) => chunks.some((chunk) => chunk.name === chunkName));
  }
};

// src/generator/ModuleBuilder.ts
function createModuleBuilder(options = {
  plugins: [],
  postProcessors: []
}) {
  const chunkGenerator = new ChunkBuilder(options.plugins);
  const linker = new CodeBuilder();
  const generateModule = async (input) => {
    const moduleMainName = options.mainFileName || COMMON_SUB_MODULE_NAME;
    if (chunkGenerator.getPlugins().length <= 0) {
      throw new CodeGeneratorError(
        "No plugins found. Component generation cannot work without any plugins!"
      );
    }
    let files = [];
    const { chunks } = await chunkGenerator.run(input, {
      ir: input,
      chunks: [],
      depNames: [],
      contextData: options.contextData || {}
    });
    chunks.forEach((fileChunkList) => {
      const content = linker.link(fileChunkList);
      const file2 = createResultFile(
        fileChunkList[0].subModule || moduleMainName,
        fileChunkList[0].fileType,
        content
      );
      files.push(file2);
    });
    if (options.postProcessors.length > 0) {
      files = files.map((file2) => {
        let { content, ext: type, name } = file2;
        options.postProcessors.forEach((processer) => {
          content = processer(content, type, name);
        });
        return createResultFile(file2.name, type, content);
      });
    }
    return {
      files
    };
  };
  const generateModuleCode = async (schema) => {
    const schemaParser = new SchemaParser();
    const parseResult = schemaParser.parse(schema);
    const containerInfo = parseResult.containers[0];
    const { files } = await generateModule(containerInfo);
    const dir = createResultDir(containerInfo.moduleName);
    files.forEach((file2) => addFile(dir, file2));
    return dir;
  };
  const linkCodeChunks = (chunks, fileName) => {
    const files = [];
    Object.keys(chunks).forEach((fileKey) => {
      const fileChunkList = chunks[fileKey];
      const content = linker.link(fileChunkList);
      const file2 = createResultFile(
        fileChunkList[0].subModule || fileName,
        fileChunkList[0].fileType,
        content
      );
      files.push(file2);
    });
    return files;
  };
  return {
    generateModule,
    generateModuleCode,
    linkCodeChunks,
    addPlugin: chunkGenerator.addPlugin.bind(chunkGenerator)
  };
}

// src/generator/ProjectBuilder.ts
var ProjectBuilder = class {
  constructor(builderOptions) {
    __publicField(this, "template");
    __publicField(this, "plugins");
    __publicField(this, "postProcessors");
    __publicField(this, "schemaParser");
    __publicField(this, "projectPreProcessors");
    __publicField(this, "projectPostProcessors");
    __publicField(this, "inStrictMode");
    __publicField(this, "extraContextData");
    let customBuilderOptions = builderOptions;
    if (typeof builderOptions.customizeBuilderOptions === "function") {
      customBuilderOptions = builderOptions.customizeBuilderOptions(builderOptions);
    }
    const {
      template,
      plugins: plugins5,
      postProcessors,
      schemaParser = new SchemaParser(),
      projectPreProcessors = [],
      projectPostProcessors = [],
      inStrictMode = false,
      extraContextData = {}
    } = customBuilderOptions;
    this.template = template;
    this.plugins = plugins5;
    this.postProcessors = postProcessors;
    this.schemaParser = schemaParser;
    this.projectPreProcessors = projectPreProcessors;
    this.projectPostProcessors = projectPostProcessors;
    this.inStrictMode = inStrictMode;
    this.extraContextData = extraContextData;
  }
  async generateProject(originalSchema) {
    var _a, _b, _c;
    const { schemaParser } = this;
    let schema = typeof originalSchema === "string" ? JSON.parse(originalSchema) : originalSchema;
    for (const preProcessor of this.projectPreProcessors) {
      schema = await preProcessor(schema);
    }
    if (!schemaParser.validate(schema)) {
      throw new CodeGeneratorError("Schema is invalid");
    }
    const parseResult = schemaParser.parse(schema);
    console.log("ProjectBuilder-133-parseResult: ", parseResult);
    const projectRoot = await this.template.generateTemplate(parseResult);
    console.log("ProjectBuilder-136-projectRoot: ", projectRoot);
    let buildResult = [];
    const builders = this.createModuleBuilders({
      extraContextData: {
        projectRemark: (_a = parseResult == null ? void 0 : parseResult.project) == null ? void 0 : _a.projectRemark,
        template: this.template
      }
    });
    console.log(JSON.stringify(builders));
    console.log("ProjectBuilder-144-parseResult:", JSON.stringify(parseResult));
    const containerBuildResult = await Promise.all(
      parseResult.containers.map(async (containerInfo) => {
        let builder;
        let path;
        console.log("ProjectBuilder-152-containerInfo:", JSON.stringify(containerInfo));
        console.log("ProjectBuilder-152-path:", JSON.stringify(this.template.slots.pages.path));
        if (containerInfo.containerType === "Page") {
          builder = builders.pages;
          path = this.template.slots.pages.path;
        } else {
          builder = builders.components;
          path = [];
        }
        console.log("ProjectBuilder-162-path:", JSON.stringify(this.template.slots.pages.path));
        console.log("ProjectBuilder-165-builder:", JSON.stringify(builders));
        let files;
        try {
          let data = await builder.generateModule(containerInfo);
          files = data.files;
        } catch (e) {
          console.log(69, e);
        }
        return {
          moduleName: containerInfo.moduleName,
          path,
          files
        };
      })
    );
    console.log("ProjectBuilder-170-containerBuildResult:", JSON.stringify(containerBuildResult));
    buildResult = buildResult.concat(containerBuildResult);
    console.log("ProjectBuilder-180-buildResult:", JSON.stringify(buildResult));
    if (parseResult.globalRouter && builders.router) {
      const { files } = await builders.router.generateModule(parseResult.globalRouter);
      buildResult.push({
        path: this.template.slots.router.path,
        files
      });
    }
    if (parseResult.project && builders.entry) {
      const { files } = await builders.entry.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.entry.path,
        files
      });
    }
    if (builders.appConfig) {
      const { files } = await builders.appConfig.generateModule(parseResult);
      buildResult.push({
        path: this.template.slots.appConfig.path,
        files
      });
    }
    if (builders.buildConfig) {
      const { files } = await builders.buildConfig.generateModule(parseResult);
      buildResult.push({
        path: this.template.slots.buildConfig.path,
        files
      });
    }
    if (parseResult.project && builders.constants && this.template.slots.constants) {
      const { files } = await builders.constants.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.constants.path,
        files
      });
    }
    if (parseResult.globalUtils && builders.utils && this.template.slots.utils) {
      const { files } = await builders.utils.generateModule(parseResult.globalUtils);
      buildResult.push({
        path: this.template.slots.utils.path,
        files
      });
    }
    if (builders.i18n && this.template.slots.i18n) {
      const { files } = await builders.i18n.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.i18n.path,
        files
      });
    }
    if (parseResult.project && builders.globalStyle) {
      const { files } = await builders.globalStyle.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.globalStyle.path,
        files
      });
    }
    if (parseResult.project && builders.htmlEntry) {
      const { files } = await builders.htmlEntry.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.htmlEntry.path,
        files
      });
    }
    if (parseResult.project && builders.packageJSON) {
      const { files } = await builders.packageJSON.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.packageJSON.path,
        files
      });
    }
    if (parseResult.project && builders.demo) {
      const { files } = await builders.demo.generateModule(parseResult.project);
      buildResult.push({
        path: this.template.slots.demo.path,
        files
      });
    }
    await this.generateExtraSlots(builders, parseResult, buildResult);
    const isSingleComponent = (_c = (_b = parseResult == null ? void 0 : parseResult.project) == null ? void 0 : _b.projectRemark) == null ? void 0 : _c.isSingleComponent;
    console.log("ProjectBuilder-286-Combine Modules:", JSON.stringify(projectRoot));
    buildResult.forEach((moduleInfo) => {
      let targetDir = getDirFromRoot(projectRoot, moduleInfo.path);
      if (moduleInfo.moduleName && !isSingleComponent) {
        const dir = createResultDir(moduleInfo.moduleName);
        addDirectory(targetDir, dir);
        targetDir = dir;
      }
      moduleInfo.files.forEach((file2) => addFile(targetDir, file2));
    });
    let finalResult = projectRoot;
    for (const projectPostProcessor of this.projectPostProcessors) {
      finalResult = await projectPostProcessor(finalResult, schema, originalSchema, {
        template: this.template,
        parseResult
      });
    }
    return finalResult;
  }
  createModuleBuilders(extraContextData = {}) {
    const builders = {};
    Object.keys(this.plugins).forEach((pluginName) => {
      if (this.plugins[pluginName].length > 0) {
        const options = {};
        if (this.template.slots[pluginName] && this.template.slots[pluginName].fileName) {
          options.mainFileName = this.template.slots[pluginName].fileName;
        }
        builders[pluginName] = createModuleBuilder({
          plugins: this.plugins[pluginName],
          postProcessors: this.postProcessors,
          contextData: {
            inStrictMode: this.inStrictMode,
            tolerateEvalErrors: true,
            evalErrorsHandler: "",
            ...this.extraContextData,
            ...extraContextData
          },
          ...options
        });
      }
    });
    return builders;
  }
  async generateExtraSlots(builders, parseResult, buildResult) {
    for (const slotName in this.template.slots) {
      if (!isBuiltinSlotName(slotName)) {
        const { files } = await builders[slotName].generateModule(parseResult);
        buildResult.push({
          path: this.template.slots[slotName].path,
          files
        });
      }
    }
  }
};
function createProjectBuilder(initOptions) {
  return new ProjectBuilder(initOptions);
}
function getDirFromRoot(root, path) {
  let current = root;
  path.forEach((p) => {
    const exist = current.dirs.find((d) => d.name === p);
    if (exist) {
      current = exist;
    } else {
      const newDir = createResultDir(p);
      addDirectory(current, newDir);
      current = newDir;
    }
  });
  return current;
}

// src/publisher/disk/index.ts
var defaultFs = __toESM(require("fs"));

// src/publisher/disk/utils.ts
var systemFs = __toESM(require("fs"));
var import_path = require("path");
var writeFolder = async (folder, currentPath, createProjectFolder = true, fs = systemFs) => {
  const { name, files, dirs } = folder;
  const folderPath = createProjectFolder ? (0, import_path.join)(currentPath, name) : currentPath;
  if (!fs.existsSync(folderPath)) {
    await createDirectory(folderPath, fs);
  }
  const promises = [
    writeFilesToFolder(folderPath, files, fs),
    writeSubFoldersToFolder(folderPath, dirs, fs)
  ];
  await Promise.all(promises);
};
var writeFilesToFolder = async (folderPath, files, fs) => {
  const promises = files.map((file2) => {
    const fileName = file2.ext ? `${file2.name}.${file2.ext}` : file2.name;
    const filePath = (0, import_path.join)(folderPath, fileName);
    return writeContentToFile(filePath, file2.content, "utf8", fs);
  });
  await Promise.all(promises);
};
var writeSubFoldersToFolder = async (folderPath, subFolders, fs) => {
  const promises = subFolders.map((subFolder) => {
    return writeFolder(subFolder, folderPath, true, fs);
  });
  await Promise.all(promises);
};
var createDirectory = (pathToDir, fs) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(pathToDir, { recursive: true }, (err) => {
      err ? reject(err) : resolve();
    });
  });
};
var writeContentToFile = (filePath, fileContent, encoding = "utf8", fs) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, fileContent, { encoding }, (err) => {
      err ? reject(err) : resolve();
    });
  });
};

// src/publisher/disk/index.ts
var createDiskPublisher = (params = {}) => {
  let { project, outputPath = "./" } = params;
  const { fs = defaultFs } = params;
  const getProject = () => {
    if (!project) {
      throw new PublisherError("MissingProject");
    }
    return project;
  };
  const setProject = (projectToSet) => {
    project = projectToSet;
  };
  const getOutputPath = () => {
    return outputPath;
  };
  const setOutputPath = (path) => {
    outputPath = path;
  };
  const publish = async (options = {}) => {
    var _a;
    const projectToPublish = options.project || project;
    if (!projectToPublish) {
      throw new PublisherError("MissingProject");
    }
    const projectOutputPath = options.outputPath || outputPath;
    const overrideProjectSlug = options.projectSlug || params.projectSlug;
    const createProjectFolder = (_a = options.createProjectFolder) != null ? _a : params.createProjectFolder;
    if (overrideProjectSlug) {
      projectToPublish.name = overrideProjectSlug;
    }
    try {
      await writeFolder(projectToPublish, projectOutputPath, createProjectFolder, fs);
      return { success: true, payload: projectOutputPath };
    } catch (error) {
      throw new PublisherError(getErrorMessage(error) || "UnknownError");
    }
  };
  return {
    publish,
    getProject,
    setProject,
    getOutputPath,
    setOutputPath
  };
};

// src/publisher/zip/utils.ts
var import_jszip = __toESM(require("jszip"));
var isNodeProcess = () => {
  return typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node !== "undefined";
};
var writeZipToDisk = (zipFolderPath, content, zipName) => {
  if (!isNodeProcess()) {
    throw new Error("ZipPublisher: writeZipToDisk is only available in NodeJS");
  }
  const fs = require("fs");
  const path = require("path");
  if (!fs.existsSync(zipFolderPath)) {
    fs.mkdirSync(zipFolderPath, { recursive: true });
  }
  const zipPath = path.join(zipFolderPath, `${zipName}.zip`);
  const writeStream = fs.createWriteStream(zipPath);
  writeStream.write(content);
  writeStream.end();
};
var generateProjectZip = async (project) => {
  let zip = new import_jszip.default();
  zip = writeFolderToZip(project, zip, true);
  const zipType = isNodeProcess() ? "nodebuffer" : "blob";
  console.log("44 zip utils zipType: ", zipType);
  return zip.generateAsync({ type: zipType });
};
var writeFolderToZip = (folder, parentFolder, ignoreFolder = false) => {
  const zipFolder = ignoreFolder ? parentFolder : parentFolder.folder(folder.name);
  if (zipFolder !== null) {
    folder.files.forEach((file2) => {
      const options = {};
      const fileName = file2.ext ? `${file2.name}.${file2.ext}` : file2.name;
      zipFolder.file(fileName, file2.content, options);
    });
    folder.dirs.forEach((subFolder) => {
      writeFolderToZip(subFolder, zipFolder);
    });
  }
  return parentFolder;
};

// src/publisher/zip/index.ts
var import_file_saver = require("file-saver");
var createZipPublisher = (params = {}) => {
  let { project, outputPath } = params;
  const getProject = () => project;
  const setProject = (projectToSet) => {
    project = projectToSet;
  };
  const getOutputPath = () => outputPath;
  const setOutputPath = (path) => {
    outputPath = path;
  };
  const publish = async (options = {}) => {
    const projectToPublish = options.project || project;
    if (!projectToPublish) {
      throw new PublisherError("MissingProject");
    }
    const zipName = options.projectSlug || params.projectSlug || projectToPublish.name;
    try {
      console.log("45 lowcode projectToPublish: ", projectToPublish);
      const zipContent = await generateProjectZip(projectToPublish);
      console.log("46 lowcode zipContent: ", zipContent);
      console.log("47 lowcode isNodeProcess: ", isNodeProcess());
      if (isNodeProcess()) {
        const projectOutputPath = options.outputPath || outputPath;
        if (projectOutputPath) {
          await writeZipToDisk(projectOutputPath, zipContent, zipName);
        }
      } else {
        (0, import_file_saver.saveAs)(zipContent, `${zipName}.zip`);
      }
      return { success: true, payload: zipContent };
    } catch (error) {
      throw new PublisherError(getErrorMessage(error) || "UnknownError");
    }
  };
  return {
    publish,
    getProject,
    setProject,
    getOutputPath,
    setOutputPath
  };
};

// src/plugins/common/esmodule.ts
var import_lodash = require("lodash");
var DEP_MAIN_BLOCKLIST = ["lib", "lib/index", "es", "es/index", "main"];
var DEFAULT_EXPORT_NAME = "__default__";
function groupDepsByPack(deps) {
  const depMap = {};
  const addDep = (pkg, dep) => {
    if (!depMap[pkg]) {
      depMap[pkg] = [];
    }
    depMap[pkg].push(dep);
  };
  deps.forEach((dep) => {
    if (dep.dependencyType === "Internal" /* Internal */) {
      addDep(`${dep.moduleName}${dep.main ? `/${dep.main}` : ""}`, dep);
    } else {
      let depMain = "";
      if (dep.main && DEP_MAIN_BLOCKLIST.indexOf(dep.main) < 0) {
        depMain = dep.main;
      }
      if (depMain.substring(0, 1) === "/") {
        depMain = depMain.substring(1);
      }
      addDep(`${dep.package}${depMain ? `/${depMain}` : ""}`, dep);
    }
  });
  return depMap;
}
function getDependencyIdentifier(info) {
  return info.aliasName || info.exportName;
}
function getExportNameOfDep(dep) {
  if (dep.destructuring) {
    return dep.exportName || dep.componentName || throwNewError("destructuring dependency must have exportName or componentName");
  }
  if (!dep.subName) {
    return dep.componentName || dep.exportName || throwNewError("dependency item must have componentName or exportName");
  }
  return dep.exportName || `__$${(0, import_lodash.camelCase)(
    (0, import_lodash.get)(dep, "moduleName") || (0, import_lodash.get)(dep, "package") || throwNewError("dep.moduleName or dep.package is undefined")
  )}_default`;
}
function throwNewError(msg) {
  throw new Error(msg);
}
function buildPackageImport(pkg, deps, targetFileType, useAliasName) {
  if (!pkg || pkg === "undefined" || pkg === "null") {
    return [];
  }
  const chunks = [];
  const exportItems = {};
  const defaultExportNames = [];
  const depsInfo = deps.map((dep) => {
    const info = {
      exportName: getExportNameOfDep(dep),
      isDefault: !dep.destructuring,
      subName: dep.subName || void 0,
      nodeIdentifier: dep.componentName || void 0,
      source: dep
    };
    if (info.isDefault) {
      if (defaultExportNames.indexOf(info.exportName) < 0) {
        defaultExportNames.push(info.exportName);
      }
    }
    if (!info.subName) {
      if (info.nodeIdentifier === info.exportName) {
        info.nodeIdentifier = void 0;
      }
      if (info.isDefault) {
        info.aliasName = info.nodeIdentifier || info.exportName;
        info.exportName = DEFAULT_EXPORT_NAME;
      }
      if (info.nodeIdentifier) {
        info.aliasName = info.nodeIdentifier;
        info.nodeIdentifier = void 0;
      }
    } else {
      if (info.isDefault) {
        info.aliasName = info.exportName;
        info.exportName = DEFAULT_EXPORT_NAME;
      }
      if (info.nodeIdentifier === `${info.exportName}.${info.subName}`) {
        info.nodeIdentifier = void 0;
      }
    }
    return info;
  });
  depsInfo.forEach((info) => {
    if (!exportItems[info.exportName]) {
      exportItems[info.exportName] = {
        exportName: info.exportName,
        isDefault: info.isDefault,
        aliasNames: [],
        needOriginExport: false
      };
    }
    if (!info.nodeIdentifier && !info.aliasName) {
      exportItems[info.exportName].needOriginExport = true;
    }
  });
  depsInfo.forEach((info) => {
    if (info.aliasName) {
      const { aliasNames } = exportItems[info.exportName];
      if (aliasNames.indexOf(info.aliasName) < 0) {
        aliasNames.push(info.aliasName);
      }
    }
  });
  depsInfo.forEach((info) => {
    if (info.nodeIdentifier) {
      const exportItem = exportItems[info.exportName];
      if (!exportItem.needOriginExport && exportItem.aliasNames.length > 0) {
        info.aliasName = exportItem.aliasNames[0];
      }
    }
  });
  const nodeIdentifiers = depsInfo.map((info) => info.nodeIdentifier).filter(Boolean);
  const conflictInfos = (0, import_lodash.flatMap)(Object.keys(exportItems), (exportName) => {
    const exportItem = exportItems[exportName];
    const usedNames = [
      ...exportItem.aliasNames,
      ...exportItem.needOriginExport || exportItem.aliasNames.length <= 0 ? [exportName] : []
    ];
    const conflictNames = usedNames.filter((n) => nodeIdentifiers.indexOf(n) >= 0);
    if (conflictNames.length > 0) {
      return [
        ...conflictNames.indexOf(exportName) >= 0 ? [[exportName, true, exportItem]] : [],
        ...conflictNames.filter((n) => n !== exportName).map((n) => [n, false, exportItem])
      ];
    }
    return [];
  });
  const conflictExports = conflictInfos.filter((c) => c[1]).map((c) => c[0]);
  const conflictAlias = conflictInfos.filter((c) => !c[1]).map((c) => c[0]);
  const solutions = {};
  depsInfo.forEach((info) => {
    if (info.aliasName && conflictAlias.indexOf(info.aliasName) >= 0) {
      let solution = solutions[info.aliasName];
      if (!solution) {
        solution = `${info.aliasName}Alias`;
        const conflictItem = (conflictInfos.find((c) => c[0] === info.aliasName) || [])[2];
        conflictItem.aliasNames = conflictItem.aliasNames.filter((a) => a !== info.aliasName);
        conflictItem.aliasNames.push(solution);
        solutions[info.aliasName] = solution;
      }
      info.aliasName = solution;
    }
    if (conflictExports.indexOf(info.exportName) >= 0) {
      let solution = solutions[info.exportName];
      if (!solution) {
        solution = `${info.exportName}Export`;
        const conflictItem = (conflictInfos.find((c) => c[0] === info.exportName) || [])[2];
        conflictItem.aliasNames.push(solution);
        conflictItem.needOriginExport = false;
        solutions[info.exportName] = solution;
      }
      info.aliasName = solution;
    }
  });
  depsInfo.forEach((info) => {
    const name = info.aliasName || info.exportName;
    if (!isValidIdentifier(name)) {
      throw new CodeGeneratorError(`Invalid Identifier [${name}]`);
    }
    if (info.nodeIdentifier && !isValidIdentifier(info.nodeIdentifier)) {
      throw new CodeGeneratorError(`Invalid Identifier [${info.nodeIdentifier}]`);
    }
  });
  const aliasDefineStatements = {};
  if (useAliasName) {
    Object.keys(exportItems).forEach((exportName) => {
      var _a;
      const aliasList = ((_a = exportItems[exportName]) == null ? void 0 : _a.aliasNames) || [];
      if (aliasList.length > 0) {
        const srcName = exportItems[exportName].needOriginExport ? exportName : aliasList[0];
        const aliasNameList = exportItems[exportName].needOriginExport ? aliasList : aliasList.slice(1);
        aliasNameList.forEach((a) => {
          if (!aliasDefineStatements[a]) {
            aliasDefineStatements[a] = `const ${a} = ${srcName};`;
          }
        });
      }
    });
  }
  function getDefaultExportName(info) {
    if (info.isDefault) {
      return defaultExportNames[0];
    }
    return info.exportName;
  }
  depsInfo.forEach((info) => {
    if (info.nodeIdentifier) {
      const ownerName = getDependencyIdentifier(info);
      chunks.push({
        type: "string" /* STRING */,
        fileType: targetFileType,
        name: COMMON_CHUNK_NAME.ImportAliasDefine,
        content: useAliasName ? `const ${info.nodeIdentifier} = ${ownerName}.${info.subName};` : "",
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport, COMMON_CHUNK_NAME.InternalDepsImport],
        ext: {
          originalName: `${getDefaultExportName(info)}.${info.subName}`,
          aliasName: info.nodeIdentifier,
          dependency: info.source
        }
      });
    } else if (info.aliasName) {
      if (info.isDefault && defaultExportNames.find((n) => n === info.aliasName)) {
        delete aliasDefineStatements[info.aliasName];
        return;
      }
      let contentStatement = "";
      if (aliasDefineStatements[info.aliasName]) {
        contentStatement = aliasDefineStatements[info.aliasName];
        delete aliasDefineStatements[info.aliasName];
      }
      chunks.push({
        type: "string" /* STRING */,
        fileType: targetFileType,
        name: COMMON_CHUNK_NAME.ImportAliasDefine,
        content: contentStatement,
        linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport, COMMON_CHUNK_NAME.InternalDepsImport],
        ext: {
          originalName: getDefaultExportName(info),
          aliasName: info.aliasName,
          dependency: info.source
        }
      });
    }
  });
  Object.keys(aliasDefineStatements).forEach((a) => {
    chunks.push({
      type: "string" /* STRING */,
      fileType: targetFileType,
      name: COMMON_CHUNK_NAME.ImportAliasDefine,
      content: aliasDefineStatements[a],
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport, COMMON_CHUNK_NAME.InternalDepsImport]
    });
  });
  const exportItemList = Object.keys(exportItems).map((k) => exportItems[k]);
  const defaultExport = exportItemList.filter((item) => item.isDefault);
  const otherExports = exportItemList.filter((item) => !item.isDefault);
  const statementL = ["import"];
  if (defaultExport.length > 0) {
    if (useAliasName) {
      statementL.push(defaultExportNames[0]);
    } else {
      statementL.push(defaultExport[0].aliasNames[0]);
    }
    if (otherExports.length > 0) {
      statementL.push(", ");
    }
  }
  if (otherExports.length > 0) {
    const items = otherExports.map((item) => {
      return !useAliasName || item.needOriginExport || item.aliasNames.length <= 0 ? item.exportName : `${item.exportName} as ${item.aliasNames[0]}`;
    });
    statementL.push(`{ ${items.join(", ")} }`);
  }
  statementL.push("from");
  const getInternalDependencyModuleId = () => `@/${deps[0].type}/${pkg}`;
  if (deps[0].dependencyType === "Internal" /* Internal */) {
    statementL.push(`'${getInternalDependencyModuleId()}';`);
    chunks.push({
      type: "string" /* STRING */,
      fileType: targetFileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: statementL.join(" "),
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
  } else {
    statementL.push(`'${pkg}';`);
    chunks.push({
      type: "string" /* STRING */,
      fileType: targetFileType,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: statementL.join(" "),
      linkAfter: []
    });
  }
  if (defaultExportNames.length > 1) {
    if (deps[0].dependencyType === "Internal" /* Internal */) {
      defaultExportNames.slice(1).forEach((exportName) => {
        chunks.push({
          type: "string" /* STRING */,
          fileType: targetFileType,
          name: COMMON_CHUNK_NAME.InternalDepsImport,
          content: `import ${exportName} from '${getInternalDependencyModuleId()}';`,
          linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
        });
      });
    } else {
      defaultExportNames.slice(1).forEach((exportName) => {
        chunks.push({
          type: "string" /* STRING */,
          fileType: targetFileType,
          name: COMMON_CHUNK_NAME.ExternalDepsImport,
          content: `import ${exportName} from '${pkg}';`,
          linkAfter: []
        });
        chunks.push({
          type: "string" /* STRING */,
          fileType: targetFileType,
          name: COMMON_CHUNK_NAME.ImportAliasDefine,
          content: "",
          linkAfter: [],
          ext: {
            aliasName: exportName,
            originalName: exportName,
            dependency: {
              package: pkg,
              componentName: exportName
            }
          }
        });
      });
    }
  }
  return chunks;
}
var pluginFactory = (config) => {
  const cfg = {
    fileType: "js" /* JS */,
    useAliasName: true,
    ...config || {}
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    if (ir && ir.deps && ir.deps.length > 0) {
      const deps = cfg.filter ? cfg.filter(ir.deps) : ir.deps;
      const packs = groupDepsByPack(deps);
      Object.keys(packs).forEach((pkg) => {
        const chunks = buildPackageImport(pkg, packs[pkg], cfg.fileType, cfg.useAliasName);
        next.chunks.push(...chunks);
      });
    }
    return next;
  };
  return plugin;
};
var esmodule_default = pluginFactory;

// src/plugins/common/styleImport.ts
var import_change_case3 = __toESM(require("change-case"));
var pluginFactory2 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const { chunks } = next;
    if (ir && ir.deps && ir.deps.length > 0) {
      let lowcodeMaterialsStyleAdded = false;
      let fusionUIStyleAdded = false;
      let nextStyleAddedMap = {};
      ir.deps.forEach((dep) => {
        if (dep.package === "@alifd/next" && !nextStyleAddedMap[dep.exportName]) {
          chunks.push({
            type: "string" /* STRING */,
            fileType: "jsx" /* JSX */,
            name: COMMON_CHUNK_NAME.InternalDepsImport,
            content: `import '@alifd/next/lib/${import_change_case3.default.paramCase(dep.exportName)}/style';`,
            linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
          });
          nextStyleAddedMap[dep.exportName] = true;
        } else if (dep.package === "@alilc/lowcode-materials" && !lowcodeMaterialsStyleAdded) {
          chunks.push({
            type: "string" /* STRING */,
            fileType: "jsx" /* JSX */,
            name: COMMON_CHUNK_NAME.InternalDepsImport,
            content: "import '@alilc/lowcode-materials/lib/style';",
            linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
          });
          lowcodeMaterialsStyleAdded = true;
        } else if (dep.package === "@alifd/fusion-ui" && !fusionUIStyleAdded) {
          chunks.push({
            type: "string" /* STRING */,
            fileType: "jsx" /* JSX */,
            name: COMMON_CHUNK_NAME.InternalDepsImport,
            content: "import '@alifd/fusion-ui/lib/style';",
            linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
          });
          fusionUIStyleAdded = true;
        }
      });
    }
    return next;
  };
  return plugin;
};
var styleImport_default = pluginFactory2;

// src/plugins/component/react/containerClass.ts
var import_change_case4 = __toESM(require("change-case"));

// src/plugins/component/react/const.ts
var REACT_CHUNK_NAME = {
  ClassRenderStart: "ReactComponentClassRenderStart",
  ClassRenderPre: "ReactComponentClassRenderPre",
  ClassRenderEnd: "ReactComponentClassRenderEnd",
  ClassRenderJSX: "ReactComponentClassRenderJSX",
  ClassDidMountStart: "ReactComponentClassDidMountStart",
  ClassDidMountEnd: "ReactComponentClassDidMountEnd",
  ClassDidMountContent: "ReactComponentClassDidMountContent"
};

// src/plugins/component/react/containerClass.ts
var pluginFactory3 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const componentClassName = ensureValidClassName(
      `${import_change_case4.default.pascalCase(ir.moduleName)}$$${ir.containerType}`
    );
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.Start,
      content: `class ${componentClassName} extends React.Component {`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    if (ir.containerType === "Component") {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `static displayName = '${ir.moduleName}';`,
        linkAfter: [
          CLASS_DEFINE_CHUNK_NAME.Start
        ]
      });
    }
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.End,
      content: "}",
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.ClassRenderEnd,
        REACT_CHUNK_NAME.ClassDidMountEnd
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
      content: "constructor(props, context) { super(props); ",
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart]]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
      content: "}",
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorEnd]]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: REACT_CHUNK_NAME.ClassDidMountStart,
      content: "componentDidMount() {",
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End]]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: REACT_CHUNK_NAME.ClassDidMountEnd,
      content: "}",
      linkAfter: [REACT_CHUNK_NAME.ClassDidMountContent, REACT_CHUNK_NAME.ClassDidMountStart]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: REACT_CHUNK_NAME.ClassRenderStart,
      content: "render() {",
      linkAfter: [
        ...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.End],
        REACT_CHUNK_NAME.ClassDidMountEnd
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: REACT_CHUNK_NAME.ClassRenderEnd,
      content: "}",
      linkAfter: [
        REACT_CHUNK_NAME.ClassRenderStart,
        REACT_CHUNK_NAME.ClassRenderPre,
        REACT_CHUNK_NAME.ClassRenderJSX
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `export default ${componentClassName};`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        CLASS_DEFINE_CHUNK_NAME.End
      ]
    });
    return next;
  };
  return plugin;
};
var containerClass_default = pluginFactory3;

// src/utils/compositeType.ts
var compositeType_exports = {};
__export(compositeType_exports, {
  generateCompositeType: () => generateCompositeType
});
var import_lowcode_types4 = require("@alilc/lowcode-types");
var import_lodash2 = __toESM(require("lodash"));

// src/utils/jsExpression.ts
var jsExpression_exports = {};
__export(jsExpression_exports, {
  generateExpression: () => generateExpression,
  generateFunction: () => generateFunction,
  isBroadJSFunction: () => isBroadJSFunction
});
var parser2 = __toESM(require("@babel/parser"));
var import_generator7 = __toESM(require("@babel/generator"));
var import_traverse2 = __toESM(require("@babel/traverse"));
var t2 = __toESM(require("@babel/types"));
var import_lowcode_types2 = require("@alilc/lowcode-types");

// src/utils/expressionParser.ts
var expressionParser_exports = {};
__export(expressionParser_exports, {
  ParseError: () => ParseError,
  parseExpression: () => parseExpression2,
  parseExpressionConvertThis2Context: () => parseExpressionConvertThis2Context,
  parseExpressionGetGlobalVariables: () => parseExpressionGetGlobalVariables,
  parseExpressionGetKeywords: () => parseExpressionGetKeywords,
  transformExpressionLocalRef: () => transformExpressionLocalRef
});
var parser = __toESM(require("@babel/parser"));
var import_generator6 = __toESM(require("@babel/generator"));
var import_traverse = __toESM(require("@babel/traverse"));
var t = __toESM(require("@babel/types"));
var import_types10 = require("@babel/types");

// src/utils/OrderedSet.ts
var OrderedSet = class {
  constructor(items) {
    __publicField(this, "_set", /* @__PURE__ */ new Set());
    __publicField(this, "_arr", []);
    if (items) {
      this._set = new Set(items);
      this._arr = items.slice(0);
    }
  }
  add(item) {
    if (!this._set.has(item)) {
      this._set.add(item);
      this._arr.push(item);
    }
  }
  delete(item) {
    if (this._set.has(item)) {
      this._set.delete(item);
      this._arr.splice(this._arr.indexOf(item), 1);
    }
  }
  has(item) {
    return this._set.has(item);
  }
  toArray() {
    return this._arr.slice(0);
  }
};

// src/utils/expressionParser.ts
var ParseError = class extends Error {
  constructor(expr, detail) {
    super(`Failed to parse expression "${typeof expr === "string" ? expr : (0, import_generator6.default)(expr)}"`);
    __publicField(this, "expr");
    __publicField(this, "detail");
    this.expr = expr;
    this.detail = detail;
    Object.setPrototypeOf(this, new.target.prototype);
  }
};
var MAYBE_EXPRESSIONS = {
  ArrayExpression: { fields: ["elements"] },
  AssignmentExpression: { fields: ["left", "right"] },
  BinaryExpression: { fields: ["left", "right"] },
  CallExpression: { fields: ["arguments", "callee"] },
  ConditionalExpression: { fields: ["test", "consequent", "alternate"] },
  DoWhileStatement: { fields: ["test"] },
  ExpressionStatement: { fields: ["expression"] },
  ForInStatement: { fields: ["right"] },
  ForStatement: { fields: ["init", "test", "update"] },
  IfStatement: { fields: ["test"] },
  LogicalExpression: { fields: ["left", "right"] },
  MemberExpression: {
    fields: (node) => {
      return node.type === "MemberExpression" && node.computed ? ["object", "property"] : ["object"];
    }
  },
  NewExpression: { fields: ["callee", "arguments"] },
  ObjectMethod: {
    fields: (node) => {
      return node.type === "ObjectMethod" && node.computed ? ["key"] : [];
    }
  },
  ObjectProperty: {
    fields: (node) => {
      return node.type === "ObjectProperty" && node.computed ? ["key", "value"] : ["value"];
    }
  },
  ReturnStatement: { fields: ["argument"] },
  SequenceExpression: { fields: ["expressions"] },
  ParenthesizedExpression: { fields: ["expression"] },
  SwitchCase: { fields: ["test"] },
  SwitchStatement: { fields: ["discriminant"] },
  ThrowStatement: { fields: ["argument"] },
  UnaryExpression: { fields: ["argument"] },
  UpdateExpression: { fields: ["argument"] },
  VariableDeclarator: { fields: ["init"] },
  WhileStatement: { fields: ["test"] },
  WithStatement: { fields: ["object"] },
  AssignmentPattern: { fields: ["right"] },
  ArrowFunctionExpression: { fields: ["body"] },
  ClassExpression: { fields: ["superClass"] },
  ClassDeclaration: { fields: ["superClass"] },
  ExportDefaultDeclaration: { fields: ["declaration"] },
  ForOfStatement: { fields: ["right"] },
  ClassMethod: {
    fields: (node) => {
      return node.type === "ClassMethod" && node.computed ? ["key"] : [];
    }
  },
  SpreadElement: { fields: ["argument"] },
  TaggedTemplateExpression: { fields: ["tag"] },
  TemplateLiteral: { fields: ["expressions"] },
  YieldExpression: { fields: ["argument"] },
  AwaitExpression: { fields: ["argument"] },
  OptionalMemberExpression: {
    fields: (node) => {
      return node.type === "OptionalMemberExpression" && node.computed ? ["object", "property"] : ["object"];
    }
  },
  OptionalCallExpression: { fields: ["callee", "arguments"] },
  JSXSpreadAttribute: { fields: ["argument"] },
  BindExpression: { fields: ["object", "callee"] },
  ClassProperty: {
    fields: (node) => {
      return node.type === "ClassProperty" && node.computed ? ["key", "value"] : ["value"];
    }
  },
  PipelineTopicExpression: { fields: ["expression"] },
  PipelineBareFunction: { fields: ["callee"] },
  ClassPrivateProperty: { fields: ["value"] },
  Decorator: { fields: ["expression"] },
  TupleExpression: { fields: ["elements"] },
  TSDeclareMethod: {
    fields: (node) => {
      return node.type === "TSDeclareMethod" && node.computed ? ["key"] : [];
    }
  },
  TSPropertySignature: {
    fields: (node) => {
      return node.type === "TSPropertySignature" && node.computed ? ["key", "initializer"] : ["initializer"];
    }
  },
  TSMethodSignature: {
    fields: (node) => {
      return node.type === "TSMethodSignature" && node.computed ? ["key"] : [];
    }
  },
  TSAsExpression: { fields: ["expression"] },
  TSTypeAssertion: { fields: ["expression"] },
  TSEnumDeclaration: { fields: ["initializer"] },
  TSEnumMember: { fields: ["initializer"] },
  TSNonNullExpression: { fields: ["expression"] },
  TSExportAssignment: { fields: ["expression"] }
};
var CROSS_THIS_SCOPE_TYPE_NODE = {
  ArrowFunctionExpression: false,
  FunctionExpression: true,
  FunctionDeclaration: true,
  ClassDeclaration: true,
  ClassExpression: true,
  ClassBody: true,
  ClassImplements: true,
  ClassMethod: true,
  ClassPrivateMethod: true,
  ClassProperty: true,
  ClassPrivateProperty: true,
  DeclareClass: true
};
var JS_KEYWORDS = ["arguments", "this", "super"];
function parseExpressionGetKeywords(expr) {
  if (!expr) {
    return [];
  }
  try {
    const keywordVars = new OrderedSet();
    const ast = parser.parse(`!(${expr});`, {
      plugins: [
        "jsx"
      ]
    });
    const addIdentifierIfNeeded = (x) => {
      if (typeof x === "object" && (0, import_types10.isIdentifier)(x) && JS_KEYWORDS.includes(x.name)) {
        keywordVars.add(x.name);
      }
    };
    (0, import_traverse.default)(ast, {
      enter(path) {
        var _a;
        const { node } = path;
        const expressionFields = (_a = MAYBE_EXPRESSIONS[node.type]) == null ? void 0 : _a.fields;
        if (expressionFields) {
          (typeof expressionFields === "function" ? expressionFields(node) : expressionFields).forEach((fieldName) => {
            const fieldValue = node[fieldName];
            if (typeof fieldValue === "object") {
              if (Array.isArray(fieldValue)) {
                fieldValue.forEach((item) => {
                  addIdentifierIfNeeded(item);
                });
              } else {
                addIdentifierIfNeeded(fieldValue);
              }
            }
          });
        }
      }
    });
    return keywordVars.toArray().filter(Boolean);
  } catch (e) {
    throw new ParseError(expr, e);
  }
}
function parseExpressionGetGlobalVariables(expr, { filter = () => true } = {}) {
  if (!expr) {
    return [];
  }
  try {
    const undeclaredVars = new OrderedSet();
    const ast = parser.parse(`!(${expr});`);
    const addUndeclaredIdentifierIfNeeded = (x, path) => {
      if (typeof x === "object" && (0, import_types10.isIdentifier)(x) && !path.scope.hasBinding(x.name)) {
        undeclaredVars.add(x.name);
      }
    };
    (0, import_traverse.default)(ast, {
      enter(path) {
        var _a;
        const { node } = path;
        const expressionFields = (_a = MAYBE_EXPRESSIONS[node.type]) == null ? void 0 : _a.fields;
        if (expressionFields) {
          (typeof expressionFields === "function" ? expressionFields(node) : expressionFields).forEach((fieldName) => {
            const fieldValue = node[fieldName];
            if (typeof fieldValue === "object") {
              if (Array.isArray(fieldValue)) {
                fieldValue.forEach((item) => {
                  addUndeclaredIdentifierIfNeeded(item, path);
                });
              } else {
                addUndeclaredIdentifierIfNeeded(fieldValue, path);
              }
            }
          });
        }
      }
    });
    return undeclaredVars.toArray().filter(filter);
  } catch (e) {
    throw new ParseError(expr, e);
  }
}
function parseExpressionConvertThis2Context(expr, contextName = "__$$context", localVariables = []) {
  if (!expr) {
    return expr;
  }
  try {
    const exprAst = typeof expr === "string" ? parser.parseExpression(expr) : expr;
    const exprWrapAst = t.expressionStatement(exprAst);
    const fileAst = t.file(t.program([exprWrapAst]));
    const localVariablesSet = new Set(localVariables);
    let thisScopeLevel = CROSS_THIS_SCOPE_TYPE_NODE[exprAst.type] ? -1 : 0;
    (0, import_traverse.default)(fileAst, {
      enter(path) {
        if (CROSS_THIS_SCOPE_TYPE_NODE[path.node.type]) {
          thisScopeLevel++;
        }
      },
      exit(path) {
        if (CROSS_THIS_SCOPE_TYPE_NODE[path.node.type]) {
          thisScopeLevel--;
        }
      },
      MemberExpression(path) {
        if (!path.isMemberExpression()) {
          return;
        }
        const obj = path.get("object");
        if (!obj.isThisExpression()) {
          return;
        }
        if (!path.node.computed) {
          const prop = path.get("property");
          if (prop.isIdentifier() && localVariablesSet.has(prop.node.name)) {
            path.replaceWith(t.identifier(prop.node.name));
            return;
          }
        }
        if (thisScopeLevel <= 0) {
          obj.replaceWith(t.identifier(contextName));
        }
      },
      ThisExpression(path) {
        if (!path.isThisExpression()) {
          return;
        }
        if (path.parent.type === "MemberExpression") {
          return;
        }
        if (thisScopeLevel <= 0) {
          path.replaceWith(t.identifier(contextName));
        }
      }
    });
    const { code } = (0, import_generator6.default)(exprWrapAst.expression, { sourceMaps: false });
    return code;
  } catch (e) {
    throw new ParseError(expr, e);
  }
}
function parseExpression2(expr) {
  try {
    return parser.parseExpression(expr);
  } catch (e) {
    throw new ParseError(expr, e);
  }
}
function transformExpressionLocalRef(expr, scope) {
  if (!expr) {
    return expr;
  }
  if (!scope) {
    throw new Error("transform expression without scope");
  }
  try {
    const exprAst = typeof expr === "string" ? parser.parseExpression(expr) : expr;
    const exprWrapAst = t.expressionStatement(exprAst);
    const fileAst = t.file(t.program([exprWrapAst]));
    (0, import_traverse.default)(fileAst, {
      MemberExpression(path) {
        if (!path.isMemberExpression()) {
          return;
        }
        const obj = path.get("object");
        if (!obj.isThisExpression()) {
          return;
        }
        const prop = path.get("property");
        let memberName = "";
        if (!path.node.computed && prop.isIdentifier()) {
          memberName = prop.node.name;
        } else if (path.node.computed && prop.isStringLiteral()) {
          memberName = prop.node.value;
        }
        if (memberName && scope.bindings && scope.bindings.hasBinding(memberName)) {
          path.replaceWith(t.identifier(memberName));
        }
      }
    });
    const { code } = (0, import_generator6.default)(exprWrapAst.expression, { sourceMaps: false });
    return code;
  } catch (e) {
    throw new ParseError(expr, e);
  }
}

// src/utils/jsExpression.ts
function parseFunction(content) {
  try {
    const ast = parser2.parse(`(${content});`, {
      plugins: [
        "jsx"
      ]
    });
    let resultNode = null;
    (0, import_traverse2.default)(ast, {
      FunctionExpression(path) {
        resultNode = path.node;
        path.stop();
      }
    });
    return resultNode;
  } catch (e) {
    throw new ParseError(content, e);
  }
}
function transformFuncExpr2MethodMember(methodName, content) {
  const funcNode = parseFunction(content);
  if (funcNode) {
    const targetNode = t2.classMethod(
      "method",
      methodName && t2.identifier(methodName) || funcNode.id || t2.identifier("notDefineName"),
      funcNode.params,
      funcNode.body,
      void 0,
      void 0,
      void 0,
      funcNode.async || void 0
    );
    const { code: resultCode } = (0, import_generator7.default)(targetNode, { sourceMaps: false });
    return resultCode;
  }
  throw new Error("Can not find Function Statement");
}
function getArrowFunction(content) {
  const funcNode = parseFunction(content);
  if (funcNode) {
    const targetNode = t2.arrowFunctionExpression(
      funcNode.params,
      funcNode.body,
      funcNode.async || void 0
    );
    const { code: resultCode } = (0, import_generator7.default)(targetNode, { sourceMaps: false });
    return resultCode;
  }
  throw new Error("Can not find Function Statement");
}
function getBodyStatements(content) {
  const funcNode = parseFunction(content);
  if (funcNode) {
    const statements = funcNode.body.body;
    const targetNode = t2.program(statements, void 0, "module", void 0);
    const { code: resultCode } = (0, import_generator7.default)(targetNode, { sourceMaps: false });
    return resultCode;
  }
  throw new Error("Can not find Function Statement");
}
function isBroadJSFunction(value) {
  return isJSExpressionFn(value) || (0, import_lowcode_types2.isJSFunction)(value);
}
function generateExpression(value, scope) {
  if ((0, import_lowcode_types2.isJSExpression)(value)) {
    const exprVal = value.value.trim();
    if (!exprVal) {
      return "null";
    }
    const afterProcessWithLocals = transformExpressionLocalRef(exprVal, scope);
    return afterProcessWithLocals;
  }
  throw new CodeGeneratorError("Not a JSExpression");
}
function getFunctionSource(cfg) {
  return cfg.source || cfg.value || cfg.compiled;
}
function generateFunction(value, config = {
  name: void 0,
  isMember: false,
  isBlock: false,
  isArrow: false,
  isBindExpr: false
}) {
  if (isBroadJSFunction(value)) {
    const functionCfg = value;
    const functionSource = getFunctionSource(functionCfg);
    if (config.isMember) {
      return transformFuncExpr2MethodMember(config.name || "", functionSource);
    }
    if (config.isBlock) {
      return getBodyStatements(functionSource);
    }
    if (config.isArrow) {
      return getArrowFunction(functionSource);
    }
    if (config.isBindExpr) {
      return `(${functionSource}).bind(this)`;
    }
    return functionSource;
  }
  if ((0, import_lowcode_types2.isJSExpression)(value)) {
    return value.value;
  }
  throw new CodeGeneratorError("Not a JSFunction or JSExpression");
}

// src/utils/jsSlot.ts
var jsSlot_exports = {};
__export(jsSlot_exports, {
  generateJsSlot: () => generateJsSlot
});
var import_lowcode_types3 = require("@alilc/lowcode-types");

// src/utils/jsxHelpers.ts
function unwrapJsExprQuoteInJsx(jsxExpr) {
  if (jsxExpr.length >= 2 && jsxExpr[0] === "{" && jsxExpr[jsxExpr.length - 1] === "}") {
    return jsxExpr.slice(1, jsxExpr.length - 1);
  }
  return jsxExpr;
}

// src/utils/jsSlot.ts
function generateSingleLineComment(commentText) {
  return `/* ${commentText.split("\n").join(" ").replace(/\*\//g, "*-/")}*/`;
}
function generateJsSlot(slot, scope, generator) {
  if ((0, import_lowcode_types3.isJSSlot)(slot)) {
    const { title, params, value } = slot;
    const slotScope = params ? scope.createSubScope(params || []) : scope;
    const contentExpr = !value ? "null" : generateNodeDataOrArrayForJsSlot(value, generator, slotScope);
    if (params) {
      return [
        title && generateSingleLineComment(title),
        "(",
        (params || []).join(", "),
        ") => ((__$$context) => (",
        contentExpr,
        "))(",
        `  __$$createChildContext(__$$context, { ${(params || []).join(", ")} }`,
        "))"
      ].filter(Boolean).join("");
    }
    return contentExpr || "[]";
  }
  throw new CodeGeneratorError("Not a JSSlot");
}
function generateNodeDataOrArrayForJsSlot(value, generator, scope) {
  if (Array.isArray(value)) {
    if (value.length === 0) {
      return "[]";
    }
    if (value.length === 1) {
      return unwrapJsExprQuoteInJsx(generator(value, scope)) || "null";
    }
    return `[
${value.map((v) => {
      if (typeof v === "string") {
        return JSON.stringify(v);
      }
      return unwrapJsExprQuoteInJsx(generator(v, scope)) || "null";
    }).join(",\n") || "null"}
]`;
  }
  return unwrapJsExprQuoteInJsx(generator(value, scope)) || "null";
}

// src/utils/aopHelper.ts
function executeFunctionStack(input, scope, funcs, baseFunc, config) {
  const funcList = [];
  if (Array.isArray(funcs)) {
    funcList.push(...funcs);
  } else {
    funcList.push(funcs);
  }
  let next = baseFunc;
  while (funcList.length > 0) {
    const func = funcList.pop();
    if (func) {
      const warppedFunc = ((nextFunc) => (i, s, cfg) => func(i, s, cfg, nextFunc))(next);
      next = warppedFunc;
    }
  }
  return next(input, scope, config);
}

// src/utils/compositeType.ts
function isVariable(v) {
  if (import_lodash2.default.isObject(v) && v.type === "variable") {
    return true;
  }
  return false;
}
function isDataSource(v) {
  return typeof v === "object" && v != null && v.type === "DataSource";
}
function generateArray(value, scope, options = {}) {
  const body = value.map((v) => generateUnknownType(v, scope, options)).join(",");
  return `[${body}]`;
}
function generateObject(value, scope, options = {}) {
  if (value.type === "i18n") {
    if (value.params && typeof value.params === "object") {
      return `this._i18nText(${generateUnknownType(import_lodash2.default.omit(value, "type"), scope, options)})`;
    }
    return `this._i18nText(${JSON.stringify(import_lodash2.default.omit(value, "type"))})`;
  }
  const body = Object.keys(value).map((key) => {
    const propName = JSON.stringify(key);
    const v = generateUnknownType(value[key], scope, options);
    return `${propName}: ${v}`;
  }).join(",\n");
  return `{${body}}`;
}
function generateString(value) {
  return JSON.stringify(value);
}
function generateNumber(value) {
  return String(value);
}
function generateBool(value) {
  return value ? "true" : "false";
}
function genFunction(value) {
  const globalVars = parseExpressionGetKeywords(value.value);
  if (globalVars.includes("arguments")) {
    return generateFunction(value, { isBindExpr: true });
  }
  return generateFunction(value, { isArrow: true });
}
function genJsSlot(value, scope, options = {}) {
  if (options.nodeGenerator) {
    return generateJsSlot(value, scope, options.nodeGenerator);
  }
  return "";
}
function generateUnknownType(value, scope, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  if (import_lodash2.default.isUndefined(value)) {
    return "undefined";
  }
  if (import_lodash2.default.isNull(value)) {
    return "null";
  }
  if (import_lodash2.default.isArray(value)) {
    if ((_a = options.handlers) == null ? void 0 : _a.array) {
      return executeFunctionStack(value, scope, options.handlers.array, generateArray, options);
    }
    return generateArray(value, scope, options);
  }
  if (isVariable(value)) {
    const transValue = {
      type: "JSExpression",
      value: value.variable
    };
    if ((_b = options.handlers) == null ? void 0 : _b.expression) {
      const expression = executeFunctionStack(
        transValue,
        scope,
        options.handlers.expression,
        generateExpression,
        options
      );
      return expression || "undefined";
    }
    return generateExpression(transValue, scope);
  }
  if ((0, import_lowcode_types4.isJSExpression)(value)) {
    if ((_c = options.handlers) == null ? void 0 : _c.expression) {
      return executeFunctionStack(
        value,
        scope,
        options.handlers.expression,
        generateExpression,
        options
      );
    }
    return generateExpression(value, scope);
  }
  if ((0, import_lowcode_types4.isJSFunction)(value) || isJSExpressionFn(value)) {
    if ((_d = options.handlers) == null ? void 0 : _d.function) {
      return executeFunctionStack(value, scope, options.handlers.function, genFunction, options);
    }
    return genFunction(value);
  }
  if ((0, import_lowcode_types4.isJSSlot)(value)) {
    if ((_e = options.handlers) == null ? void 0 : _e.slot) {
      return executeFunctionStack(value, scope, options.handlers.slot, genJsSlot, options);
    }
    return genJsSlot(value, scope, options);
  }
  if (isDataSource(value)) {
    return generateUnknownType(
      {
        type: "JSExpression",
        value: `this.dataSourceMap[${JSON.stringify(value.id)}]`
      },
      scope,
      options
    );
  }
  if (import_lodash2.default.isObject(value)) {
    if ((_f = options.handlers) == null ? void 0 : _f.object) {
      return executeFunctionStack(value, scope, options.handlers.object, generateObject, options);
    }
    return generateObject(value, scope, options);
  }
  if (import_lodash2.default.isString(value)) {
    if ((_g = options.handlers) == null ? void 0 : _g.string) {
      return executeFunctionStack(value, scope, options.handlers.string, generateString, options);
    }
    return generateString(value);
  }
  if (import_lodash2.default.isNumber(value)) {
    if ((_h = options.handlers) == null ? void 0 : _h.number) {
      return executeFunctionStack(value, scope, options.handlers.number, generateNumber, options);
    }
    return generateNumber(value);
  }
  if (import_lodash2.default.isBoolean(value)) {
    if ((_i = options.handlers) == null ? void 0 : _i.boolean) {
      return executeFunctionStack(value, scope, options.handlers.boolean, generateBool, options);
    }
    return generateBool(value);
  }
  throw new CodeGeneratorError("Meet unknown composite value type");
}
function generateCompositeType(value, scope, options = {}) {
  const result = generateUnknownType(value, scope, options);
  return result;
}

// src/utils/Scope.ts
var Scope_exports = {};
__export(Scope_exports, {
  Scope: () => Scope
});

// src/utils/ScopeBindings.ts
var ScopeBindings = class {
  constructor(p = null) {
    __publicField(this, "parent");
    __publicField(this, "_bindings", new OrderedSet());
    this.parent = p;
  }
  hasBinding(varName) {
    var _a;
    return this._bindings.has(varName) || !!((_a = this.parent) == null ? void 0 : _a.hasBinding(varName));
  }
  hasOwnBinding(varName) {
    return this._bindings.has(varName);
  }
  addBinding(varName) {
    this._bindings.add(varName);
  }
  removeBinding(varName) {
    this._bindings.delete(varName);
  }
  getAllBindings() {
    const allBindings = new OrderedSet(this._bindings.toArray());
    for (let { parent } = this; parent; parent = parent == null ? void 0 : parent.parent) {
      parent.getAllOwnedBindings().forEach((varName) => {
        allBindings.add(varName);
      });
    }
    return allBindings.toArray();
  }
  getAllOwnedBindings() {
    return this._bindings.toArray();
  }
};

// src/utils/Scope.ts
var Scope = class {
  constructor(parent = null) {
    this.parent = parent;
    __publicField(this, "bindings");
    this.bindings = void 0;
  }
  static createRootScope() {
    return new Scope();
  }
  createSubScope(ownIdentifiers) {
    const originalScopeBindings = this.bindings;
    const newScopeBindings = new ScopeBindings(originalScopeBindings);
    ownIdentifiers.forEach((identifier3) => {
      newScopeBindings.addBinding(identifier3);
    });
    const newScope = new Scope(this);
    newScope.bindings = newScopeBindings;
    return newScope;
  }
};

// src/plugins/component/react/containerInitState.ts
var pluginFactory4 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    implementType: "inConstructor",
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const scope = Scope.createRootScope();
    const state = ir.state || {};
    const fields = Object.keys(state).map((stateName) => {
      const value = generateCompositeType(state[stateName], scope);
      return `${stateName}: ${value},`;
    });
    if (cfg.implementType === "inConstructor") {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
        content: `this.state = { ${fields.join("")} };`,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
      });
    } else if (cfg.implementType === "insMember") {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `state = { ${fields.join("")} };`,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
      });
    }
    return next;
  };
  return plugin;
};
var containerInitState_default = pluginFactory4;

// src/plugins/component/react/containerInjectContext.ts
var pluginFactory5 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const scope = Scope.createRootScope();
    const { inStrictMode } = next.contextData;
    if (!inStrictMode) {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `
          _context = this;
        `,
        linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
      });
    } else {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `
          _context = this._createContext();
        `,
        linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
        content: `
          _createContext() {
            const self = this;
            const context = {
              get state() { return self.state; },
              setState(newState, callback) { self.setState(newState, callback); },
              get dataSourceMap() { return self._dataSourceEngine.dataSourceMap || {}; },
              async reloadDataSource() { await self._dataSourceEngine.reloadDataSource(); },
              get utils() { return self.utils; },
              get page() { return context; },
              get component() { return context; },
              get props() { return self.props; },
              get constants() { return self.constants; },
              get $() { return self.$ },
              get $$() { return self.$$ },
              ...this._methods,
            };
  
            return context;
          }
        `,
        linkAfter: DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod]
      });
    }
    return next;
  };
  return plugin;
};
var containerInjectContext_default = pluginFactory5;

// src/utils/pathHelper.ts
var pathHelper_exports = {};
__export(pathHelper_exports, {
  getSlotRelativePath: () => getSlotRelativePath
});
function relativePath(from, to) {
  const length = Math.min(from.length, to.length);
  let samePartsLength = length;
  for (let i = 0; i < length; i++) {
    if (from[i] !== to[i]) {
      samePartsLength = i;
      break;
    }
  }
  if (samePartsLength === 0) {
    return to;
  }
  let outputParts = [];
  for (let i = samePartsLength; i < from.length; i++) {
    outputParts.push("..");
  }
  outputParts = [...outputParts, ...to.slice(samePartsLength)];
  if (outputParts[0] !== "..") {
    outputParts.unshift(".");
  }
  return outputParts;
}
function getSlotRelativePath(options) {
  var _a, _b, _c;
  const { contextData, from, to } = options;
  const isSingleComponent = (_b = (_a = contextData == null ? void 0 : contextData.extraContextData) == null ? void 0 : _a.projectRemark) == null ? void 0 : _b.isSingleComponent;
  const template = (_c = contextData == null ? void 0 : contextData.extraContextData) == null ? void 0 : _c.template;
  let toPath = template.slots[to].path;
  toPath = [...toPath, template.slots[to].fileName];
  let fromPath = template.slots[from].path;
  if (!isSingleComponent && ["components", "pages"].indexOf(from) !== -1) {
    fromPath = [...fromPath, "pageName"];
  }
  return relativePath(fromPath, toPath).join("/");
}

// src/plugins/component/react/containerInjectUtils.ts
var pluginFactory6 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    var _a;
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.contextData.useRefApi = true;
    const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
        import utils${useRef ? ", { RefsManager }" : ""} from '${getSlotRelativePath({ contextData: next.contextData, from: "components", to: "utils" })}';
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    if (cfg.preferClassProperty) {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: "utils = utils;",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
      });
    } else {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
        content: "this.utils = utils;",
        linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart]
      });
    }
    if (useRef) {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
        content: "this._refsManager = new RefsManager();",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
        content: `
          $ = (refName) => {
            return this._refsManager.get(refName);
          }
        `,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
        content: `
          $$ = (refName) => {
            return this._refsManager.getAll(refName);
          }
        `,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
      });
    } else {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
        content: " $ = () => null; ",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
        content: " $$ = () => [];        ",
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
      });
    }
    return next;
  };
  return plugin;
};
var containerInjectUtils_default = pluginFactory6;

// src/plugins/component/react/containerInjectDataSourceEngine.ts
var import_lowcode_types5 = require("@alilc/lowcode-types");
var import_change_case5 = __toESM(require("change-case"));
var pluginFactory7 = (config) => {
  const cfg = {
    ...config,
    fileType: (config == null ? void 0 : config.fileType) || "jsx" /* JSX */
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const scope = Scope.createRootScope();
    const dataSourceConfig = isValidContainerType(pre.ir) ? pre.ir.dataSource : null;
    const dataSourceItems = dataSourceConfig && dataSourceConfig.list || [];
    const dataSourceEngineOptions = { runtimeConfig: true };
    if (dataSourceItems.length > 0) {
      const requestHandlersMap = {};
      dataSourceItems.forEach((ds) => {
        var _a, _b;
        const dsType = ds.type || "fetch";
        if (!(dsType in requestHandlersMap) && dsType !== "custom") {
          const handlerFactoryName = `__$$create${import_change_case5.default.pascal(dsType)}RequestHandler`;
          requestHandlersMap[dsType] = {
            type: "JSExpression",
            value: handlerFactoryName + (dsType === "urlParams" ? "(window.location.search)" : "()")
          };
          const handlerFactoryExportName = `create${import_change_case5.default.pascal(dsType)}Handler`;
          const handlerPkgName = ((_b = (_a = cfg.datasourceConfig) == null ? void 0 : _a.handlersPackages) == null ? void 0 : _b[dsType]) || `@alilc/lowcode-datasource-${import_change_case5.default.kebab(dsType)}-handler`;
          next.chunks.push({
            type: "string" /* STRING */,
            fileType: "jsx" /* JSX */,
            name: COMMON_CHUNK_NAME.ExternalDepsImport,
            content: `
              import { ${handlerFactoryExportName} as ${handlerFactoryName} } from '${handlerPkgName}';
            `,
            linkAfter: []
          });
        }
      });
      Object.assign(dataSourceEngineOptions, { requestHandlersMap });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "jsx" /* JSX */,
        name: COMMON_CHUNK_NAME.ExternalDepsImport,
        content: `
          import { create as __$$createDataSourceEngine } from '@alilc/lowcode-datasource-engine/runtime';
        `,
        linkAfter: []
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `
          _dataSourceConfig = this._defineDataSourceConfig();
          _dataSourceEngine = __$$createDataSourceEngine(
            this._dataSourceConfig,
            this,
            ${generateCompositeType(dataSourceEngineOptions, scope)}
          );

          get dataSourceMap() {
            return this._dataSourceEngine.dataSourceMap || {};
          }

          reloadDataSource = async () => {
            await this._dataSourceEngine.reloadDataSource();
          }

          `,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
      });
      next.chunks.unshift({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: REACT_CHUNK_NAME.ClassDidMountContent,
        content: `
          this._dataSourceEngine.reloadDataSource();
        `,
        linkAfter: [REACT_CHUNK_NAME.ClassDidMountStart]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
        content: `
  _defineDataSourceConfig() {
    const _this = this;
    return (${generateCompositeType(
          {
            ...dataSourceConfig,
            list: [
              ...dataSourceItems.map((item) => ({
                ...item,
                isInit: wrapAsFunction(item.isInit, scope),
                options: wrapAsFunction(item.options, scope)
              }))
            ]
          },
          scope,
          {
            handlers: {
              function: (jsFunc) => parseExpressionConvertThis2Context(jsFunc.value, "_this"),
              expression: (jsExpr) => parseExpressionConvertThis2Context(jsExpr.value, "_this")
            }
          }
        )});
  }
        `,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
      });
    }
    return next;
  };
  return plugin;
};
var containerInjectDataSourceEngine_default = pluginFactory7;
function wrapAsFunction(value, scope) {
  if ((0, import_lowcode_types5.isJSExpression)(value) || (0, import_lowcode_types5.isJSFunction)(value) || isJSExpressionFn(value)) {
    return {
      type: "JSExpression",
      value: `function(){ return ((${value.value}))}.bind(this)`
    };
  }
  return {
    type: "JSExpression",
    value: `function(){return((${generateCompositeType(value, scope)}))}.bind(this)`
  };
}

// src/plugins/component/react/containerInjectConstants.ts
var pluginFactory8 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: "import __$$constants from '../../constants';",
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsVar,
      content: `
        get constants() {
          return __$$constants || {};
        }
        `,
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
    });
    return next;
  };
  return plugin;
};
var containerInjectConstants_default = pluginFactory8;

// src/plugins/component/react/containerInjectI18n.ts
var pluginFactory9 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
        import * as __$$i18n from '${getSlotRelativePath({ contextData: next.contextData, from: "components", to: "i18n" })}';
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
      content: `
        __$$i18n._inject2(this);
      `,
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
    });
    return next;
  };
  return plugin;
};
var containerInjectI18n_default = pluginFactory9;

// src/plugins/component/react/containerLifeCycle.ts
var import_lowcode_types6 = require("@alilc/lowcode-types");
var pluginFactory10 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    exportNameMapping: {},
    normalizeNameMapping: {},
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    if (ir.lifeCycles) {
      const { lifeCycles } = ir;
      const chunks = Object.keys(lifeCycles).map((lifeCycleName) => {
        var _a;
        if (!(0, import_lowcode_types6.isJSFunction)(lifeCycles[lifeCycleName]) && !isJSExpressionFn(lifeCycles[lifeCycleName]) && !(0, import_lowcode_types6.isJSExpression)(lifeCycles[lifeCycleName])) {
          return null;
        }
        let normalizeName;
        if (lifeCycleName === "constructor") {
          normalizeName = lifeCycleName;
        } else {
          normalizeName = cfg.normalizeNameMapping[lifeCycleName] || lifeCycleName;
        }
        if ((_a = cfg == null ? void 0 : cfg.exclude) == null ? void 0 : _a.includes(normalizeName)) {
          return null;
        }
        const exportName = cfg.exportNameMapping[lifeCycleName] || lifeCycleName;
        if (normalizeName === "constructor") {
          return {
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
            content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
            linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart]]
          };
        }
        if (normalizeName === "componentDidMount") {
          return {
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: REACT_CHUNK_NAME.ClassDidMountContent,
            content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
            linkAfter: [REACT_CHUNK_NAME.ClassDidMountStart]
          };
        }
        if (normalizeName === "render") {
          return {
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: REACT_CHUNK_NAME.ClassRenderPre,
            content: generateFunction(lifeCycles[lifeCycleName], { isBlock: true }),
            linkAfter: [REACT_CHUNK_NAME.ClassRenderStart]
          };
        }
        return {
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
          content: generateFunction(lifeCycles[lifeCycleName], {
            name: exportName,
            isMember: true
          }),
          linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
        };
      }).filter((i) => !!i);
      next.chunks.push(...chunks.filter((x) => x !== null));
    }
    return next;
  };
  return plugin;
};
var containerLifeCycle_default = pluginFactory10;

// src/plugins/component/react/containerMethod.ts
var pluginFactory11 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const { inStrictMode } = next.contextData;
    if (!ir.methods) {
      return next;
    }
    const { methods } = ir;
    const chunks = Object.keys(methods).map((methodName) => ({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsMethod,
      content: generateFunction(methods[methodName], { name: methodName, isMember: true }),
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsMethod]]
    }));
    next.chunks.push(...chunks);
    if (inStrictMode) {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
        content: Object.keys(ir.methods).map(
          (methodName) => isValidIdentifier(methodName) ? `.${methodName}` : `[${JSON.stringify(methodName)}]`
        ).map((method) => `this._context${method} = this${method};`).join("\n"),
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
      });
    }
    return next;
  };
  return plugin;
};
var containerMethod_default = pluginFactory11;

// src/utils/nodeToJSX.ts
var nodeToJSX_exports = {};
__export(nodeToJSX_exports, {
  createNodeGenerator: () => createNodeGenerator,
  createReactNodeGenerator: () => createReactNodeGenerator,
  generateConditionReactCtrl: () => generateConditionReactCtrl,
  generateReactExprInJS: () => generateReactExprInJS,
  generateReactLoopCtrl: () => generateReactLoopCtrl,
  isPureString: () => isPureString
});
var import_lodash4 = __toESM(require("lodash"));
var import_function = require("fp-ts/function");
var import_lowcode_types7 = require("@alilc/lowcode-types");

// src/utils/encodeJsxAttrString.ts
var import_lodash3 = __toESM(require("lodash"));
var SPECIAL_CHARS = `
\r'"<>&`;
var SPECIAL_CHARS_REG = new RegExp(
  `[${SPECIAL_CHARS.split("").map((c) => `\\x${import_lodash3.default.padStart(c.charCodeAt(0).toString(16), 2, "0")}`).join("")}]`,
  "g"
);
function encodeJsxStringNode(str) {
  return str.replace(SPECIAL_CHARS_REG, (c) => `&#${c.charCodeAt(0)};`);
}

// src/core/jsx/handlers/transformThis2Context.ts
var import_generator16 = __toESM(require("@babel/generator"));
function transformThis2Context(expr, scope, { ignoreRootScope = false } = {}) {
  var _a;
  if (ignoreRootScope && scope.parent == null) {
    return typeof expr === "string" ? expr : (0, import_generator16.default)(expr).code;
  }
  return parseExpressionConvertThis2Context(
    expr,
    "__$$context",
    ((_a = scope.bindings) == null ? void 0 : _a.getAllBindings()) || []
  );
}

// src/utils/nodeToJSX.ts
function mergeNodeGeneratorConfig(cfg1, cfg2 = {}) {
  const resCfg = {};
  if (cfg1.handlers || cfg2.handlers) {
    resCfg.handlers = {
      ...cfg1.handlers || {},
      ...cfg2.handlers || {}
    };
  }
  if (cfg1.tagMapping || cfg2.tagMapping) {
    resCfg.tagMapping = cfg2.tagMapping || cfg1.tagMapping;
  }
  if (cfg1.attrPlugins || cfg2.attrPlugins) {
    resCfg.attrPlugins = [];
    resCfg.attrPlugins.push(...cfg2.attrPlugins || []);
    resCfg.attrPlugins.push(...cfg1.attrPlugins || []);
  }
  if (cfg1.nodePlugins || cfg2.nodePlugins) {
    resCfg.nodePlugins = [];
    resCfg.nodePlugins.push(...cfg2.nodePlugins || []);
    resCfg.nodePlugins.push(...cfg1.nodePlugins || []);
  }
  return resCfg;
}
function isPureString(v) {
  return v[0] === "'" && v[v.length - 1] === "'" || v[0] === '"' && v[v.length - 1] === '"';
}
function generateAttrValue(attrData, scope, config) {
  const valueStr = generateCompositeType(attrData.attrValue, scope, {
    handlers: config == null ? void 0 : config.handlers,
    nodeGenerator: config == null ? void 0 : config.self
  });
  return [
    {
      type: "NodeCodePieceAttr" /* ATTR */,
      name: attrData.attrName,
      value: valueStr
    }
  ];
}
function generateAttr(attrName, attrValue, scope, config) {
  let pieces;
  if (config == null ? void 0 : config.attrPlugins) {
    pieces = executeFunctionStack(
      { attrName, attrValue },
      scope,
      config.attrPlugins,
      generateAttrValue,
      config
    );
  } else {
    pieces = generateAttrValue({ attrName, attrValue }, scope, config);
  }
  pieces = pieces.map((p) => {
    let newValue;
    if (p.value && isPureString(p.value)) {
      const content = getStaticExprValue(p.value);
      newValue = JSON.stringify(encodeJsxStringNode(content));
    } else {
      newValue = `{${p.value}}`;
    }
    return {
      value: `${p.name}=${newValue}`,
      type: "NodeCodePieceAttr" /* ATTR */
    };
  });
  return pieces;
}
function generateAttrs(nodeItem, scope, config) {
  const { props } = nodeItem;
  let pieces = [];
  if (props) {
    if (!Array.isArray(props)) {
      Object.keys(props).forEach((propName) => {
        if (isValidIdentifier(propName)) {
          pieces = pieces.concat(generateAttr(propName, props[propName], scope, config));
        }
      });
    } else {
      props.forEach((prop) => {
        if (prop.name && isValidIdentifier(prop.name) && !prop.spread) {
          pieces = pieces.concat(generateAttr(prop.name, prop.value, scope, config));
        }
      });
    }
  }
  return pieces;
}
function generateBasicNode(nodeItem, scope, config) {
  const pieces = [];
  const tagName = ((config == null ? void 0 : config.tagMapping) || import_lodash4.default.identity)(nodeItem.componentName);
  pieces.push({
    value: tagName || "",
    type: "NodeCodePieceTag" /* TAG */
  });
  return pieces;
}
function generateSimpleNode(nodeItem, scope, config) {
  const basicParts = generateBasicNode(nodeItem, scope, config) || [];
  const attrParts = generateAttrs(nodeItem, scope, config) || [];
  const childrenParts = [];
  if (nodeItem.children && (config == null ? void 0 : config.self)) {
    const childrenStr = config.self(nodeItem.children, scope);
    childrenParts.push({
      type: "NodeCodePieceChildren" /* CHILDREN */,
      value: childrenStr
    });
  }
  return [...basicParts, ...attrParts, ...childrenParts];
}
function linkPieces(pieces) {
  const tagsPieces = pieces.filter((p) => p.type === "NodeCodePieceTag" /* TAG */);
  if (tagsPieces.length !== 1) {
    throw new CodeGeneratorError("Only one tag definition required", tagsPieces);
  }
  const tagName = tagsPieces[0].value;
  const beforeParts = pieces.filter((p) => p.type === "NodeCodePieceBefore" /* BEFORE */).map((p) => p.value).join("");
  const afterParts = pieces.filter((p) => p.type === "NodeCodePieceAfter" /* AFTER */).map((p) => p.value).join("");
  const childrenParts = pieces.filter((p) => p.type === "NodeCodePieceChildren" /* CHILDREN */).map((p) => p.value).join("");
  let attrsParts = pieces.filter((p) => p.type === "NodeCodePieceAttr" /* ATTR */).map((p) => p.value).join(" ");
  attrsParts = attrsParts ? ` ${attrsParts}` : "";
  if (childrenParts) {
    return `${beforeParts}<${tagName}${attrsParts}>${childrenParts}</${tagName}>${afterParts}`;
  }
  return `${beforeParts}<${tagName}${attrsParts} />${afterParts}`;
}
function generateNodeSchema(nodeItem, scope, config) {
  const pieces = [];
  if (config == null ? void 0 : config.nodePlugins) {
    const res = executeFunctionStack(
      nodeItem,
      scope,
      config.nodePlugins,
      generateSimpleNode,
      config
    );
    pieces.push(...res);
  } else {
    pieces.push(...generateSimpleNode(nodeItem, scope, config));
  }
  return linkPieces(pieces);
}
function generateReactLoopCtrl(nodeItem, scope, config, next) {
  var _a, _b, _c;
  if (nodeItem.loop) {
    const tolerateEvalErrors = (_a = config == null ? void 0 : config.tolerateEvalErrors) != null ? _a : true;
    const loopItemName = ((_b = nodeItem.loopArgs) == null ? void 0 : _b[0]) || "item";
    const loopIndexName = ((_c = nodeItem.loopArgs) == null ? void 0 : _c[1]) || "index";
    const subScope = scope.createSubScope([loopItemName, loopIndexName]);
    const pieces = next ? next(nodeItem, subScope, config) : [];
    const loopDataExpr = (0, import_function.pipe)(
      nodeItem.loop,
      (expr) => generateCompositeType(expr, scope, {
        handlers: config == null ? void 0 : config.handlers,
        tolerateEvalErrors: false
      }),
      (expr) => transformThis2Context(expr, scope, { ignoreRootScope: true }),
      (expr) => tolerateEvalErrors ? `__$$evalArray(() => (${expr}))` : expr
    );
    pieces.unshift({
      value: `(${loopDataExpr}).map((${loopItemName}, ${loopIndexName}) => ((__$$context) => (`,
      type: "NodeCodePieceBefore" /* BEFORE */
    });
    pieces.push({
      value: `))(__$$createChildContext(__$$context, { ${loopItemName}, ${loopIndexName} })))`,
      type: "NodeCodePieceAfter" /* AFTER */
    });
    return pieces;
  }
  return next ? next(nodeItem, scope, config) : [];
}
function generateConditionReactCtrl(nodeItem, scope, config, next) {
  const pieces = next ? next(nodeItem, scope, config) : [];
  if (nodeItem.condition != null && nodeItem.condition !== true) {
    const value = generateCompositeType(nodeItem.condition, scope, {
      handlers: config == null ? void 0 : config.handlers
    });
    pieces.unshift({
      value: `!!(${value}) && (`,
      type: "NodeCodePieceBefore" /* BEFORE */
    });
    pieces.push({
      value: ")",
      type: "NodeCodePieceAfter" /* AFTER */
    });
  }
  return pieces;
}
function generateReactExprInJS(nodeItem, scope, config, next) {
  const pieces = next ? next(nodeItem, scope, config) : [];
  if (nodeItem.condition != null && nodeItem.condition !== true || nodeItem.loop != null) {
    pieces.unshift({
      value: "{",
      type: "NodeCodePieceBefore" /* BEFORE */
    });
    pieces.push({
      value: "}",
      type: "NodeCodePieceAfter" /* AFTER */
    });
  }
  return pieces;
}
var handleChildren = (v) => v.join("");
function createNodeGenerator(cfg = {}) {
  const generateNode = (nodeItem, scope) => {
    if (import_lodash4.default.isArray(nodeItem)) {
      const resList = nodeItem.map((n) => generateNode(n, scope));
      return handleChildren(resList);
    }
    if ((0, import_lowcode_types7.isNodeSchema)(nodeItem)) {
      return generateNodeSchema(nodeItem, scope, {
        ...cfg,
        self: generateNode
      });
    }
    const valueStr = generateCompositeType(nodeItem, scope, {
      handlers: cfg.handlers,
      nodeGenerator: generateNode
    });
    if (isPureString(valueStr)) {
      return encodeJsxStringNode(getStaticExprValue(valueStr));
    }
    return `{${valueStr}}`;
  };
  return (nodeItem, scope) => unwrapJsExprQuoteInJsx(generateNode(nodeItem, scope));
}
var defaultReactGeneratorConfig = {
  nodePlugins: [generateReactExprInJS, generateReactLoopCtrl, generateConditionReactCtrl]
};
function createReactNodeGenerator(cfg) {
  const newCfg = mergeNodeGeneratorConfig(defaultReactGeneratorConfig, cfg);
  return createNodeGenerator(newCfg);
}

// src/core/jsx/util/isLiteralAtomicExpr.ts
function isLiteralAtomicExpr(expr) {
  return expr === "null" || expr === "undefined" || expr === "true" || expr === "false" || /^-?\d+(\.\d+)?$/.test(expr);
}

// src/core/jsx/util/isSimpleStraightLiteral.ts
function isSimpleStraightLiteral(expr) {
  switch (expr.type) {
    case "BigIntLiteral":
    case "BooleanLiteral":
    case "DecimalLiteral":
    case "NullLiteral":
    case "NumericLiteral":
    case "RegExpLiteral":
    case "StringLiteral":
      return true;
    default:
      return false;
  }
}

// src/core/jsx/handlers/transformJsExpression.ts
function transformJsExpr(expr, scope, { dontWrapEval = false, dontTransformThis2ContextAtRootScope = false } = {}) {
  if (!expr) {
    return "undefined";
  }
  if (isLiteralAtomicExpr(expr)) {
    return expr;
  }
  const exprAst = parseExpression2(expr);
  if (isSimpleStraightLiteral(exprAst)) {
    return expr;
  }
  if (dontWrapEval) {
    return transformThis2Context(exprAst, scope, {
      ignoreRootScope: dontTransformThis2ContextAtRootScope
    });
  }
  switch (exprAst.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return transformThis2Context(exprAst, scope, {
        ignoreRootScope: dontTransformThis2ContextAtRootScope
      });
    default:
      break;
  }
  return `__$$eval(() => (${transformThis2Context(exprAst, scope, {
    ignoreRootScope: dontTransformThis2ContextAtRootScope
  })}))`;
}

// src/plugins/component/react/jsx.ts
var pluginFactory12 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    nodeTypeMapping: {},
    ...config
  };
  const { nodeTypeMapping } = cfg;
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const { tolerateEvalErrors = true, evalErrorsHandler = "" } = next.contextData;
    const customHandlers = {
      expression(input, scope2, config2) {
        var _a;
        return transformJsExpr(generateExpression(input, scope2), scope2, {
          dontWrapEval: !((_a = config2 == null ? void 0 : config2.tolerateEvalErrors) != null ? _a : tolerateEvalErrors),
          dontTransformThis2ContextAtRootScope: true
        });
      },
      function(input, scope2) {
        return transformThis2Context(
          generateCompositeType(
            {
              type: "JSFunction",
              value: input.value || "function () {}"
            },
            Scope.createRootScope()
          ),
          scope2,
          { ignoreRootScope: true }
        );
      }
    };
    const generatorPlugins = {
      handlers: customHandlers,
      tagMapping: (v) => nodeTypeMapping[v] || v,
      tolerateEvalErrors
    };
    if (next.contextData.useRefApi) {
      generatorPlugins.attrPlugins = [
        (attrData, scope2, pluginCfg, nextFunc) => {
          if (attrData.attrName === "ref") {
            return [
              {
                name: attrData.attrName,
                value: `this._refsManager.linkRef('${attrData.attrValue}')`,
                type: "NodeCodePieceAttr" /* ATTR */
              }
            ];
          }
          return nextFunc ? nextFunc(attrData, scope2, pluginCfg) : [];
        }
      ];
    }
    const generator = createReactNodeGenerator(generatorPlugins);
    const ir = next.ir;
    const scope = Scope.createRootScope();
    const jsxContent = generator(ir, scope);
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: REACT_CHUNK_NAME.ClassRenderJSX,
      content: `
        const __$$context = this._context || this;
        const { state } = __$$context;
        return ${jsxContent};
      `,
      linkAfter: [REACT_CHUNK_NAME.ClassRenderStart, REACT_CHUNK_NAME.ClassRenderPre]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.CustomContent,
      content: [
        tolerateEvalErrors && `
          function __$$eval(expr) {
            try {
              return expr();
            } catch (error) {
              ${evalErrorsHandler}
            }
          }

          function __$$evalArray(expr) {
            const res = __$$eval(expr);
            return Array.isArray(res) ? res : [];
          }
      `,
        `
        function __$$createChildContext(oldContext, ext) {
          const childContext = {
            ...oldContext,
            ...ext,
          };
          childContext.__proto__ = oldContext;
          return childContext;
        }
      `
      ].filter(Boolean).join("\n"),
      linkAfter: [COMMON_CHUNK_NAME.FileExport]
    });
    return next;
  };
  return plugin;
};
var jsx_default = pluginFactory12;

// src/plugins/component/react/reactCommonDeps.ts
var pluginFactory13 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
// \u6CE8\u610F: \u51FA\u7801\u5F15\u64CE\u6CE8\u5165\u7684\u4E34\u65F6\u53D8\u91CF\u9ED8\u8BA4\u90FD\u4EE5 "__$$" \u5F00\u5934\uFF0C\u7981\u6B62\u5728\u642D\u5EFA\u7684\u4EE3\u7801\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002
// \u4F8B\u5916\uFF1Areact \u6846\u67B6\u7684\u5BFC\u51FA\u540D\u548C\u5404\u79CD\u7EC4\u4EF6\u540D\u9664\u5916\u3002
'use client';
import React from 'react';`,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var reactCommonDeps_default = pluginFactory13;

// src/plugins/component/style/css.ts
var pluginFactory14 = (config) => {
  const cfg = {
    fileType: "css" /* CSS */,
    moduleFileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: ir.css,
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.moduleFileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `import './page.${cfg.fileType}';`,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    return next;
  };
  return plugin;
};
var css_default = pluginFactory14;

// src/plugins/project/constants.ts
var pluginFactory15 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const scope = Scope.createRootScope();
    const constantStr = generateCompositeType(ir.constants || {}, scope);
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileVarDefine,
      content: `
        const __$$constants = (${constantStr});
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `
        export default __$$constants;
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.FileMainContent
      ]
    });
    return next;
  };
  return plugin;
};
var constants_default = pluginFactory15;

// src/plugins/project/i18n.ts
var pluginFactory16 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const i18nStr = ir.i18n ? JSON.stringify(ir.i18n, null, 2) : "{}";
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: `
        const i18nConfig = ${i18nStr};

        let locale = typeof navigator === 'object' && typeof navigator.language === 'string' ? navigator.language : 'zh-CN';

        const getLocale = () => locale;

        const setLocale = (target) => {
          locale = target;
        };

        const isEmptyVariables = variables => (
          Array.isArray(variables) && variables.length === 0
          || typeof variables === 'object' && (!variables || Object.keys(variables).length === 0)
        );

        // \u6309\u4F4E\u4EE3\u7801\u89C4\u8303\u91CC\u9762\u7684\u8981\u6C42\u8FDB\u884C\u53D8\u91CF\u66FF\u6362
        const format = (msg, variables) => (
          typeof msg === 'string'
            ? msg.replace(/\\$?\\{(\\w+)\\}/g, (match, key) => variables?.[key] ?? '')
            : msg
        );

        const i18nFormat = ({ id, defaultMessage, fallback }, variables) => {
          const msg = i18nConfig[locale]?.[id] ??  i18nConfig[locale.replace('-', '_')]?.[id] ??  defaultMessage;
          if (msg == null) {
            console.warn('[i18n]: unknown message id: %o (locale=%o)', id, locale);
            return fallback === undefined ? \`\${id}\` : fallback;
          }

          return format(msg, variables);
        }

        const i18n = (id, params) => {
          return i18nFormat({ id }, params);
        };

        // \u5C06\u56FD\u9645\u5316\u7684\u4E00\u4E9B\u65B9\u6CD5\u6CE8\u5165\u5230\u76EE\u6807\u5BF9\u8C61&\u4E0A\u4E0B\u6587\u4E2D
        const _inject2 = (target) => {
          target.i18n = i18n;
          target.getLocale = getLocale;
          target.setLocale = (locale) => {
            setLocale(locale);
            target.forceUpdate();
          };
          target._i18nText = (t) => {
            // \u4F18\u5148\u53D6\u76F4\u63A5\u4F20\u8FC7\u6765\u7684\u8BED\u6599
            const localMsg = t[locale] ?? t[String(locale).replace('-', '_')]
            if (localMsg != null) {
              return format(localMsg, t.params);
            }

            // \u5176\u6B21\u7528\u9879\u76EE\u7EA7\u522B\u7684
            const projectMsg = i18nFormat({ id: t.key, fallback: null }, t.params);
            if (projectMsg != null) {
              return projectMsg;
            }

            // \u515C\u5E95\u7528 use \u6307\u5B9A\u7684\u6216\u9ED8\u8BA4\u8BED\u8A00\u7684
            return format(t[t.use || "zh-CN"] ?? t.en_US, t.params);
          }

          // \u6CE8\u5165\u5230\u4E0A\u4E0B\u6587\u4E2D\u53BB
          if (target._context && target._context !== target) {
            Object.assign(target._context, {
              i18n,
              getLocale, setLocale: target.setLocale
            });
          }
        }
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `
        export {
          getLocale,
          setLocale,
          i18n,
          i18nFormat,
          _inject2,
        };
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.FileMainContent
      ]
    });
    return next;
  };
  return plugin;
};
var i18n_default = pluginFactory16;

// src/plugins/project/utils.ts
var pluginFactory17 = (baseFramework) => {
  const plugin = async (pre) => {
    const framework = baseFramework || "react";
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
        import { createRef } from '${framework}';
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileUtilDefine,
      content: `
        export class RefsManager {
          constructor() {
            this.refInsStore = {};
          }

          clearNullRefs() {
            Object.keys(this.refInsStore).forEach((refName) => {
              const filteredInsList = this.refInsStore[refName].filter(insRef => !!insRef.current);
              if (filteredInsList.length > 0) {
                this.refInsStore[refName] = filteredInsList;
              } else {
                delete this.refInsStore[refName];
              }
            });
          }

          get(refName) {
            this.clearNullRefs();
            if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
              return this.refInsStore[refName][0].current;
            }

            return null;
          }

          getAll(refName) {
            this.clearNullRefs();
            if (this.refInsStore[refName] && this.refInsStore[refName].length > 0) {
              return this.refInsStore[refName].map(i => i.current);
            }

            return [];
          }

          linkRef(refName) {
            const refIns = createRef();
            this.refInsStore[refName] = this.refInsStore[refName] || [];
            this.refInsStore[refName].push(refIns);
            return refIns;
          }
        }
      `,
      linkAfter: [...DEFAULT_LINK_AFTER[COMMON_CHUNK_NAME.FileUtilDefine]]
    });
    if (ir.utils) {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "js" /* JS */,
        name: COMMON_CHUNK_NAME.FileExport,
        content: `
          export default {
        `,
        linkAfter: [
          COMMON_CHUNK_NAME.ExternalDepsImport,
          COMMON_CHUNK_NAME.InternalDepsImport,
          COMMON_CHUNK_NAME.ImportAliasDefine,
          COMMON_CHUNK_NAME.FileVarDefine,
          COMMON_CHUNK_NAME.FileUtilDefine,
          COMMON_CHUNK_NAME.FileMainContent
        ]
      });
      ir.utils.forEach((util) => {
        if (util.type === "function") {
          next.chunks.push({
            type: "string" /* STRING */,
            fileType: "js" /* JS */,
            name: COMMON_CHUNK_NAME.FileVarDefine,
            content: `
              const ${util.name} = ${util.content.value};
            `,
            linkAfter: [
              COMMON_CHUNK_NAME.ExternalDepsImport,
              COMMON_CHUNK_NAME.InternalDepsImport,
              COMMON_CHUNK_NAME.ImportAliasDefine
            ]
          });
        }
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: "js" /* JS */,
          name: COMMON_CHUNK_NAME.FileExport,
          content: `${util.name},`,
          linkAfter: [
            COMMON_CHUNK_NAME.ExternalDepsImport,
            COMMON_CHUNK_NAME.InternalDepsImport,
            COMMON_CHUNK_NAME.ImportAliasDefine,
            COMMON_CHUNK_NAME.FileVarDefine,
            COMMON_CHUNK_NAME.FileUtilDefine,
            COMMON_CHUNK_NAME.FileMainContent
          ]
        });
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: "js" /* JS */,
        name: COMMON_CHUNK_NAME.FileExport,
        content: `
          };
        `,
        linkAfter: [
          COMMON_CHUNK_NAME.ExternalDepsImport,
          COMMON_CHUNK_NAME.InternalDepsImport,
          COMMON_CHUNK_NAME.ImportAliasDefine,
          COMMON_CHUNK_NAME.FileVarDefine,
          COMMON_CHUNK_NAME.FileUtilDefine,
          COMMON_CHUNK_NAME.FileMainContent
        ]
      });
    }
    return next;
  };
  return plugin;
};
var utils_default = pluginFactory17;

// src/utils/templateHelper.ts
var templateHelper_exports = {};
__export(templateHelper_exports, {
  insertFile: () => insertFile,
  runFileGenerator: () => runFileGenerator
});
function insertFile(root, path, file2) {
  let current = root;
  path.forEach((pathNode) => {
    const dir = current.dirs.find((d) => d.name === pathNode);
    if (dir) {
      current = dir;
    } else {
      const newDir = createResultDir(pathNode);
      addDirectory(current, newDir);
      current = newDir;
    }
  });
  addFile(current, file2);
}
function runFileGenerator(root, fun) {
  try {
    const result = fun();
    const [path, file2] = result;
    insertFile(root, path, file2);
  } catch (error) {
    throw new Error(`Error: ${typeof fun}`);
  }
}

// src/plugins/project/framework/icejs/template/files/abc.json.ts
function getFile() {
  return [
    [],
    {
      name: "abc",
      ext: "json",
      content: `
{
  "type": "ice-app",
  "builder": "@ali/builder-ice-app"
}
    `
    }
  ];
}

// src/plugins/project/framework/icejs/template/files/build.json.ts
function getFile2() {
  return [
    [],
    {
      name: "build",
      ext: "json",
      content: `
{
  "entry": "src/app.js",
  "plugins": [
    [
      "build-plugin-fusion",
      {
        "themePackage": "@alifd/theme-design-pro"
      }
    ],
    [
      "build-plugin-moment-locales",
      {
        "locales": [
          "zh-cn"
        ]
      }
    ]
  ]
}
      `
    }
  ];
}

// src/plugins/project/framework/icejs/template/files/editorconfig.ts
function getFile3() {
  const file2 = createResultFile(
    ".editorconfig",
    "",
    `
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/eslintignore.ts
function getFile4() {
  const file2 = createResultFile(
    ".eslintignore",
    "",
    `
# \u5FFD\u7565\u76EE\u5F55
build/
tests/
demo/
.ice/

# node \u8986\u76D6\u7387\u6587\u4EF6
coverage/

# \u5FFD\u7565\u6587\u4EF6
**/*-min.js
**/*.min.js

package-lock.json
yarn.lock
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/eslintrc.js.ts
function getFile5() {
  const file2 = createResultFile(
    ".eslintrc",
    "js",
    `
const { eslint } = require('@ice/spec');

module.exports = eslint;
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/gitignore.ts
function getFile6() {
  const file2 = createResultFile(
    ".gitignore",
    "",
    `
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
node_modules/

# production
build/
dist/
tmp/
lib/

# misc
.idea/
.happypack
.DS_Store
*.swp
*.dia~
.ice

npm-debug.log*
yarn-debug.log*
yarn-error.log*
index.module.scss.d.ts
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/jsconfig.json.ts
function getFile7() {
  const file2 = createResultFile(
    "jsconfig",
    "json",
    `
{
  "compilerOptions": {
    "baseUrl": ".",
    "jsx": "react",
    "paths": {
      "@/*": ["./src/*"],
      "ice": [".ice/index.ts"],
      "ice/*": [".ice/pages/*"]
    }
  }
}
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/prettierignore.ts
function getFile8() {
  const file2 = createResultFile(
    ".prettierignore",
    "",
    `
build/
tests/
demo/
.ice/
coverage/
**/*-min.js
**/*.min.js
package-lock.json
yarn.lock
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/prettierrc.js.ts
function getFile9() {
  const file2 = createResultFile(
    ".prettierrc",
    "js",
    `
const { prettier } = require('@ice/spec');

module.exports = prettier;
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/README.md.ts
function getFile10() {
  const file2 = createResultFile(
    "README",
    "md",
    `
## Scaffold Lite

> \u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002

## \u4F7F\u7528

\`\`\`bash
# \u5B89\u88C5\u4F9D\u8D56
$ npm install

# \u542F\u52A8\u670D\u52A1
$ npm start  # visit http://localhost:3333
\`\`\`

[More docs](https://ice.work/docs/guide/about).

## \u76EE\u5F55

\`\`\`md
\u251C\u2500\u2500 build/                         # \u6784\u5EFA\u4EA7\u7269
\u251C\u2500\u2500 mock/                          # \u672C\u5730\u6A21\u62DF\u6570\u636E
\u2502   \u251C\u2500\u2500 index.[j,t]s
\u251C\u2500\u2500 public/
\u2502   \u251C\u2500\u2500 index.html                 # \u5E94\u7528\u5165\u53E3 HTML
\u2502   \u2514\u2500\u2500 favicon.png                # Favicon
\u251C\u2500\u2500 src/                           # \u6E90\u7801\u8DEF\u5F84
\u2502   \u251C\u2500\u2500 components/                # \u81EA\u5B9A\u4E49\u4E1A\u52A1\u7EC4\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 Guide/
\u2502   \u2502       \u251C\u2500\u2500 index.[j,t]sx
\u2502   \u2502       \u251C\u2500\u2500 index.module.scss
\u2502   \u251C\u2500\u2500 layouts/                   # \u5E03\u5C40\u7EC4\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 BasicLayout/
\u2502   \u2502       \u251C\u2500\u2500 index.[j,t]sx
\u2502   \u2502       \u2514\u2500\u2500 index.module.scss
\u2502   \u251C\u2500\u2500 pages/                     # \u9875\u9762
\u2502   \u2502   \u2514\u2500\u2500 Home/                  # home \u9875\u9762\uFF0C\u7EA6\u5B9A\u8DEF\u7531\u8F6C\u6210\u5C0F\u5199
\u2502   \u2502       \u251C\u2500\u2500 components/        # \u9875\u9762\u7EA7\u81EA\u5B9A\u4E49\u4E1A\u52A1\u7EC4\u4EF6
\u2502   \u2502       \u251C\u2500\u2500 models.[j,t]sx     # \u9875\u9762\u7EA7\u6570\u636E\u72B6\u6001
\u2502   \u2502       \u251C\u2500\u2500 index.[j,t]sx      # \u9875\u9762\u5165\u53E3
\u2502   \u2502       \u2514\u2500\u2500 index.module.scss  # \u9875\u9762\u6837\u5F0F\u6587\u4EF6
\u2502   \u251C\u2500\u2500 configs/                   # [\u53EF\u9009] \u914D\u7F6E\u6587\u4EF6
\u2502   \u2502   \u2514\u2500\u2500 menu.[j,t]s            # [\u53EF\u9009] \u83DC\u5355\u914D\u7F6E
\u2502   \u251C\u2500\u2500 models/                    # [\u53EF\u9009] \u5E94\u7528\u7EA7\u6570\u636E\u72B6\u6001
\u2502   \u2502   \u2514\u2500\u2500 user.[j,t]s
\u2502   \u251C\u2500\u2500 utils/                     # [\u53EF\u9009] \u5DE5\u5177\u5E93
\u2502   \u251C\u2500\u2500 global.scss                # \u5168\u5C40\u6837\u5F0F
\u2502   \u251C\u2500\u2500 routes.[j,t]s              # \u8DEF\u7531\u914D\u7F6E
\u2502   \u2514\u2500\u2500 app.[j,t]s[x]              # \u5E94\u7528\u5165\u53E3\u811A\u672C
\u251C\u2500\u2500 build.json                     # \u5DE5\u7A0B\u914D\u7F6E
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 .editorconfig
\u251C\u2500\u2500 .eslintignore
\u251C\u2500\u2500 .eslintrc.[j,t]s
\u251C\u2500\u2500 .gitignore
\u251C\u2500\u2500 .stylelintignore
\u251C\u2500\u2500 .stylelintrc.[j,t]s
\u251C\u2500\u2500 .gitignore
\u2514\u2500\u2500 [j,t]sconfig.json
\`\`\`
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/components/Footer/index.jsx.ts
function getFile11() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Alibaba Fusion</span>
      <br />
      <span className={styles.copyright}>\xA9 2019-\u73B0\u5728 Alibaba Fusion & ICE</span>
    </p>
  );
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/components/Footer/index.style.ts
function getFile12() {
  const file2 = createResultFile(
    "index",
    "module.scss",
    `
.footer {
  line-height: 20px;
  text-align: center;
}

.logo {
  font-weight: bold;
  font-size: 16px;
}

.copyright {
  font-size: 12px;
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/components/Logo/index.jsx.ts
function getFile13() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/'} className={styles.logo}>
        {image && <img src={image} alt="logo" />}
        <span>{text}</span>
      </Link>
    </div>
  );
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/components/Logo/index.style.ts
function getFile14() {
  const file2 = createResultFile(
    "index",
    "module.scss",
    `
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  color: $color-text1-1;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  &:visited, &:link {
    color: $color-text1-1;
  }

  img {
    height: 24px;
    margin-right: 10px;
  }
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/components/PageNav/index.jsx.ts
function getFile15() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'ice';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '../../menuConfig';

const { SubNav } = Nav;
const NavItem = Nav.Item;

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => getSubMenuOrItem(item, index));
}

function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav key={index} icon={item.icon} label={item.name}>
          {childrenItems}
        </SubNav>
      );
      return subNav;
    }

    return null;
  }

  const navItem = (
    <NavItem key={item.path} icon={item.icon}>
      <Link to={item.path}>{item.name}</Link>
    </NavItem>
  );
  return navItem;
}

const Navigation = (props, context) => {
  const { location } = props;
  const { pathname } = location;
  const { isCollapse } = context;
  return (
    <Nav
      type="primary"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      embeddable
      openMode="single"
      iconOnly={isCollapse}
      hasArrow={false}
      mode={isCollapse ? 'popup' : 'inline'}
    >
      {getNavMenuItems(asideMenuConfig)}
    </Nav>
  );
};

Navigation.contextTypes = {
  isCollapse: PropTypes.bool,
};
const PageNav = withRouter(Navigation);
export default PageNav;
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "PageNav"], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/index.jsx.ts
function getFile16() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';

(function() {
  const throttle = function(type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

export default function BasicLayout({ children }) {
  const getDevice = width => {
    const isPhone =
      typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    }
    if (width < 1280 && width > 680) {
      return 'tablet';
    }
    return 'desktop';
  };

  const [device, setDevice] = useState(getDevice(NaN));
  window.addEventListener('optimizedResize', e => {
    setDevice(getDevice(e && e.target && e.target.innerWidth));
  });
  return (
    <ConfigProvider device={device}>
      <Shell
        type="dark"
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Logo
            image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            text="Logo"
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        ></Shell.Navigation>
        <Shell.Action></Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
    `
  );
  return [["src", "layouts", "BasicLayout"], file2];
}

// src/plugins/project/framework/icejs/template/files/src/layouts/BasicLayout/menuConfig.js.ts
function getFile17() {
  const file2 = createResultFile(
    "menuConfig",
    "js",
    `
const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'smile',
  },
];
export { headerMenuConfig, asideMenuConfig };
    `
  );
  return [["src", "layouts", "BasicLayout"], file2];
}

// src/plugins/project/framework/icejs/template/files/stylelintignore.ts
function getFile18() {
  const file2 = createResultFile(
    ".stylelintignore",
    "",
    `
# \u5FFD\u7565\u76EE\u5F55
build/
tests/
demo/

# node \u8986\u76D6\u7387\u6587\u4EF6
coverage/
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/stylelintrc.js.ts
function getFile19() {
  const file2 = createResultFile(
    ".stylelintrc",
    "js",
    `
const { stylelint } = require('@ice/spec');

module.exports = stylelint;
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/files/tsconfig.json.ts
function getFile20() {
  const file2 = createResultFile(
    "tsconfig",
    "json",
    `
{
  "compileOnSave": false,
  "buildOnSave": false,
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "build",
    "module": "esnext",
    "target": "es6",
    "jsx": "react",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "lib": ["es6", "dom"],
    "sourceMap": true,
    "allowJs": true,
    "rootDir": "./",
    "forceConsistentCasingInFileNames": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noImplicitAny": false,
    "importHelpers": true,
    "strictNullChecks": true,
    "suppressImplicitAnyIndexErrors": true,
    "noUnusedLocals": true,
    "skipLibCheck": true,
    "paths": {
      "@/*": ["./src/*"],
      "ice": [".ice/index.ts"],
      "ice/*": [".ice/pages/*"]
    }
  },
  "include": ["src/*", ".ice"],
  "exclude": ["node_modules", "build", "public"]
}
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs/template/static-files.ts
function generateStaticFiles(root = createResultDir(".")) {
  runFileGenerator(root, getFile20);
  runFileGenerator(root, getFile19);
  runFileGenerator(root, getFile18);
  runFileGenerator(root, getFile9);
  runFileGenerator(root, getFile8);
  runFileGenerator(root, getFile7);
  runFileGenerator(root, getFile6);
  runFileGenerator(root, getFile5);
  runFileGenerator(root, getFile4);
  runFileGenerator(root, getFile3);
  runFileGenerator(root, getFile2);
  runFileGenerator(root, getFile);
  runFileGenerator(root, getFile10);
  runFileGenerator(root, getFile16);
  runFileGenerator(root, getFile17);
  runFileGenerator(root, getFile11);
  runFileGenerator(root, getFile12);
  runFileGenerator(root, getFile13);
  runFileGenerator(root, getFile14);
  runFileGenerator(root, getFile15);
  return root;
}

// src/plugins/project/framework/icejs/template/index.ts
var icejsTemplate = {
  slots: {
    components: {
      path: ["src", "components"]
    },
    pages: {
      path: ["src", "pages"]
    },
    router: {
      path: ["src"],
      fileName: "routes"
    },
    entry: {
      path: ["src"],
      fileName: "app"
    },
    constants: {
      path: ["src"],
      fileName: "constants"
    },
    utils: {
      path: ["src"],
      fileName: "utils"
    },
    i18n: {
      path: ["src"],
      fileName: "i18n"
    },
    globalStyle: {
      path: ["src"],
      fileName: "global"
    },
    htmlEntry: {
      path: ["public"],
      fileName: "index"
    },
    packageJSON: {
      path: [],
      fileName: "package"
    }
  },
  generateTemplate() {
    return generateStaticFiles();
  }
};
var template_default = icejsTemplate;

// src/plugins/project/framework/icejs/plugins/entry.ts
var pluginFactory18 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
        import { createApp } from 'ice';
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: `
        const appConfig = {
          app: {
            rootId: 'app',
          },
          router: {
            type: 'hash',
          },
        };
        createApp(appConfig);
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    return next;
  };
  return plugin;
};
var entry_default = pluginFactory18;

// src/plugins/project/framework/icejs/plugins/entryHtml.ts
var pluginFactory19 = () => {
  const plugin = async (pre) => {
    var _a;
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "html" /* HTML */,
      name: COMMON_CHUNK_NAME.HtmlContent,
      content: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge,chrome=1" />
            <meta name="viewport" content="width=device-width" />
            <title>${((_a = ir == null ? void 0 : ir.meta) == null ? void 0 : _a.name) || "Ice App"}</title>
          </head>
          <body>
            <div id="app"></div>
          </body>
        </html>
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var entryHtml_default = pluginFactory19;

// src/plugins/project/framework/icejs/plugins/globalStyle.ts
var pluginFactory20 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "scss" /* SCSS */,
      name: COMMON_CHUNK_NAME.StyleDepsImport,
      content: `
        // \u5F15\u5165\u9ED8\u8BA4\u5168\u5C40\u6837\u5F0F
        @import '@alifd/next/reset.scss';
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "scss" /* SCSS */,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: `
        body {
          -webkit-font-smoothing: antialiased;
        }
      `,
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "scss" /* SCSS */,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: ir.css || "",
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    return next;
  };
  return plugin;
};
var globalStyle_default = pluginFactory20;

// src/utils/dataSource.ts
var dataSource_exports = {};
__export(dataSource_exports, {
  buildDataSourceDependencies: () => buildDataSourceDependencies
});
var import_change_case6 = __toESM(require("change-case"));
function buildDataSourceDependencies(ir, cfg = {}) {
  return {
    [cfg.enginePackage || "@alilc/lowcode-datasource-engine"]: cfg.engineVersion || "^1.0.0",
    ...(ir.dataSourcesTypes || []).reduce(
      (acc, dsType) => {
        var _a;
        return {
          ...acc,
          [getDataSourceHandlerPackageName(dsType)]: ((_a = cfg.handlersVersion) == null ? void 0 : _a[dsType]) || "^1.0.0"
        };
      },
      {}
    )
  };
  function getDataSourceHandlerPackageName(dsType) {
    var _a;
    return ((_a = cfg.handlersPackages) == null ? void 0 : _a[dsType]) || `@alilc/lowcode-datasource-${import_change_case6.default.kebab(dsType)}-handler`;
  }
}

// src/plugins/project/framework/icejs/plugins/packageJSON.ts
var pluginFactory21 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const packageJson = {
      name: (cfg == null ? void 0 : cfg.packageName) || "icejs-demo-app",
      version: (cfg == null ? void 0 : cfg.packageVersion) || "0.1.5",
      description: "\u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002",
      dependencies: {
        moment: "^2.24.0",
        react: "^16.4.1",
        "react-dom": "^16.4.1",
        "react-router": "^5.2.1",
        "@alifd/theme-design-pro": "^0.x",
        "intl-messageformat": "^9.3.6",
        "@ice/store": "^1.4.3",
        "@loadable/component": "^5.15.2",
        ...buildDataSourceDependencies(ir, cfg == null ? void 0 : cfg.datasourceConfig)
      },
      devDependencies: {
        "@ice/spec": "^1.0.0",
        "build-plugin-fusion": "^0.1.0",
        "build-plugin-moment-locales": "^0.1.0",
        eslint: "^6.0.1",
        "ice.js": "^1.0.0",
        stylelint: "^13.2.0"
      },
      scripts: {
        start: "icejs start",
        build: "icejs build",
        lint: "npm run eslint && npm run stylelint",
        eslint: "eslint --cache --ext .js,.jsx ./",
        stylelint: "stylelint ./**/*.scss"
      },
      ideMode: {
        name: "ice-react"
      },
      iceworks: {
        type: "react",
        adapter: "adapter-react-v3"
      },
      engines: {
        node: ">=8.0.0"
      },
      repository: {
        type: "git",
        url: "http://gitlab.xxx.com/msd/leak-scan/tree/master"
      },
      private: true,
      originTemplate: "@alifd/scaffold-lite-js"
    };
    ir.packages.forEach((packageInfo) => {
      packageJson.dependencies[packageInfo.package] = packageInfo.version;
    });
    next.chunks.push({
      type: "json" /* JSON */,
      fileType: "json" /* JSON */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var packageJSON_default = pluginFactory21;

// src/plugins/project/framework/icejs/plugins/router.ts
var pluginFactory22 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
        import BasicLayout from '@/layouts/BasicLayout';
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileVarDefine,
      content: `
        const routerConfig = [
          {
            path: '/',
            component: BasicLayout,
            children: [
              ${ir.routes.map(
        (route) => `
                    {
                      path: '${route.path}',
                      component: ${route.componentName},
                    }
                  `
      ).join(",")}
            ],
          },
        ];
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `
        export default routerConfig;
      `,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.FileUtilDefine,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileMainContent
      ]
    });
    return next;
  };
  return plugin;
};
var router_default = pluginFactory22;

// src/plugins/project/framework/icejs/index.ts
var icejs_default = {
  template: template_default,
  plugins: {
    entry: entry_default,
    entryHtml: entryHtml_default,
    globalStyle: globalStyle_default,
    packageJSON: packageJSON_default,
    router: router_default
  }
};

// src/postprocessor/prettier/index.ts
var import_prettier = __toESM(require("prettier"));
var import_parser_babel = __toESM(require("prettier/parser-babel"));
var import_parser_postcss = __toESM(require("prettier/parser-postcss"));
var import_parser_html = __toESM(require("prettier/parser-html"));
var PARSERS = ["css", "scss", "less", "json", "html", "vue"];
var factory = (config) => {
  const cfg = {
    customFileTypeParser: {},
    ...config
  };
  const codePrettier = (content, fileType) => {
    let parser3;
    if (fileType === "js" || fileType === "jsx" || fileType === "ts" || fileType === "tsx") {
      parser3 = "babel-ts";
    } else if (fileType === "json") {
      parser3 = "json-stringify";
    } else if (PARSERS.indexOf(fileType) >= 0) {
      parser3 = fileType;
    } else if (cfg.customFileTypeParser[fileType]) {
      parser3 = cfg.customFileTypeParser[fileType];
    } else {
      return content;
    }
    return import_prettier.default.format(content, {
      parser: parser3,
      plugins: [import_parser_babel.default, import_parser_postcss.default, import_parser_html.default, ...cfg.plugins || []],
      singleQuote: true,
      jsxSingleQuote: false
    });
  };
  return codePrettier;
};
var prettier_default = factory;

// src/solutions/icejs.ts
function createIceJsProjectBuilder(options) {
  return createProjectBuilder({
    inStrictMode: options == null ? void 0 : options.inStrictMode,
    extraContextData: { ...options },
    template: icejs_default.template,
    plugins: {
      components: [
        reactCommonDeps_default(),
        esmodule_default({
          fileType: "jsx"
        }),
        styleImport_default(),
        containerClass_default(),
        containerInjectContext_default(),
        containerInjectUtils_default(),
        containerInjectDataSourceEngine_default(),
        containerInjectI18n_default(),
        containerInjectConstants_default(),
        containerInitState_default(),
        containerLifeCycle_default(),
        containerMethod_default(),
        jsx_default({
          nodeTypeMapping: {
            Div: "div",
            Component: "div",
            Page: "div",
            Block: "div"
          }
        }),
        css_default()
      ],
      pages: [
        reactCommonDeps_default(),
        esmodule_default({
          fileType: "jsx"
        }),
        styleImport_default(),
        containerClass_default(),
        containerInjectContext_default(),
        containerInjectUtils_default(),
        containerInjectDataSourceEngine_default(),
        containerInjectI18n_default(),
        containerInjectConstants_default(),
        containerInitState_default(),
        containerLifeCycle_default(),
        containerMethod_default(),
        jsx_default({
          nodeTypeMapping: {
            Div: "div",
            Component: "div",
            Page: "div",
            Block: "div"
          }
        }),
        css_default()
      ],
      router: [esmodule_default(), icejs_default.plugins.router()],
      entry: [icejs_default.plugins.entry()],
      constants: [constants_default()],
      utils: [esmodule_default(), utils_default("react")],
      i18n: [i18n_default()],
      globalStyle: [icejs_default.plugins.globalStyle()],
      htmlEntry: [icejs_default.plugins.entryHtml()],
      packageJSON: [icejs_default.plugins.packageJSON()]
    },
    postProcessors: [prettier_default()],
    customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
  });
}
var plugins = {
  containerClass: containerClass_default,
  containerInjectContext: containerInjectContext_default,
  containerInjectUtils: containerInjectUtils_default,
  containerInjectDataSourceEngine: containerInjectDataSourceEngine_default,
  containerInjectI18n: containerInjectI18n_default,
  containerInjectConstants: containerInjectConstants_default,
  containerInitState: containerInitState_default,
  containerLifeCycle: containerLifeCycle_default,
  containerMethod: containerMethod_default,
  jsx: jsx_default,
  commonDeps: reactCommonDeps_default,
  reactCommonDeps: reactCommonDeps_default
};

// src/plugins/project/framework/icejs3/template/files/gitignore.ts
function getFile21() {
  const file2 = createResultFile(
    ".gitignore",
    "",
    `
# See https://help.github.com/ignore-files/ for more about ignoring files.

# dependencies
node_modules/

# production
build/
dist/
tmp/
lib/

# misc
.idea/
.happypack
.DS_Store
*.swp
*.dia~
.ice

npm-debug.log*
yarn-debug.log*
yarn-error.log*
index.module.scss.d.ts
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs3/template/files/README.md.ts
function getFile22() {
  const file2 = createResultFile(
    "README",
    "md",
    "This project is generated by lowcode-code-generator & lowcode-solution-icejs3."
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs3/template/files/browserslistrc.ts
function getFile23() {
  const file2 = createResultFile(
    ".browserslistrc",
    "",
    `defaults
ios_saf 9
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/icejs3/template/files/typings.ts
function getFile24() {
  const file2 = createResultFile(
    "typings.d",
    "ts",
    `/// <reference types="@ice/app/types" />

export {};
declare global {
  interface Window {
    g_config: Record<string, any>;
  }
}
    `
  );
  return [["src"], file2];
}

// src/plugins/project/framework/icejs3/template/files/document.ts
function getFile25() {
  const file2 = createResultFile(
    "document",
    "tsx",
    `import React from 'react';
import { Meta, Title, Links, Main, Scripts } from 'ice';

export default function Document() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="ice.js 3 lite scaffold" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//alifd.alicdn.com/npm/@alifd/next/1.21.16/next.min.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <Meta />
        <Title />
        <Links />
      </head>
      <body>
        <Main />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/react/18.2.0/umd/react.development.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/react-dom/18.2.0/umd/react-dom.development.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/??react-router/6.9.0/react-router.production.min.js,react-router-dom/6.9.0/react-router-dom.production.min.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/alifd__next/1.26.22/next.min.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js" />
        <script crossOrigin="anonymous" src="//g.alicdn.com/platform/c/??lodash/4.6.1/lodash.min.js,immutable/3.7.6/dist/immutable.min.js" />
        <Scripts />
      </body>
    </html>
  );
}`
  );
  return [["src"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/components/Footer/index.jsx.ts
function getFile26() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>Alibaba Fusion</span>
      <br />
      <span className={styles.copyright}>\xA9 2019-\u73B0\u5728 Alibaba Fusion & ICE</span>
    </p>
  );
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/components/Footer/index.style.ts
function getFile27() {
  const file2 = createResultFile(
    "index",
    "module.scss",
    `
.footer {
  line-height: 20px;
  text-align: center;
}

.logo {
  font-weight: bold;
  font-size: 16px;
}

.copyright {
  font-size: 12px;
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Footer"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/components/Logo/index.jsx.ts
function getFile28() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React from 'react';
import { Link } from 'ice';
import styles from './index.module.scss';

export default function Logo({ image, text, url }) {
  return (
    <div className="logo">
      <Link to={url || '/'} className={styles.logo}>
        {image && <img src={image} alt="logo" />}
        <span>{text}</span>
      </Link>
    </div>
  );
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/components/Logo/index.style.ts
function getFile29() {
  const file2 = createResultFile(
    "index",
    "module.scss",
    `
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF7300;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;

  &:visited, &:link {
    color: #FF7300;
  }

  img {
    height: 24px;
    margin-right: 10px;
  }
}
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "Logo"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/components/PageNav/index.jsx.ts
function getFile30() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'ice';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '../../menuConfig';

const { SubNav } = Nav;
const NavItem = Nav.Item;

function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => getSubMenuOrItem(item, index));
}

function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      const subNav = (
        <SubNav key={index} icon={item.icon} label={item.name}>
          {childrenItems}
        </SubNav>
      );
      return subNav;
    }

    return null;
  }

  const navItem = (
    <NavItem key={item.path} icon={item.icon}>
      <Link to={item.path}>{item.name}</Link>
    </NavItem>
  );
  return navItem;
}

const Navigation = (props, context) => {
  const location = useLocation();
  const { pathname } = location;
  const { isCollapse } = context;
  return (
    <Nav
      type="primary"
      selectedKeys={[pathname]}
      defaultSelectedKeys={[pathname]}
      embeddable
      openMode="single"
      iconOnly={isCollapse}
      hasArrow={false}
      mode={isCollapse ? 'popup' : 'inline'}
    >
      {getNavMenuItems(asideMenuConfig)}
    </Nav>
  );
};

Navigation.contextTypes = {
  isCollapse: PropTypes.bool,
};
export default Navigation;
    `
  );
  return [["src", "layouts", "BasicLayout", "components", "PageNav"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/index.jsx.ts
function getFile31() {
  const file2 = createResultFile(
    "index",
    "jsx",
    `
import React, { useState } from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';

(function() {
  const throttle = function(type, name, obj = window) {
    let running = false;

    const func = () => {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(() => {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };

  throttle('resize', 'optimizedResize');
})();

export default function BasicLayout({ children }) {
  const getDevice = width => {
    const isPhone =
      typeof navigator !== 'undefined' && navigator && navigator.userAgent.match(/phone/gi);

    if (width < 680 || isPhone) {
      return 'phone';
    }
    if (width < 1280 && width > 680) {
      return 'tablet';
    }
    return 'desktop';
  };

  const [device, setDevice] = useState(getDevice(NaN));
  window.addEventListener('optimizedResize', e => {
    setDevice(getDevice(e && e.target && e.target.innerWidth));
  });
  return (
    <ConfigProvider device={device}>
      <Shell
        type="dark"
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Logo
            image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            text="Logo"
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        ></Shell.Navigation>
        <Shell.Action></Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
    `
  );
  return [["src", "layouts", "BasicLayout"], file2];
}

// src/plugins/project/framework/icejs3/template/files/src/layouts/BasicLayout/menuConfig.js.ts
function getFile32() {
  const file2 = createResultFile(
    "menuConfig",
    "js",
    `
const headerMenuConfig = [];
const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/',
    icon: 'smile',
  },
];
export { headerMenuConfig, asideMenuConfig };
    `
  );
  return [["src", "layouts", "BasicLayout"], file2];
}

// src/plugins/project/framework/icejs3/template/static-files.ts
function generateStaticFiles2(root = createResultDir(".")) {
  runFileGenerator(root, getFile21);
  runFileGenerator(root, getFile22);
  runFileGenerator(root, getFile23);
  runFileGenerator(root, getFile24);
  runFileGenerator(root, getFile25);
  runFileGenerator(root, getFile26);
  runFileGenerator(root, getFile27);
  runFileGenerator(root, getFile28);
  runFileGenerator(root, getFile29);
  runFileGenerator(root, getFile30);
  runFileGenerator(root, getFile31);
  runFileGenerator(root, getFile32);
  return root;
}

// src/plugins/project/framework/icejs3/template/index.ts
var icejs3Template = {
  slots: {
    components: {
      path: ["src", "components"],
      fileName: "index"
    },
    pages: {
      path: ["src", "pages"],
      fileName: "index"
    },
    entry: {
      path: ["src"],
      fileName: "app"
    },
    constants: {
      path: ["src"],
      fileName: "constants"
    },
    utils: {
      path: ["src"],
      fileName: "utils"
    },
    i18n: {
      path: ["src"],
      fileName: "i18n"
    },
    globalStyle: {
      path: ["src"],
      fileName: "global"
    },
    packageJSON: {
      path: [],
      fileName: "package"
    },
    appConfig: {
      path: ["src"],
      fileName: "app"
    },
    buildConfig: {
      path: [],
      fileName: "ice.config"
    },
    layout: {
      path: ["src", "pages"],
      fileName: "layout"
    }
  },
  generateTemplate() {
    return generateStaticFiles2();
  }
};
var template_default2 = icejs3Template;

// src/plugins/project/framework/icejs3/plugins/globalStyle.ts
var pluginFactory23 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "scss" /* SCSS */,
      name: COMMON_CHUNK_NAME.StyleDepsImport,
      content: `
        // \u5F15\u5165\u9ED8\u8BA4\u5168\u5C40\u6837\u5F0F
        @import '@alifd/next/reset.scss';
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "scss" /* SCSS */,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: `
        body {
          -webkit-font-smoothing: antialiased;
        }
      `,
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "scss" /* SCSS */,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: ir.css || "",
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    return next;
  };
  return plugin;
};
var globalStyle_default2 = pluginFactory23;

// src/plugins/project/framework/icejs3/plugins/packageJSON.ts
var pluginFactory24 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const packageJson = {
      name: (cfg == null ? void 0 : cfg.packageName) || "icejs3-demo-app",
      version: (cfg == null ? void 0 : cfg.packageVersion) || "0.1.5",
      description: "icejs 3 \u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002",
      dependencies: {
        moment: "^2.24.0",
        react: "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router": "^6.9.0",
        "react-router-dom": "^6.9.0",
        "intl-messageformat": "^9.3.6",
        "@alifd/next": "1.26.15",
        "@ice/runtime": "~1.1.0",
        ...buildDataSourceDependencies(ir, cfg == null ? void 0 : cfg.datasourceConfig)
      },
      devDependencies: {
        "@ice/app": "~3.1.0",
        "@types/react": "^18.0.0",
        "@types/react-dom": "^18.0.0",
        "@types/node": "^18.11.17",
        "@ice/plugin-fusion": "^1.0.1",
        "@ice/plugin-moment-locales": "^1.0.0",
        eslint: "^6.0.1",
        stylelint: "^13.2.0"
      },
      scripts: {
        start: "ice start",
        build: "ice build",
        lint: "npm run eslint && npm run stylelint",
        eslint: "eslint --cache --ext .js,.jsx ./",
        stylelint: "stylelint ./**/*.scss"
      },
      engines: {
        node: ">=14.0.0"
      },
      repository: {
        type: "git",
        url: "http://gitlab.xxx.com/msd/leak-scan/tree/master"
      },
      private: true,
      originTemplate: "@alifd/scaffold-lite-js"
    };
    ir.packages.forEach((packageInfo) => {
      packageJson.dependencies[packageInfo.package] = packageInfo.version;
    });
    next.chunks.push({
      type: "json" /* JSON */,
      fileType: "json" /* JSON */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var packageJSON_default2 = pluginFactory24;

// src/plugins/project/framework/icejs3/plugins/layout.ts
var pluginFactory25 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: `
      import { Outlet } from 'ice';
      import BasicLayout from '@/layouts/BasicLayout';

      export default function Layout() {
        return (
          <BasicLayout>
            <Outlet />
          </BasicLayout>
        );;
      }
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var layout_default = pluginFactory25;

// src/plugins/project/framework/icejs3/plugins/appConfig.ts
function getContent() {
  return `import { defineAppConfig } from 'ice';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({
  // Set your configs here.
  app: {
    rootId: 'App',
  },
  router: {
    type: 'browser',
    basename: '/',
  },
}));`;
}
var pluginFactory26 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "ts" /* TS */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: getContent(),
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var appConfig_default = pluginFactory26;

// src/utils/format.ts
var import_prettier3 = __toESM(require("prettier"));
var import_parser_babel2 = __toESM(require("prettier/parser-babel"));
function format(content, options = {}) {
  return import_prettier3.default.format(content, {
    parser: "babel",
    plugins: [import_parser_babel2.default],
    singleQuote: true,
    jsxSingleQuote: false,
    ...options
  });
}

// src/utils/theme.ts
function getThemeInfo(theme) {
  const sepIdx = theme.indexOf("@", 1);
  if (sepIdx === -1) {
    return { name: theme };
  }
  return {
    name: theme.slice(0, sepIdx),
    version: theme.slice(sepIdx + 1)
  };
}

// src/plugins/project/framework/icejs3/plugins/buildConfig.ts
function getContent2(cfg, routesContent) {
  return `
import { join } from 'path';
import { defineConfig } from '@ice/app';
import _ from 'lodash';
import fusion from '@ice/plugin-fusion';
import locales from '@ice/plugin-moment-locales';
import type { Plugin } from '@ice/app/esm/types';

interface PluginOptions {
  id: string;
}

const plugin: Plugin<PluginOptions> = (options) => ({
  // name \u53EF\u9009\uFF0C\u63D2\u4EF6\u540D\u79F0
  name: 'plugin-name',
  // setup \u5FC5\u9009\uFF0C\u7528\u4E8E\u5B9A\u5236\u5DE5\u7A0B\u6784\u5EFA\u914D\u7F6E
  setup: ({ onGetConfig, modifyUserConfig }) => {
    modifyUserConfig('codeSplitting', 'page');

    onGetConfig((config) => {
      config.entry = {
        web: join(process.cwd(), '.ice/entry.client.tsx'),
      };

      config.cssFilename = '[name].css';

      config.configureWebpack = config.configureWebpack || [];
      config.configureWebpack?.push((webpackConfig) => {
        if (webpackConfig.output) {
          webpackConfig.output.filename = '[name].js';
          webpackConfig.output.chunkFilename = '[name].js';
        }
        return webpackConfig;
      });

      config.swcOptions = _.merge(config.swcOptions, {
        compilationConfig: {
          jsc: {
            transform: {
              react: {
                runtime: 'classic',
              },
            },
          },
        }
      });

      // \u89E3\u51B3 webpack publicPath \u95EE\u9898
      config.transforms = config.transforms || [];
      config.transforms.push((source: string, id: string) => {
        if (id.includes('.ice/entry.client.tsx')) {
          let code = \`
          if (!__webpack_public_path__?.startsWith('http') && document.currentScript) {
            // @ts-ignore
            __webpack_public_path__ = document.currentScript.src.replace(/^(.*\\\\/)[^/]+$/, '$1');
            window.__ICE_ASSETS_MANIFEST__ = window.__ICE_ASSETS_MANIFEST__ || {};
            window.__ICE_ASSETS_MANIFEST__.publicPath = __webpack_public_path__;
          }
          \`;
          code += source;
          return { code };
        }
      });
    });
  },
});

// The project config, see https://v3.ice.work/docs/guide/basic/config
const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  ssr: false,
  ssg: false,
  minify,
  ${routesContent}
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-dom/client': 'ReactDOM',
    '@alifd/next': 'Next',
    lodash: 'var window._',
    '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
  },
  plugins: [
    fusion(${(cfg == null ? void 0 : cfg.themePackage) ? `{
      importStyle: 'sass',
      themePackage: '${getThemeInfo(cfg.themePackage).name}',
    }` : `{
      importStyle: 'sass',
    }`}),
    locales(),
    plugin(),
  ]
}));
  `;
}
function getRoutesContent(navData, needShell = true) {
  const routes = [
    "routes: {",
    "  defineRoutes: route => {"
  ];
  function _getRoutes(nav, _routes = []) {
    const { slug, children } = nav;
    if (children && children.length > 0) {
      children.forEach((_nav) => _getRoutes(_nav, _routes));
    } else if (slug) {
      _routes.push(`route('/${slug}', '${slug}/index.jsx');`);
    }
  }
  if (needShell) {
    routes.push("    route('/', 'layout.jsx', () => {");
  }
  navData == null ? void 0 : navData.forEach((nav) => {
    _getRoutes(nav, routes);
  });
  if (needShell) {
    routes.push("    });");
  }
  routes.push("  }");
  routes.push("  },");
  return routes.join("\n");
}
var pluginFactory27 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const { navConfig } = next.contextData;
    const routesContent = (navConfig == null ? void 0 : navConfig.data) ? getRoutesContent(navConfig.data, true) : "";
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "mts" /* MTS */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: format(getContent2(cfg, routesContent)),
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var buildConfig_default = pluginFactory27;

// src/plugins/project/framework/icejs3/index.ts
var icejs3_default = {
  template: template_default2,
  plugins: {
    appConfig: appConfig_default,
    buildConfig: buildConfig_default,
    globalStyle: globalStyle_default2,
    packageJSON: packageJSON_default2,
    layout: layout_default
  }
};

// src/solutions/icejs3.ts
function createIceJsProjectBuilder2(options) {
  return createProjectBuilder({
    inStrictMode: options == null ? void 0 : options.inStrictMode,
    extraContextData: { ...options },
    template: icejs3_default.template,
    plugins: {
      components: [
        reactCommonDeps_default(),
        esmodule_default({
          fileType: "jsx"
        }),
        styleImport_default(),
        containerClass_default(),
        containerInjectContext_default(),
        containerInjectUtils_default(),
        containerInjectDataSourceEngine_default(),
        containerInjectI18n_default(),
        containerInjectConstants_default(),
        containerInitState_default(),
        containerLifeCycle_default(),
        containerMethod_default(),
        jsx_default({
          nodeTypeMapping: {
            Div: "div",
            Component: "div",
            Page: "div",
            Block: "div"
          }
        }),
        css_default()
      ],
      pages: [
        reactCommonDeps_default(),
        esmodule_default({
          fileType: "jsx"
        }),
        styleImport_default(),
        containerClass_default(),
        containerInjectContext_default(),
        containerInjectUtils_default(),
        containerInjectDataSourceEngine_default(),
        containerInjectI18n_default(),
        containerInjectConstants_default(),
        containerInitState_default(),
        containerLifeCycle_default(),
        containerMethod_default(),
        jsx_default({
          nodeTypeMapping: {
            Div: "div",
            Component: "div",
            Page: "div",
            Block: "div",
            Box: "div"
          }
        }),
        css_default()
      ],
      constants: [constants_default()],
      utils: [esmodule_default(), utils_default("react")],
      i18n: [i18n_default()],
      globalStyle: [icejs3_default.plugins.globalStyle()],
      packageJSON: [icejs3_default.plugins.packageJSON()],
      buildConfig: [icejs3_default.plugins.buildConfig()],
      appConfig: [icejs3_default.plugins.appConfig()],
      layout: [icejs3_default.plugins.layout()]
    },
    postProcessors: [prettier_default()],
    customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
  });
}
var plugins2 = {
  containerClass: containerClass_default,
  containerInitState: containerInitState_default,
  containerInjectContext: containerInjectContext_default,
  containerInjectUtils: containerInjectUtils_default,
  containerInjectI18n: containerInjectI18n_default,
  containerInjectDataSourceEngine: containerInjectDataSourceEngine_default,
  containerLifeCycle: containerLifeCycle_default,
  containerMethod: containerMethod_default,
  jsx: jsx_default,
  commonDeps: reactCommonDeps_default
};

// src/plugins/component/rax/containerClass.ts
var import_change_case7 = __toESM(require("change-case"));

// src/plugins/component/rax/const.ts
var RAX_CHUNK_NAME = {
  ClassDidMountBegin: "RaxComponentClassDidMountBegin",
  ClassDidMountContent: "RaxComponentClassDidMountContent",
  ClassDidMountEnd: "RaxComponentClassDidMountEnd",
  ClassWillUnmountBegin: "RaxComponentClassWillUnmountBegin",
  ClassWillUnmountContent: "RaxComponentClassWillUnmountContent",
  ClassWillUnmountEnd: "RaxComponentClassWillUnmountEnd",
  ClassRenderBegin: "RaxComponentClassRenderBegin",
  ClassRenderPre: "RaxComponentClassRenderPre",
  ClassRenderJSX: "RaxComponentClassRenderJSX",
  ClassRenderEnd: "RaxComponentClassRenderEnd",
  MethodsBegin: "RaxComponentMethodsBegin",
  MethodsContent: "RaxComponentMethodsContent",
  MethodsEnd: "RaxComponentMethodsEnd",
  LifeCyclesBegin: "RaxComponentLifeCyclesBegin",
  LifeCyclesContent: "RaxComponentLifeCyclesContent",
  LifeCyclesEnd: "RaxComponentLifeCyclesEnd"
};

// src/plugins/component/rax/containerClass.ts
var pluginFactory28 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const componentClassName = ensureValidClassName(
      `${import_change_case7.default.pascalCase(ir.moduleName)}$$Page`
    );
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.Start,
      content: `class ${componentClassName} extends Component {`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.End,
      content: "}",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.Start,
        CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
        RAX_CHUNK_NAME.ClassRenderEnd,
        RAX_CHUNK_NAME.MethodsEnd
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorStart,
      content: "constructor(props, context) { super(props); ",
      linkAfter: DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorStart]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorEnd,
      content: "} /* end of constructor */",
      linkAfter: DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorEnd]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: RAX_CHUNK_NAME.ClassDidMountBegin,
      content: "componentDidMount() {",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.Start,
        CLASS_DEFINE_CHUNK_NAME.InsVar,
        CLASS_DEFINE_CHUNK_NAME.InsMethod,
        CLASS_DEFINE_CHUNK_NAME.ConstructorEnd
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: RAX_CHUNK_NAME.ClassDidMountEnd,
      content: "} /* end of componentDidMount */",
      linkAfter: [RAX_CHUNK_NAME.ClassDidMountBegin, RAX_CHUNK_NAME.ClassDidMountContent]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: RAX_CHUNK_NAME.ClassWillUnmountBegin,
      content: "componentWillUnmount() {",
      linkAfter: [
        CLASS_DEFINE_CHUNK_NAME.Start,
        CLASS_DEFINE_CHUNK_NAME.InsVar,
        CLASS_DEFINE_CHUNK_NAME.InsMethod,
        RAX_CHUNK_NAME.ClassDidMountEnd
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: RAX_CHUNK_NAME.ClassWillUnmountEnd,
      content: "} /* end of componentWillUnmount */",
      linkAfter: [RAX_CHUNK_NAME.ClassWillUnmountBegin, RAX_CHUNK_NAME.ClassWillUnmountContent]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: RAX_CHUNK_NAME.ClassRenderBegin,
      content: "render() {",
      linkAfter: [RAX_CHUNK_NAME.ClassDidMountEnd, RAX_CHUNK_NAME.ClassWillUnmountEnd]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: RAX_CHUNK_NAME.ClassRenderEnd,
      content: "} /* end of render */",
      linkAfter: [
        RAX_CHUNK_NAME.ClassRenderBegin,
        RAX_CHUNK_NAME.ClassRenderPre,
        RAX_CHUNK_NAME.ClassRenderJSX
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.FileExport,
      content: `export default ${componentClassName};`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine,
        CLASS_DEFINE_CHUNK_NAME.End
      ]
    });
    return next;
  };
  return plugin;
};
var containerClass_default2 = pluginFactory28;

// src/plugins/component/rax/containerLifeCycle.ts
var import_lodash5 = __toESM(require("lodash"));
var import_lowcode_types8 = require("@alilc/lowcode-types");

// src/utils/debug.ts
var import_debug = __toESM(require("debug"));
var debug = (0, import_debug.default)("code-generator");

// src/plugins/component/rax/containerLifeCycle.ts
var pluginFactory29 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    exportNameMapping: {},
    normalizeNameMapping: {
      didMount: "componentDidMount",
      willUnmount: "componentWillUnmount"
    },
    ...config
  };
  const exportNameMapping = new Map(Object.entries(cfg.exportNameMapping));
  const normalizeNameMapping = new Map(Object.entries(cfg.normalizeNameMapping));
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const { lifeCycles } = ir;
    if (lifeCycles && !import_lodash5.default.isEmpty(lifeCycles)) {
      Object.entries(lifeCycles).forEach(([lifeCycleName, lifeCycleMethodExpr]) => {
        if (!(0, import_lowcode_types8.isJSFunction)(lifeCycles[lifeCycleName]) && !isJSExpressionFn(lifeCycles[lifeCycleName]) && !(0, import_lowcode_types8.isJSExpression)(lifeCycles[lifeCycleName])) {
          return;
        }
        const normalizeName = normalizeNameMapping.get(lifeCycleName) || lifeCycleName;
        const exportName = exportNameMapping.get(lifeCycleName) || lifeCycleName;
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.LifeCyclesContent,
          content: `${exportName}: (${lifeCycleMethodExpr.value}),`,
          linkAfter: [RAX_CHUNK_NAME.LifeCyclesBegin]
        });
        if (normalizeName === "constructor") {
          next.chunks.push({
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
            content: `this._lifeCycles.${exportName}();`,
            linkAfter: [CLASS_DEFINE_CHUNK_NAME.ConstructorStart]
          });
        } else if (normalizeName === "componentDidMount") {
          next.chunks.push({
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: RAX_CHUNK_NAME.ClassDidMountContent,
            content: `this._lifeCycles.${exportName}();`,
            linkAfter: [RAX_CHUNK_NAME.ClassDidMountBegin]
          });
        } else if (normalizeName === "componentWillUnmount") {
          next.chunks.push({
            type: "string" /* STRING */,
            fileType: cfg.fileType,
            name: RAX_CHUNK_NAME.ClassWillUnmountContent,
            content: `this._lifeCycles.${exportName}();`,
            linkAfter: [RAX_CHUNK_NAME.ClassWillUnmountBegin]
          });
        } else {
          debug(`[CodeGen]: unknown life cycle: ${lifeCycleName}`);
        }
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: "_lifeCycles = this._defineLifeCycles();",
        linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: RAX_CHUNK_NAME.LifeCyclesBegin,
        content: `
          _defineLifeCycles() {
            const __$$lifeCycles = ({
        `,
        linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd, CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod]
      });
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: RAX_CHUNK_NAME.LifeCyclesEnd,
        content: `
            });

            // \u4E3A\u6240\u6709\u7684\u65B9\u6CD5\u7ED1\u5B9A\u4E0A\u4E0B\u6587
            Object.entries(__$$lifeCycles).forEach(([lifeCycleName, lifeCycleMethod]) => {
              if (typeof lifeCycleMethod === 'function') {
                __$$lifeCycles[lifeCycleName] = (...args) => {
                  return lifeCycleMethod.apply(this._context, args);
                }
              }
            });

            return __$$lifeCycles;
          }
        `,
        linkAfter: [RAX_CHUNK_NAME.LifeCyclesBegin, RAX_CHUNK_NAME.LifeCyclesContent]
      });
    }
    return next;
  };
  return plugin;
};
var containerLifeCycle_default2 = pluginFactory29;

// src/plugins/component/rax/containerMethods.ts
var pluginFactory30 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsVar,
      content: `
         _methods = this._defineMethods();
      `,
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: RAX_CHUNK_NAME.MethodsBegin,
      content: `
        _defineMethods() {
          return ({
      `,
      linkAfter: [
        RAX_CHUNK_NAME.ClassRenderEnd,
        CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
        RAX_CHUNK_NAME.LifeCyclesEnd
      ]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: RAX_CHUNK_NAME.MethodsEnd,
      content: `
          });
        }
      `,
      linkAfter: [RAX_CHUNK_NAME.MethodsBegin, RAX_CHUNK_NAME.MethodsContent]
    });
    if (ir.methods && Object.keys(ir.methods).length > 0) {
      Object.entries(ir.methods).forEach(([methodName, methodDefine]) => {
        next.chunks.push({
          type: "string" /* STRING */,
          fileType: cfg.fileType,
          name: RAX_CHUNK_NAME.MethodsContent,
          content: `${methodName}: (${methodDefine.value}),`,
          linkAfter: [RAX_CHUNK_NAME.MethodsBegin]
        });
      });
    }
    return next;
  };
  return plugin;
};
var containerMethods_default = pluginFactory30;

// src/plugins/component/rax/containerInitState.ts
var pluginFactory31 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    implementType: "insMember",
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const scope = Scope.createRootScope();
    const state = ir.state || {};
    const fields = Object.keys(state).map((stateName) => {
      const value = generateCompositeType(state[stateName], scope);
      return `${JSON.stringify(stateName)}: ${value}`;
    });
    if (cfg.implementType === "inConstructor") {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
        content: `this.state = { ${fields.join(",")} };`,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
      });
    } else if (cfg.implementType === "insMember") {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: CLASS_DEFINE_CHUNK_NAME.InsVar,
        content: `state = { ${fields.join(",")} };`,
        linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.InsVar]]
      });
    }
    return next;
  };
  return plugin;
};
var containerInitState_default2 = pluginFactory31;

// src/plugins/component/rax/containerInjectContext.ts
var pluginFactory32 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    var _a;
    const next = {
      ...pre
    };
    const ir = next.ir;
    const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: "import __$$constants from '../../constants';",
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: "import * as __$$i18n from '../../i18n';",
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.ConstructorContent,
      content: `
        __$$i18n._inject2(this);
      `,
      linkAfter: [...DEFAULT_LINK_AFTER[CLASS_DEFINE_CHUNK_NAME.ConstructorContent]]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsVar,
      content: `
        _context = this._createContext();
      `,
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
      content: `
        _createContext() {
          const self = this;
          const context = {
            get state() {
              return self.state;
            },
            setState(newState, callback) {
              self.setState(newState, callback);
            },
            get dataSourceMap() {
              return self._dataSourceEngine.dataSourceMap || {};
            },
            async reloadDataSource() {
              await self._dataSourceEngine.reloadDataSource();
            },
            get utils() {
              return self._utils;
            },
            get page() {
              return context;
            },
            get component() {
              return context;
            },
            get props() {
              return self.props;
            },
            get constants() {
              return __$$constants;
            },
            i18n: __$$i18n.i18n,
            i18nFormat: __$$i18n.i18nFormat,
            getLocale: __$$i18n.getLocale,
            setLocale(locale) {
              __$$i18n.setLocale(locale);
              self.forceUpdate();
            },${useRef ? `
                  $(refName) {
                    return self._refsManager.get(refName);
                  },
                  $$(refName) {
                    return self._refsManager.getAll(refName);
                  },
                  get _refsManager() {
                    if (!self._refsManager) {
                      self._refsManager = new RefsManager();
                    }
                    return self._refsManager;
                  },
                ` : ""}
            ...this._methods,
          };

          return context;
        }
      `,
      linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd]
    });
    return next;
  };
  return plugin;
};
var containerInjectContext_default2 = pluginFactory32;

// src/plugins/component/rax/containerInjectDataSourceEngine.ts
var import_lowcode_types9 = require("@alilc/lowcode-types");
var import_change_case8 = __toESM(require("change-case"));
var pluginFactory33 = (config) => {
  var _a;
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config,
    dataSourceHandlersPackageMap: (config == null ? void 0 : config.dataSourceHandlersPackageMap) || ((_a = config == null ? void 0 : config.datasourceConfig) == null ? void 0 : _a.handlersPackages)
  };
  const plugin = async (pre) => {
    var _a2;
    const next = {
      ...pre
    };
    const scope = Scope.createRootScope();
    const dataSourceConfig = isContainerSchema(pre.ir) ? pre.ir.dataSource : null;
    const dataSourceItems = dataSourceConfig && dataSourceConfig.list || [];
    const dataSourceEngineOptions = { runtimeConfig: true };
    if (dataSourceItems.length > 0) {
      const requestHandlersMap = {};
      dataSourceItems.forEach((ds) => {
        var _a3;
        const dsType = ds.type || "fetch";
        if (!(dsType in requestHandlersMap) && dsType !== "custom") {
          const handlerFactoryName = `__$$create${import_change_case8.default.pascal(dsType)}RequestHandler`;
          requestHandlersMap[dsType] = {
            type: "JSExpression",
            value: `${handlerFactoryName}(${dsType === "urlParams" ? "__$$getSearchParams()" : ""})`
          };
          const handlerFactoryExportName = `create${import_change_case8.default.pascal(dsType)}Handler`;
          const handlerPkgName = ((_a3 = cfg.dataSourceHandlersPackageMap) == null ? void 0 : _a3[dsType]) || `@alilc/lowcode-datasource-${import_change_case8.default.kebab(dsType)}-handler`;
          next.chunks.push({
            type: "string" /* STRING */,
            fileType: "jsx" /* JSX */,
            name: COMMON_CHUNK_NAME.ExternalDepsImport,
            content: `
              import { ${handlerFactoryExportName} as ${handlerFactoryName} } from '${handlerPkgName}';
            `,
            linkAfter: []
          });
        }
      });
      Object.assign(dataSourceEngineOptions, { requestHandlersMap });
    }
    const datasourceEnginePackageName = ((_a2 = cfg.datasourceConfig) == null ? void 0 : _a2.enginePackage) || "@alilc/lowcode-datasource-engine";
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
        import { create as __$$createDataSourceEngine } from '${datasourceEnginePackageName}/runtime';
      `,
      linkAfter: []
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsVar,
      content: `
        _dataSourceConfig = this._defineDataSourceConfig();
        _dataSourceEngine = __$$createDataSourceEngine(
          this._dataSourceConfig,
          this._context,
          ${generateCompositeType(dataSourceEngineOptions, scope)}
        );`,
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: RAX_CHUNK_NAME.ClassDidMountContent,
      content: `
        this._dataSourceEngine.reloadDataSource();
      `,
      linkAfter: [RAX_CHUNK_NAME.ClassDidMountBegin]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
      content: `
_defineDataSourceConfig() {
  const __$$context = this._context;
  return (${generateCompositeType(
        {
          ...dataSourceConfig,
          list: [
            ...dataSourceItems.map((item) => {
              var _a3;
              return {
                errorHandler: {
                  type: "JSFunction",
                  value: `function (err){
              setTimeout(() => {
                this.setState({ __refresh: Date.now() + Math.random() });
              }, 0);
              throw err;
            }`
                },
                ...item,
                isInit: typeof item.isInit === "boolean" || typeof item.isInit === "undefined" ? (_a3 = item.isInit) != null ? _a3 : true : wrapAsFunction2(item.isInit, scope),
                options: wrapAsFunction2(item.options, scope)
              };
            })
          ]
        },
        scope,
        {
          handlers: {
            function: (jsFunc) => parseExpressionConvertThis2Context(jsFunc.value, "__$$context"),
            expression: (jsExpr) => parseExpressionConvertThis2Context(jsExpr.value, "__$$context")
          }
        }
      )});
}
      `,
      linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd]
    });
    return next;
  };
  return plugin;
};
var containerInjectDataSourceEngine_default2 = pluginFactory33;
function wrapAsFunction2(value, scope) {
  if ((0, import_lowcode_types9.isJSExpression)(value) || (0, import_lowcode_types9.isJSFunction)(value)) {
    return {
      type: "JSExpression",
      value: `function(){ return ((${value.value}))}`
    };
  }
  return {
    type: "JSExpression",
    value: `function(){return((${generateCompositeType(value, scope)}))}`
  };
}

// src/plugins/component/rax/containerInjectUtils.ts
var pluginFactory34 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    var _a;
    const next = {
      ...pre
    };
    const ir = next.ir;
    const useRef = !!((_a = ir.analyzeResult) == null ? void 0 : _a.isUsingRef);
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: `
        import __$$projectUtils${useRef ? ", { RefsManager }" : ""} from '../../utils';
      `,
      linkAfter: [COMMON_CHUNK_NAME.ExternalDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsVar,
      content: "_utils = this._defineUtils();",
      linkAfter: [CLASS_DEFINE_CHUNK_NAME.Start]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: CLASS_DEFINE_CHUNK_NAME.InsPrivateMethod,
      content: `
        _defineUtils() {
          return {
            ...__$$projectUtils,
          };
        }`,
      linkAfter: [RAX_CHUNK_NAME.ClassRenderEnd]
    });
    return next;
  };
  return plugin;
};
var containerInjectUtils_default2 = pluginFactory34;

// src/plugins/component/rax/jsx.ts
var import_lowcode_types10 = require("@alilc/lowcode-types");
var import_lodash6 = __toESM(require("lodash"));
var import_change_case9 = __toESM(require("change-case"));
var pluginFactory35 = (config) => {
  const cfg = {
    fileType: "jsx" /* JSX */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const rootScope = Scope.createRootScope();
    const { tolerateEvalErrors = true, evalErrorsHandler = "" } = next.contextData;
    const componentsNameAliasMap = /* @__PURE__ */ new Map();
    next.chunks.forEach((chunk) => {
      if (isImportAliasDefineChunk(chunk)) {
        componentsNameAliasMap.set(chunk.ext.aliasName, chunk.ext.originalName);
      }
    });
    const mapComponentNameToAliasOrKeepIt = (componentName) => componentsNameAliasMap.get(componentName) || componentName;
    next.chunks = next.chunks.filter((chunk) => !isImportAliasDefineChunk(chunk));
    const customHandlers = {
      expression(input, scope) {
        return transformJsExpr(generateExpression(input, scope), scope, {
          dontWrapEval: !tolerateEvalErrors
        });
      },
      function(input, scope) {
        return transformThis2Context(input.value || "null", scope);
      }
    };
    const commonNodeGenerator = createNodeGenerator({
      handlers: customHandlers,
      tagMapping: mapComponentNameToAliasOrKeepIt,
      nodePlugins: [generateReactExprInJS, generateConditionReactCtrl, generateRaxLoopCtrl],
      attrPlugins: [generateNodeAttrForRax.bind({ cfg })]
    });
    const jsxContent = commonNodeGenerator(ir, rootScope);
    if (!cfg.ignoreMiniApp) {
      next.chunks.push({
        type: "string" /* STRING */,
        fileType: cfg.fileType,
        name: COMMON_CHUNK_NAME.ExternalDepsImport,
        content: "import { isMiniApp as __$$isMiniApp } from 'universal-env';",
        linkAfter: []
      });
    }
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: RAX_CHUNK_NAME.ClassRenderPre,
      content: `
        const __$$context = this._context;
        const { state, setState, dataSourceMap, reloadDataSource, utils, constants, i18n, i18nFormat, getLocale, setLocale } = __$$context;
      `,
      linkAfter: [RAX_CHUNK_NAME.ClassRenderBegin]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: RAX_CHUNK_NAME.ClassRenderJSX,
      content: `return ${jsxContent};`,
      linkAfter: [RAX_CHUNK_NAME.ClassRenderBegin, RAX_CHUNK_NAME.ClassRenderPre]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.CustomContent,
      content: [
        tolerateEvalErrors && `
        function __$$eval(expr) {
          try {
            return expr();
          } catch (error) {
            ${evalErrorsHandler}
          }
        }

        function __$$evalArray(expr) {
          const res = __$$eval(expr);
          return Array.isArray(res) ? res : [];
        }
        `,
        `
        function __$$createChildContext(oldContext, ext) {
          return Object.assign({}, oldContext, ext);
        }
      `
      ].filter(Boolean).join("\n"),
      linkAfter: [COMMON_CHUNK_NAME.FileExport]
    });
    return next;
    function generateRaxLoopCtrl(nodeItem, scope, config2, next2) {
      var _a, _b;
      if (nodeItem.loop) {
        const loopItemName = ((_a = nodeItem.loopArgs) == null ? void 0 : _a[0]) || "item";
        const loopIndexName = ((_b = nodeItem.loopArgs) == null ? void 0 : _b[1]) || "index";
        const subScope = scope.createSubScope([loopItemName, loopIndexName]);
        const pieces = next2 ? next2(nodeItem, subScope, config2) : [];
        const loopDataExpr = tolerateEvalErrors ? `__$$evalArray(() => (${transformThis2Context(
          generateCompositeType(nodeItem.loop, scope, { handlers: config2 == null ? void 0 : config2.handlers }),
          scope
        )}))` : `(${transformThis2Context(
          generateCompositeType(nodeItem.loop, scope, { handlers: config2 == null ? void 0 : config2.handlers }),
          scope
        )})`;
        pieces.unshift({
          value: `${loopDataExpr}.map((${loopItemName}, ${loopIndexName}) => ((__$$context) => (`,
          type: "NodeCodePieceBefore" /* BEFORE */
        });
        pieces.push({
          value: `))(__$$createChildContext(__$$context, { ${loopItemName}, ${loopIndexName} })))`,
          type: "NodeCodePieceAfter" /* AFTER */
        });
        return pieces;
      }
      return next2 ? next2(nodeItem, scope, config2) : [];
    }
  };
  return plugin;
};
var jsx_default2 = pluginFactory35;
function isImportAliasDefineChunk(chunk) {
  var _a;
  return chunk.name === COMMON_CHUNK_NAME.ImportAliasDefine && !!chunk.ext && typeof chunk.ext.aliasName === "string" && typeof chunk.ext.originalName === "string" && !!((_a = chunk.ext.dependency) == null ? void 0 : _a.componentName);
}
function generateNodeAttrForRax(attrData, scope, config, next) {
  if (!this.cfg.ignoreMiniApp && /^on/.test(attrData.attrName)) {
    return generateEventHandlerAttrForRax(attrData.attrName, attrData.attrValue, scope, config);
  }
  if (attrData.attrName === "ref") {
    return [
      {
        name: attrData.attrName,
        value: `__$$context._refsManager.linkRef('${attrData.attrValue}')`,
        type: "NodeCodePieceAttr" /* ATTR */
      }
    ];
  }
  return next ? next(attrData, scope, config) : [];
}
function generateEventHandlerAttrForRax(attrName, attrValue, scope, config) {
  var _a;
  const valueExpr = generateCompositeType(
    (0, import_lowcode_types10.isJSExpression)(attrValue) ? { type: "JSFunction", value: attrValue.value } : attrValue,
    scope,
    {
      handlers: config == null ? void 0 : config.handlers
    }
  );
  const currentScopeVariables = ((_a = scope.bindings) == null ? void 0 : _a.getAllBindings()) || [];
  if (currentScopeVariables.length <= 0) {
    return [
      {
        type: "NodeCodePieceAttr" /* ATTR */,
        name: attrName,
        value: valueExpr
      }
    ];
  }
  const undeclaredVariablesInValueExpr = parseExpressionGetGlobalVariables(valueExpr);
  const referencedLocalVariables = import_lodash6.default.intersection(
    undeclaredVariablesInValueExpr,
    currentScopeVariables
  );
  if (referencedLocalVariables.length <= 0) {
    return [
      {
        type: "NodeCodePieceAttr" /* ATTR */,
        name: attrName,
        value: valueExpr
      }
    ];
  }
  const wrappedAttrValueExpr = [
    "(...__$$args) => {",
    "  if (__$$isMiniApp) {",
    "    const __$$event = __$$args[0];",
    ...referencedLocalVariables.map(
      (localVar) => `const ${localVar} = __$$event.target.dataset.${localVar};`
    ),
    `    return (${valueExpr}).apply(this, __$$args);`,
    "  } else {",
    `    return (${valueExpr}).apply(this, __$$args);`,
    "  }",
    "}"
  ].join("\n");
  return [
    ...referencedLocalVariables.map((localVar) => ({
      type: "NodeCodePieceAttr" /* ATTR */,
      name: `data-${import_change_case9.default.snake(localVar)}`,
      value: localVar
    })),
    {
      type: "NodeCodePieceAttr" /* ATTR */,
      name: attrName,
      value: wrappedAttrValueExpr
    }
  ];
}

// src/plugins/component/rax/commonDeps.ts
var pluginFactory36 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
        // \u6CE8\u610F: \u51FA\u7801\u5F15\u64CE\u6CE8\u5165\u7684\u4E34\u65F6\u53D8\u91CF\u9ED8\u8BA4\u90FD\u4EE5 "__$$" \u5F00\u5934\uFF0C\u7981\u6B62\u5728\u642D\u5EFA\u7684\u4EE3\u7801\u4E2D\u76F4\u63A5\u8BBF\u95EE\u3002
        // \u4F8B\u5916\uFF1Arax \u6846\u67B6\u7684\u5BFC\u51FA\u540D\u548C\u5404\u79CD\u7EC4\u4EF6\u540D\u9664\u5916\u3002
        import { createElement, Component } from 'rax';
        import { getSearchParams as __$$getSearchParams } from 'rax-app';
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var commonDeps_default = pluginFactory36;

// src/plugins/project/framework/rax/template/files/.eslintignore.ts
function getFile33() {
  return [
    ["."],
    {
      name: ".eslintignore",
      ext: "",
      content: "node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/.eslintrc.js.ts
function getFile34() {
  return [
    ["."],
    {
      name: ".eslintrc",
      ext: "js",
      content: "const { getESLintConfig } = require('@iceworks/spec');\n\n// https://www.npmjs.com/package/@iceworks/spec\nmodule.exports = {\n  ...getESLintConfig('rax'),\n  rules: {\n    'max-len': ['error', { code: 200 }],\n    'function-paren-newline': 'off',\n    '@typescript-eslint/indent': 'off',\n    'prettier/prettier': 'off',\n    'no-empty': 'off',\n    'no-unused-vars': 'off',\n    '@iceworks/best-practices/recommend-functional-component': 'off',\n  },\n};\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/.gitignore.ts
function getFile35() {
  return [
    ["."],
    {
      name: ".gitignore",
      ext: "",
      content: "# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.\n\n*~\n*.swp\n*.log\n\n.DS_Store\n.idea/\n.temp/\n\nbuild/\ndist/\nlib/\ncoverage/\nnode_modules/\n.rax/\n\ntemplate.yml"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/.prettierignore.ts
function getFile36() {
  return [
    ["."],
    {
      name: ".prettierignore",
      ext: "",
      content: "node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/.prettierrc.js.ts
function getFile37() {
  return [
    ["."],
    {
      name: ".prettierrc",
      ext: "js",
      content: "const { getPrettierConfig } = require('@iceworks/spec');\n\nmodule.exports = getPrettierConfig('rax');\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/.stylelintignore.ts
function getFile38() {
  return [
    ["."],
    {
      name: ".stylelintignore",
      ext: "",
      content: "node_modules/\nlib/\ndist/\nbuild/\ncoverage/\ndemo/\nes/\n.rax/\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/.stylelintrc.js.ts
function getFile39() {
  return [
    ["."],
    {
      name: ".stylelintrc",
      ext: "js",
      content: "const { getStylelintConfig } = require('@iceworks/spec');\n\nmodule.exports = getStylelintConfig('rax');\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/jsconfig.json.ts
function getFile40() {
  return [
    ["."],
    {
      name: "jsconfig",
      ext: "json",
      content: '{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "jsx": "react",\n    "paths": {\n      "@/*": ["./src/*"],\n      "rax-app": [".rax/index.ts"]\n    }\n  }\n}\n'
    }
  ];
}

// src/plugins/project/framework/rax/template/files/README.md.ts
function getFile41() {
  return [
    ["."],
    {
      name: "README",
      ext: "md",
      content: "# rax-materials-basic-app\n\n## Getting Started\n\n### `npm run start`\n\nRuns the app in development mode.\n\nOpen [http://localhost:3333](http://localhost:3333) to view it in the browser.\n\nThe page will reload if you make edits.\n\n### `npm run build`\n\nBuilds the app for production to the `build` folder.\n"
    }
  ];
}

// src/plugins/project/framework/rax/template/files/tsconfig.json.ts
function getFile42() {
  return [
    ["."],
    {
      name: "tsconfig",
      ext: "json",
      content: '{\n  "compileOnSave": false,\n  "buildOnSave": false,\n  "compilerOptions": {\n    "baseUrl": ".",\n    "outDir": "build",\n    "module": "esnext",\n    "target": "es6",\n    "jsx": "preserve",\n    "jsxFactory": "createElement",\n    "moduleResolution": "node",\n    "allowSyntheticDefaultImports": true,\n    "lib": ["es6", "dom"],\n    "sourceMap": true,\n    "allowJs": true,\n    "rootDir": "./",\n    "forceConsistentCasingInFileNames": true,\n    "noImplicitReturns": true,\n    "noImplicitThis": true,\n    "noImplicitAny": false,\n    "importHelpers": true,\n    "strictNullChecks": true,\n    "suppressImplicitAnyIndexErrors": true,\n    "noUnusedLocals": true,\n    "skipLibCheck": true,\n    "paths": {\n      "@/*": ["./src/*"],\n      "rax-app": [".rax/index.ts"]\n    }\n  },\n  "include": ["src", ".rax"],\n  "exclude": ["node_modules", "build", "public"]\n}'
    }
  ];
}

// src/plugins/project/framework/rax/template/static-files.ts
function generateStaticFiles3(root = createResultDir(".")) {
  runFileGenerator(root, getFile33);
  runFileGenerator(root, getFile34);
  runFileGenerator(root, getFile35);
  runFileGenerator(root, getFile36);
  runFileGenerator(root, getFile37);
  runFileGenerator(root, getFile38);
  runFileGenerator(root, getFile39);
  runFileGenerator(root, getFile40);
  runFileGenerator(root, getFile41);
  runFileGenerator(root, getFile42);
  return root;
}

// src/plugins/project/framework/rax/template/index.ts
var raxAppTemplate = {
  slots: {
    components: {
      path: ["src", "components"]
    },
    pages: {
      path: ["src", "pages"]
    },
    router: {
      path: ["src"],
      fileName: "router"
    },
    entry: {
      path: ["src"],
      fileName: "app"
    },
    appConfig: {
      path: ["src"],
      fileName: "app"
    },
    buildConfig: {
      path: [],
      fileName: "build"
    },
    constants: {
      path: ["src"],
      fileName: "constants"
    },
    utils: {
      path: ["src"],
      fileName: "utils"
    },
    i18n: {
      path: ["src"],
      fileName: "i18n"
    },
    globalStyle: {
      path: ["src"],
      fileName: "global"
    },
    htmlEntry: {
      path: ["src", "document"],
      fileName: "index"
    },
    packageJSON: {
      path: [],
      fileName: "package"
    }
  },
  async generateTemplate() {
    return generateStaticFiles3();
  }
};
var template_default3 = raxAppTemplate;

// src/plugins/project/framework/rax/plugins/entry.ts
var pluginFactory37 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.ExternalDepsImport,
      content: `
import { runApp } from 'rax-app';

import './global.${(cfg == null ? void 0 : cfg.globalStylesFileType) || "css"}';
`,
      linkAfter: []
    });
    const appConfig = (cfg == null ? void 0 : cfg.appConfig) || {};
    Object.assign(appConfig, {
      router: {
        mode: "hash",
        ...appConfig.router
      }
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "js" /* JS */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: `
runApp(${JSON.stringify(appConfig, null, 2)});
`,
      linkAfter: [
        COMMON_CHUNK_NAME.ExternalDepsImport,
        COMMON_CHUNK_NAME.InternalDepsImport,
        COMMON_CHUNK_NAME.ImportAliasDefine,
        COMMON_CHUNK_NAME.FileVarDefine,
        COMMON_CHUNK_NAME.FileUtilDefine
      ]
    });
    return next;
  };
  return plugin;
};
var entry_default2 = pluginFactory37;

// src/plugins/project/framework/rax/plugins/appConfig.ts
var import_change_case10 = __toESM(require("change-case"));
var pluginFactory38 = (cfg) => {
  const plugin = async (pre) => {
    var _a, _b, _c, _d, _e, _f;
    const next = {
      ...pre
    };
    const ir = next.ir;
    const routes = ((_b = (_a = ir.globalRouter) == null ? void 0 : _a.routes) == null ? void 0 : _b.map((route) => ({
      path: route.path,
      source: `pages/${ensureValidClassName(import_change_case10.default.pascalCase(route.fileName))}/index`
    }))) || [{ path: "/", source: "pages/Home/index" }];
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "json" /* JSON */,
      name: COMMON_CHUNK_NAME.CustomContent,
      content: `
{
  "routes": ${JSON.stringify(routes, null, 2)},
  "window": {
    "title": ${JSON.stringify(
        (cfg == null ? void 0 : cfg.title) || ((_d = (_c = ir.project) == null ? void 0 : _c.meta) == null ? void 0 : _d.title) || ((_f = (_e = ir.project) == null ? void 0 : _e.meta) == null ? void 0 : _f.name) || ""
      )}
  }
}
      `,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var appConfig_default2 = pluginFactory38;

// src/plugins/project/framework/rax/plugins/buildConfig.ts
var pluginFactory39 = (cfg) => {
  const plugin = async (pre) => {
    var _a, _b, _c, _d, _e;
    const next = {
      ...pre
    };
    const ir = next.ir;
    const miniAppBuildType = ((_a = cfg == null ? void 0 : cfg.buildConfig) == null ? void 0 : _a.miniAppBuildType) || ((_c = (_b = ir.project) == null ? void 0 : _b.config) == null ? void 0 : _c.miniAppBuildType);
    const targets = (cfg == null ? void 0 : cfg.targets) || ["web"];
    const buildCfg = {
      inlineStyle: false,
      plugins: [],
      targets,
      miniapp: miniAppBuildType ? {
        buildType: miniAppBuildType,
        ...(_d = cfg == null ? void 0 : cfg.buildConfig) == null ? void 0 : _d.miniapp
      } : (_e = cfg == null ? void 0 : cfg.buildConfig) == null ? void 0 : _e.miniapp,
      ...cfg == null ? void 0 : cfg.buildConfig
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "json" /* JSON */,
      name: COMMON_CHUNK_NAME.CustomContent,
      content: `${JSON.stringify(buildCfg, null, 2)}
`,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var buildConfig_default2 = pluginFactory39;

// src/plugins/project/framework/rax/plugins/entryDocument.ts
var pluginFactory40 = (cfg) => {
  const plugin = async (pre) => {
    var _a;
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.CustomContent,
      content: `
import { createElement } from 'rax';
import { Root, Style, Script } from 'rax-document';

function Document() {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
        />
        <title>${(cfg == null ? void 0 : cfg.title) || ((_a = ir == null ? void 0 : ir.meta) == null ? void 0 : _a.name) || "Rax App"}</title>
        <Style />
      </head>
      <body>
        {/* root container */}
        <Root />
        <Script />
      </body>
    </html>
  );
}

export default Document;
`,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var entryDocument_default = pluginFactory40;

// src/plugins/project/framework/rax/plugins/globalStyle.ts
var pluginFactory41 = (config) => {
  const cfg = {
    fileType: "scss" /* SCSS */,
    ...config
  };
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.StyleDepsImport,
      content: "",
      linkAfter: []
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: `
body {
  -webkit-font-smoothing: antialiased;
}
`,
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: cfg.fileType,
      name: COMMON_CHUNK_NAME.StyleCssContent,
      content: ir.css || "",
      linkAfter: [COMMON_CHUNK_NAME.StyleDepsImport]
    });
    return next;
  };
  return plugin;
};
var globalStyle_default3 = pluginFactory41;

// src/utils/version.ts
var version_exports = {};
__export(version_exports, {
  calcCompatibleVersion: () => calcCompatibleVersion
});
var import_semver = __toESM(require("semver"));
function calcCompatibleVersion(v1, v2) {
  if (!v1 && !v2) {
    return "*";
  }
  if (!v1 || v1 === "*") {
    return v2 || "*";
  }
  if (!v2 || v2 === "*") {
    return v1;
  }
  if (v1 === v2) {
    return v1;
  }
  if (!import_semver.default.intersects(v1, v2, { loose: true })) {
    throw new Error(`no compatible versions for "${v1}" and "${v2}"`);
  }
  if (import_semver.default.subset(v1, v2, { loose: true })) {
    return v1;
  }
  return v2;
}

// src/plugins/project/framework/rax/plugins/packageJSON.ts
var pluginFactory42 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const npmDeps = getNpmDependencies(ir);
    const packageJson = {
      name: (cfg == null ? void 0 : cfg.packageName) || "rax-demo-app",
      private: true,
      version: (cfg == null ? void 0 : cfg.packageVersion) || "1.0.0",
      scripts: {
        start: "rax-app start",
        build: "rax-app build",
        eslint: "eslint --ext .js,.jsx ./",
        stylelint: 'stylelint "**/*.{css,scss,less}"',
        prettier: "prettier **/* --write",
        lint: "npm run eslint && npm run stylelint"
      },
      dependencies: {
        ...buildDataSourceDependencies(ir, cfg == null ? void 0 : cfg.datasourceConfig),
        "universal-env": "^3.2.0",
        "intl-messageformat": "^9.3.6",
        rax: "^1.1.0",
        "rax-document": "^0.1.6",
        ...npmDeps.reduce(
          (acc, npm) => ({
            ...acc,
            [npm.package]: npm.version || "*"
          }),
          {}
        )
      },
      devDependencies: {
        "@iceworks/spec": "^1.0.0",
        "rax-app": "^3.0.0",
        eslint: "^6.8.0",
        prettier: "^2.1.2",
        stylelint: "^13.7.2"
      }
    };
    next.chunks.push({
      type: "json" /* JSON */,
      fileType: "json" /* JSON */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var packageJSON_default3 = pluginFactory42;
function getNpmDependencies(project) {
  const npmDeps = [];
  const npmNameToPkgMap = /* @__PURE__ */ new Map();
  const allDeps = project.packages;
  allDeps.forEach((dep) => {
    if (!isNpmInfo(dep)) {
      return;
    }
    const existing = npmNameToPkgMap.get(dep.package);
    if (!existing) {
      npmNameToPkgMap.set(dep.package, dep);
      npmDeps.push(dep);
      return;
    }
    if (existing.version !== dep.version) {
      try {
        npmNameToPkgMap.set(dep.package, {
          ...existing,
          version: calcCompatibleVersion(existing.version, dep.version)
        });
      } catch (e) {
        throw new Error(
          `Cannot find compatible version for ${dep.package}. Detail: ${getErrorMessage(e)}`
        );
      }
    }
  });
  return npmDeps;
}

// src/plugins/project/framework/rax/index.ts
var rax_default = {
  template: template_default3,
  plugins: {
    appConfig: appConfig_default2,
    buildConfig: buildConfig_default2,
    entry: entry_default2,
    entryDocument: entryDocument_default,
    globalStyle: globalStyle_default3,
    packageJSON: packageJSON_default3
  }
};

// src/solutions/rax-app.ts
function createRaxProjectBuilder(options) {
  return createProjectBuilder({
    inStrictMode: options == null ? void 0 : options.inStrictMode,
    extraContextData: { ...options },
    template: rax_default.template,
    plugins: {
      components: [
        commonDeps_default(),
        esmodule_default({ fileType: "jsx", useAliasName: false }),
        containerClass_default2(),
        containerInitState_default2(),
        containerMethods_default(),
        containerInjectContext_default2(),
        containerInjectDataSourceEngine_default2(options),
        containerInjectUtils_default2(),
        containerLifeCycle_default2(),
        jsx_default2(),
        css_default()
      ],
      pages: [
        commonDeps_default(),
        esmodule_default({ fileType: "jsx" }),
        containerClass_default2(),
        containerInitState_default2(),
        containerMethods_default(),
        containerInjectContext_default2(),
        containerInjectDataSourceEngine_default2(options),
        containerInjectUtils_default2(),
        containerLifeCycle_default2(),
        jsx_default2(),
        css_default()
      ],
      appConfig: [rax_default.plugins.appConfig(options)],
      buildConfig: [rax_default.plugins.buildConfig(options)],
      entry: [rax_default.plugins.entry(options)],
      constants: [constants_default()],
      utils: [esmodule_default(), utils_default("rax")],
      i18n: [i18n_default()],
      globalStyle: [
        rax_default.plugins.globalStyle({ fileType: (options == null ? void 0 : options.globalStylesFileType) || "css" })
      ],
      htmlEntry: [rax_default.plugins.entryDocument(options)],
      packageJSON: [rax_default.plugins.packageJSON(options)]
    },
    postProcessors: [prettier_default()],
    customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
  });
}
var plugins3 = {
  containerClass: containerClass_default2,
  containerLifeCycles: containerLifeCycle_default2,
  containerMethods: containerMethods_default,
  containerInitState: containerInitState_default2,
  containerInjectContext: containerInjectContext_default2,
  containerInjectDataSourceEngine: containerInjectDataSourceEngine_default2,
  containerInjectUtils: containerInjectUtils_default2,
  jsx: jsx_default2,
  commonDeps: commonDeps_default,
  raxApp: rax_default
};

// src/plugins/project/framework/nextjs/template/files/tsconfig.json.ts
function getFile43() {
  return [
    [],
    {
      name: "tsconfig",
      ext: "json",
      content: `
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    "fontEnd/types/**/*.ts",
    "imasacs/types/**/*.ts",
    "counter-web/types/**/*.ts",
    "web/types/**/*.ts",
    "./web/types/**/*.ts",
    "../web/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}         
    `
    }
  ];
}

// src/plugins/project/framework/nextjs/template/files/tailwind.config.ts.ts
function getFile44() {
  return [
    [],
    {
      name: "tailwind.config",
      ext: "ts",
      content: `
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  corePlugins: {
    // preflight: false,
  },
}
export default config      
    `
    }
  ];
}

// src/plugins/project/framework/nextjs/template/files/README.md.ts
function getFile45() {
  return [
    [],
    {
      name: "README",
      ext: "md",
      content: `
This is a [Next.js](https://nextjs.org/) project bootstrapped with [\`create-next-app\`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying \`app/page.tsx\`. The page auto-updates as you edit the file.

This project uses [\`next/font\`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
    `
    }
  ];
}

// src/plugins/project/framework/nextjs/template/files/postcss.config.js.ts
function getFile46() {
  return [
    [],
    {
      name: "postcss.config",
      ext: "js",
      content: `
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
    `
    }
  ];
}

// src/plugins/project/framework/nextjs/template/files/next.config.js.ts
function getFile47() {
  return [
    [],
    {
      name: "next.config",
      ext: "js",
      content: `
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_OUTPUT,
  distDir: "web",
  assetPrefix: "/web",
  basePath: "/web",
  trailingSlash: true,
  typescript: {
    // \u7981\u7528\u7C7B\u578B\u68C0\u67E5
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig;
`
    }
  ];
}

// src/plugins/project/framework/nextjs/template/files/next-env.d.ts
function getFile48() {
  return [
    [],
    {
      name: "next-env.d",
      ext: "ts",
      content: `
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.  
    `
    }
  ];
}

// src/plugins/project/framework/nextjs/template/files/env.ts
function getFile49() {
  const file2 = createResultFile(
    ".env",
    "",
    `
BUILD_OUTPUT='standalone'
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/nextjs/template/files/env.production.ts
function getFile50() {
  const file2 = createResultFile(
    ".env.production",
    "",
    `
BUILD_OUTPUT='export'
    `
  );
  return [[], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/utils/utils.js.ts
function getFile51() {
  const file2 = createResultFile(
    "utils",
    "js",
    `
import { parse } from 'querystring';
/* eslint no-useless-escape:0 import/prefer-default-export:0 */

const reg = /(((^https?:(?://)?)(?:[-;:&=+$,w]+@)?[A-Za-z0-9.-]+(?::d+)?|(?:www.|[-;:&=+$,w]+@)[A-Za-z0-9.-]+)((?:/[+~%/.w-_]*)???(?:[-+=&;%@.w_]*)#?(?:[w]*))?)$/;
export const isUrl = (path) => reg.test(path);
export const isAntDesignPro = () => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }

  return window.location.hostname === 'preview.pro.ant.design';
}; // \u7ED9\u5B98\u65B9\u6F14\u793A\u7AD9\u70B9\u7528\uFF0C\u7528\u4E8E\u5173\u95ED\u771F\u5B9E\u5F00\u53D1\u73AF\u5883\u4E0D\u9700\u8981\u4F7F\u7528\u7684\u7279\u6027

export const isAntDesignProOrDev = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    return true;
  }

  return isAntDesignPro();
};
export const getPageQuery = () => parse(window.location.href.split('?')[1]);         
    `
  );
  return [["src", "utils"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/utils/DateUtil.js.ts
function getFile52() {
  const file2 = createResultFile(
    "DateUtil",
    "js",
    `
import moment from 'moment';

export function fixedZero(val) {
  return val * 1 < 10 ? \`0\${val}\` : val;
}

export const dateFormatTime = 'YYYY-MM-DD HH:mm:ss';
export const dateFormat = 'YYYY-MM-DD';
const hhmmss = 'HHmmss';
export const timeFormat = 'HHmm';
export const hhmmssD = 'HH:mm:ss';
const YYYYMMDDHHmmss = 'YYYYMMDDHHmmss';

export function formatterTime (val) {
    return val ? moment(new Date(val)).format(dateFormatTime) : '';
}

export function formatterDate (val) {
  return val ? moment(new Date(val)).format(dateFormat) : '';
}

export function formatterHHmmss (val) {
  return val ? moment(new Date(val)).format(hhmmss) : '';
}

export function dateTimeByTime (val) {
  if(!val){
    return moment(new Date(), dateFormatTime);
  }
  let dateTime = moment(new Date()).format(dateFormat) + ' ' + val;
  return moment(new Date(dateTime), dateFormatTime);
}

export function formatterTimeByDate (val) {
  return moment(val ? val : new Date(), dateFormatTime);
}

export function getMomentStartTime (val) {
  if(!val){
    return;
  }
  return val + ' 00:00:00';
}

export function getMomentEndTime (val) {
  if(!val){
    return;
  }
  return val + ' 23:59:59';
}

export function getYYYYMMDDHHmmss (val) {
  return val ? moment(new Date(val)).format(YYYYMMDDHHmmss) : '';
}

export function formatterDateStr (val) {
  return val ? moment(val, dateFormat) : '';
}

export function YYYYMMDDHHmm (date) {
  if(!date){
    return "";
  }
  let year = date.getFullYear();
  let months = (date.getMonth()+1) + "";
  if(parseInt(months) < 10){
      months = "0" + months;
  }
  let days = date.getDate() + "";
  if(parseInt(days) < 10){
      days = "0" + days;
  }
  let hour = date.getHours() + "";
  if(parseInt(hour) < 10){
      hour = "0" + hour;
  }
  let minute = date.getMinutes() + "";
  if(parseInt(minute) < 10){
      minute = "0" + minute;
  }
  return year + "-" + months + "-" + days + " " + hour + ":" + minute;
}
    `
  );
  return [["src", "utils"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/utils/constants.js.ts
function getFile53() {
  const file2 = createResultFile(
    "constants",
    "js",
    `
export const DAY_TYPE = {
  workday: '\u5DE5\u4F5C\u65E5',
  holiday: '\u8282\u5047\u65E5'
}
    `
  );
  return [["src", "utils"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/utils/Authorized.js.ts
function getFile54() {
  const file2 = createResultFile(
    "Authorized",
    "js",
    `
import RenderAuthorize from '@/components/Authorized';
import { getAuthority } from './authority';
/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */

let Authorized = RenderAuthorize(getAuthority()); // Reload the rights component

const reloadAuthorized = () => {
  Authorized = RenderAuthorize(getAuthority());
};
/**
 * hard code
 * block need it\u3002
 */

window.reloadAuthorized = reloadAuthorized;
export { reloadAuthorized };
export default Authorized;  
    `
  );
  return [["src", "utils"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/utils/authority.js.ts
function getFile55() {
  const file2 = createResultFile(
    "authority",
    "js",
    `
import { reloadAuthorized } from './Authorized'; // use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority(str) {
  const authorityString =
    typeof str === 'undefined' && localStorage ? localStorage.getItem('antd-pro-authority') : str; // authorityString could be admin, "admin", ["admin"]

  let authority;

  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }

  if (typeof authority === 'string') {
    return [authority];
  } // preview.pro.ant.design only do not use in your production.
  // preview.pro.ant.design \u4E13\u7528\u73AF\u5883\u53D8\u91CF\uFF0C\u8BF7\u4E0D\u8981\u5728\u4F60\u7684\u9879\u76EE\u4E2D\u4F7F\u7528\u5B83\u3002

  if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return ['admin'];
  }

  return authority;
}
export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  localStorage.setItem('antd-pro-authority', JSON.stringify(proAuthority)); // auto reload

  reloadAuthorized();
}    
    `
  );
  return [["src", "utils"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/theme/themeConfig.ts.ts
function getFile56() {
  const file2 = createResultFile(
    "themeConfig",
    "ts",
    `
// theme/themeConfig.ts
import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    // colorPrimary: '#52c41a',
  },
};

export default theme;
    `
  );
  return [["src", "theme"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/README.md.ts
function getFile57() {
  const file2 = createResultFile(
    "README",
    "md",
    `
## \u63A5\u53E3\u8BF7\u6C42\u7BA1\u7406

request.ts   \u81EA\u5B9A\u4E49\u5C01\u88C5axios\u5B9E\u4F8B
services.ts  \u8FDB\u4E00\u6B65\u5C01\u88C5\u516C\u5171\u8BF7\u6C42\u65B9\u6CD5            
    `
  );
  return [["src", "services"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/hooks.ts.ts
function getFile58() {
  const file2 = createResultFile(
    "hooks",
    "ts",
    `
import dynamic from 'next/dynamic';
import { pageResult } from "@/lib/interface";
import { post } from "./request";
import { message } from 'antd';

/**
 * \u5206\u9875\u5217\u8868
 * @param {*} url
 * @param {*} params
 */
export async function pageRequest(url:string, params:any):Promise<pageResult> {
    return post({
    url,
    params
    }).then((res:any) => {
    let list = [];
    if (res.resultCode === '39500000') {
        list = res.data === undefined ? [] : res.data;
    } else {
        message.error(res.resultMsg);
    }
    return { data: list, total: res.total };
    }).catch((error) => {
    message.error('\u7CFB\u7EDF\u6B63\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5');
    return { data: [], total: 0 };
    })
}

/**
 * \u4E00\u822C\u63D0\u4EA4\u4F7F\u7528\uFF0C\u6BD4\u5982\u65B0\u589E\u3001\u4FEE\u6539\uFF0C\u53EA\u9700\u8981\u6210\u529F\u6709\u5426\uFF0C\u6210\u529F\u9700\u8981\u6709\u63D0\u793A
 * @param {*} url
 * @param {*} data
 */
export async function requestSubmit(url: string, params: any) {
    return post({url, params}).then((res) => {
    if (res.resultCode === '39500000') {
        message.success('\u63D0\u4EA4\u6210\u529F');
        return true;
    } else {
        message.error(res.resultMsg);
        return false;
    }
    }).catch((error) => {
    message.error('\u7CFB\u7EDF\u6B63\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5');
    return false;
    })
}    
    `
  );
  return [["src", "services"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/request.ts.ts
function getFile59() {
  const file2 = createResultFile(
    "request",
    "ts",
    `
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { message } from "antd";
// \u5BA2\u6237\u7AEF\u6E32\u67D3\u65F6\uFF0C\u624D\u5B58\u5728 window
// \u82E5\u662F\u670D\u52A1\u6BB5\u6E32\u67D3\u754C\u9762\uFF0C\u8BF7\u4F7F\u7528\u539F\u751F nextjs \u6A21\u5F0F\uFF1B
let myWindow = { location: { host: "" }};
if (typeof window !== "undefined") {
    myWindow = window;
} else {
    myWindow = { location: { host: "" }}
}
let base = myWindow.location.host ? "http://" + myWindow.location.host + '/counter' : "/counter";
export const requestUrl = base + '/sys/';
/**
 * \u81EA\u5B9A\u4E49\u5C01\u88C5axios\u5B9E\u4F8B
 */
const request = axios.create({
    baseURL: requestUrl, // \u8BBE\u7F6E\u57FA\u7840URL
    timeout: 5000, // \u8D85\u65F6\u65F6\u95F4
    withCredentials: true, // \u8DE8\u57DF\u8BF7\u6C42\u65F6\u9700\u8981\u4F7F\u7528\u51ED\u8BC1 or \u643A\u5E26 cookies
    headers: {
        'Content-Type': 'application/json',
    },
    maxRedirects: 0
});

//\u8BF7\u6C42\u679A\u4E3E
export enum MethodEnum {
    Get = "GET",
    Post = "POST",
}

//\u8FD4\u56DE\u7ED3\u679C
export interface ResponseResultInterface<Body> {
    Header: {}
    Body: Body
}

//\u8BF7\u6C42\u53C2\u6570
export interface RequestInterface<params> {
    url: string
    params?: params
    method?: MethodEnum
}

// \u6DFB\u52A0\u8BF7\u6C42\u62E6\u622A\u5668
request.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// \u6DFB\u52A0\u54CD\u5E94\u62E6\u622A\u5668
request.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status && response.status == 200 && response.data.status == 'error') {
            message.error(response.data.msg);
            return;
        }
        return response;
    },
    error => {
        const { response } = error;
        if (!response) {
            axios({
                method: "POST",
                url: \`\${base}\` + "/get/public/properties",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: '',
            }).then((res) => {
                window.location.href = res.data.logoutUrl;
            })
        } else {
            message.error('\u8BF7\u6C42\u5F02\u5E38');
        }
        return response;
    }
)

const baseRequest = async <params, responseData>(requestPar: RequestInterface<params>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: requestPar.method || MethodEnum.Post,
        url: requestPar.url,
        data: requestPar.params,
    })
    return requestResult.data as responseData
}

const post = async <data, responseData>(requestPar: RequestInterface<data>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: MethodEnum.Post,
        url: requestPar.url,
        data: requestPar.params,
    })
    return requestResult.data as responseData
}

const get = async <data, responseData>(requestPar: RequestInterface<data>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: MethodEnum.Get,
        url: requestPar.url,
        data: requestPar.params,
    })
    return requestResult.data as responseData
}

const postBigFile = async <data, responseData>(requestPar: RequestInterface<data>): Promise<responseData> => {
    const requestResult: AxiosResponse = await request({
        method: MethodEnum.Post,
        url: requestPar.url,
        data: requestPar.params,
        headers: {
            'Transfer-Encoding': 'chunked'
        }
    })
    return requestResult.data as responseData
}
export {
    baseRequest,
    post,
    get,
    postBigFile
}
        
    `
  );
  return [["src", "services"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/sys/dictMapRequest.ts.ts
function getFile60() {
  const file2 = createResultFile(
    "dictMapRequest",
    "ts",
    `
import { post } from '../request';

/**
 * \u5B57\u5178\u5217\u8868\uFF08\u4E0B\u62C9\u6846\uFF09
 * @param {*} data
 */
export async function dictItemList(params:any) {
    return post({
    url: "dict_item_select",
    params
    }).then((res:any) => {
    return res.data;
    }).catch((error) => {
    return [];
    })
}
    `
  );
  return [["src", "services", "app", "sys"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/sys/index.ts.ts
function getFile61() {
  const file2 = createResultFile(
    "index",
    "ts",
    `
export { dictItemList } from './dictMapRequest';
export { sysRole, resTreeSelect, resConfig } from './sysAuth';
    `
  );
  return [["src", "services", "app", "sys"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/sys/sysAuth.ts.ts
function getFile62() {
  const file2 = createResultFile(
    "sysAuth",
    "ts",
    `
// @ts-ignore

/* eslint-disable */
import { requestSubmit, pageRequest } from '../hooks';
import { post } from "../request";
import { message } from 'antd'

/**
 * \u89D2\u8272\u67E5\u8BE2
 * @param {*} params 
 * @param {*} options 
 */
export async function sysRole(data: any) {
    return pageRequest('role', data)
}

export async function resTreeSelect(data: any) {
    return post({url: 'res/tree', params: data}).then((res) => {
    if (res.resultCode === '39500000') {
        return res.data;
    } else {
        message.error(res.resultMsg);
        return {treeList: [], treeList: []};
    }
    }).catch((error) => {
    message.error('\u7CFB\u7EDF\u6B63\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5');
    return {treeList: [], treeList: []};
    })
}

export async function resConfig(data: any) {
    return requestSubmit('res/config', data)
}
    `
  );
  return [["src", "services", "app", "sys"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/app/TableDetail/api.ts.ts
function getFile63() {
  const file2 = createResultFile(
    "api",
    "ts",
    `
import { pageRequest } from "../../hooks";
/**
 * \u76D1\u63A7\u914D\u7F6E\u67E5\u8BE2
 * @param {*} params 
 * @param {*} options 
 */
export async function imaDetailQry(data: any) {
  return pageRequest('imasa_detail_qry', data);
}        
    `
  );
  return [["src", "services", "app", "TableDetail"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/app/TableDetail/index.ts.ts
function getFile64() {
  const file2 = createResultFile(
    "index",
    "ts",
    `
export * from './api';     
    `
  );
  return [["src", "services", "app", "TableDetail"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/services/app/user.ts.ts
function getFile65() {
  const file2 = createResultFile(
    "user",
    "ts",
    `
import {post} from "../request";

const queryUserInfo = async () => {
    // return post({url: 'current_user', params: null});
    return Promise.resolve({
        "resultCode": "39500000",
        "resultMsg": null,
        "resultType": null,
        "data": {
            "loginId": "zhifu001",
            "role": [
                "chl_manager"
            ],
            "auth": [
                "monitor",
            ],
            "logoutUrl": "http://uat.sso.webank.com:8080/cas/logout?service=http://localhost:8000/counter/sys/login",
            "userName": "zhifu001"
        },
        "page": null,
        "total": 0
    })
}
export {
    queryUserInfo
}
    `
  );
  return [["src", "services", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/models/README.md.ts
function getFile66() {
  const file2 = createResultFile(
    "README",
    "md",
    `
## \u5168\u5C40 Store \u7BA1\u7406            
    `
  );
  return [["src", "models"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/models/index.ts.ts
function getFile67() {
  const file2 = createResultFile(
    "index",
    "ts",
    `
import storage from "redux-persist/lib/storage";

import { auth } from "./authSlice";
import { counter } from "./counter/counterSlice";
import { __sysInfo } from './_sysInfoSlice';

// global store reducer register
export const storeReducer = {
    auth,
    counter,
    __sysInfo
}

// configure which key we want to persist
export const persistConfig = {
    "auth": {
    key: "auth",
    storage: storage,
    whitelist: ["authState"],
    },
    "counter": {
    key: "counter",
    storage: storage,
    // whitelist: ["value"],
    },
    "__sysInfo": {
    key: "__sysInfo",
    storage: storage,
    whitelist: ["user"],
    },
}           
    `
  );
  return [["src", "models"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/models/authSlice.ts.ts
function getFile68() {
  const file2 = createResultFile(
    "authSlice",
    "ts",
    `
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface IAuthState {
    authState: boolean;
}

const initialState: IAuthState = {
    authState: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    setAuthState: (state, action: PayloadAction<boolean>) => {
        state.authState = action.payload;
    },
    },
});

export const { setAuthState } = authSlice.actions;
export const auth = authSlice.reducer;         
    `
  );
  return [["src", "models"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/models/_sysInfoSlice.ts.ts
function getFile69() {
  const file2 = createResultFile(
    "_sysInfoSlice",
    "ts",
    `
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ISysState {
    userInfo?: userInfo;
}
export interface userInfo {
    loginId?: string;
    userName?: string;
    role?: Array<string>;
    auth?: Array<string>;
    logoutUrl?: string;
}
const initialState: ISysState = {
    userInfo: {},
};

export const __sysInfoSlice = createSlice({
    name: "__sysInfo",
    initialState,
    reducers: {
    __setUserInfoState: (state, action: PayloadAction<userInfo>) => {
        state.userInfo = action.payload;
    },
    },
    selectors: {
    selectUserInfo: (sys) => sys.userInfo,
    },
});
export const { selectUserInfo } = __sysInfoSlice.selectors;
export const { __setUserInfoState } = __sysInfoSlice.actions;
export const __sysInfo = __sysInfoSlice.reducer;         
    `
  );
  return [["src", "models"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/models/counter/counterAPI.ts.ts
function getFile70() {
  const file2 = createResultFile(
    "counterAPI",
    "ts",
    `
// A mock function to mimic making an async request for data
export const fetchCount = async (amount = 1) => {
    const response = await fetch("http://localhost:8000/api/counter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount }),
    });
    const result: { data: number } = await response.json();

    return result;
};
    `
  );
  return [["src", "models", "counter"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/models/counter/counterSlice.ts.ts
function getFile71() {
  const file2 = createResultFile(
    "counterSlice",
    "ts",
    `
import { createAppSlice } from "@/lib/store/createAppSlice";
import type { AppThunk } from "@/lib/_store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCount } from "./counterAPI";

export interface CounterSliceState {
    value: number;
    status: "idle" | "loading" | "failed";
}

const initialState: CounterSliceState = {
    value: 0,
    status: "idle",
};

// If you are not using async thunks you can use the standalone \`createSlice\`.
export const counterSlice = createAppSlice({
    name: "counter",
    // \`createSlice\` will infer the state type from the \`initialState\` argument
    initialState,
    // The \`reducers\` field lets us define reducers and generate associated actions
    reducers: (create) => ({
    increment: create.reducer((state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1;
    }),
    decrement: create.reducer((state) => {
        state.value -= 1;
    }),
    // Use the \`PayloadAction\` type to declare the contents of \`action.payload\`
    incrementByAmount: create.reducer(
        (state, action: PayloadAction<number>) => {
        state.value += action.payload;
        },
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: \`dispatch(incrementAsync(10))\`. This
    // will call the thunk with the \`dispatch\` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
    incrementAsync: create.asyncThunk(
        async (amount: number) => {
        console.log(46);
        const response = await fetchCount(amount);
        // The value we return becomes the \`fulfilled\` action payload
        console.log(48, response);
        return response.data;
        },
        {
        pending: (state) => {
            state.status = "loading";
        },
        fulfilled: (state, action) => {
            state.status = "idle";
            state.value += action.payload;
        },
        rejected: (state) => {
            state.status = "failed";
        },
        },
    ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
    selectCount: (counter) => counter.value,
    selectStatus: (counter) => counter.status,
    },
});

// Action creators are generated for each case reducer function.
export const { decrement, increment, incrementByAmount, incrementAsync } =
    counterSlice.actions;

// Selectors returned by \`slice.selectors\` take the root state as their first argument.
export const { selectCount, selectStatus } = counterSlice.selectors;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
    (amount: number): AppThunk =>
    (dispatch, getState) => {
    const currentValue = selectCount(getState());

    if (currentValue % 2 === 1 || currentValue % 2 === -1) {
        dispatch(incrementByAmount(amount));
    }
    };


export const counter = counterSlice.reducer;        
    `
  );
  return [["src", "models", "counter"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/routes.tsx.ts
function getFile72() {
  const file2 = createResultFile(
    "routes",
    "tsx",
    `
/**
 * \u8DEF\u7531
 */
import {
    ChromeFilled,
    CrownFilled,
    SmileFilled,
    TabletFilled,
} from '@ant-design/icons';

const routes = [
    {
        path: '/',
        routes: [
            {
                path: '/',
                icon: <SmileFilled />,
                routes: [
                    {
                        path: '/Test/',
                        name: '\u7BA1\u7406\u9875',
                        icon: <CrownFilled />,
                        access: 'monitor', // access \u53EF\u9009\u5C5E\u6027\uFF0C\u4E0D\u914D\u7F6E\u9ED8\u8BA4\u5C55\u793A
                    },
                    {
                        path: '/TableDetail/',
                        name: '\u5217\u8868\u67E5\u8BE2',
                        icon: <ChromeFilled />,
                        access: 'imasa_det',
                    },
                    {
                        path: "/sys/",
                        icon: <TabletFilled />,
                        name: "\u7CFB\u7EDF\u914D\u7F6E",
                        routes: [
                            {
                                path: "/sys/sysRole/",
                                name: "\u89D2\u8272\u914D\u7F6E"
                            }
                        ]
                    },
                ]
            },
        ],
    }
];

export default routes;
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/interface.ts.ts
function getFile73() {
  const file2 = createResultFile(
    "interface",
    "ts",
    `
// Define the global interface
// exapmle
export interface ApiResult {
    resultCode: "39500000"; // systemId
    resultMsg: "string";
    data?: any;
    total?:number
} 
export interface pageResult {
    data: Array<any>;
    total: number;
} 
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/getInitialState.ts.ts
function getFile74() {
  const file2 = createResultFile(
    "getInitialState",
    "ts",
    `
/**
 * \u521D\u59CB state \u83B7\u53D6 userInfo/dict/ ...
 */
import { queryUserInfo } from "../services/app/user";
export async function getInitialState() {
    let userInfo = {};
    const getUserInfo = async () => {
        const { data } = await queryUserInfo();
        userInfo = data;
    }
    await getUserInfo();
    return {
        userInfo
    };
}
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/definitions.ts.ts
function getFile75() {
  const file2 = createResultFile(
    "definitions",
    "ts",
    `
// Define the global types
// exapmle
export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: 'pending' | 'paid';
};        
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/AntdRegistry.tsx.ts
function getFile76() {
  const file2 = createResultFile(
    "AntdRegistry",
    "tsx",
    `
'use client';

import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { useServerInsertedHTML } from 'next/navigation';

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const isServerInserted = React.useRef<boolean>(false);
  useServerInsertedHTML(() => {
    // \u907F\u514D css \u91CD\u590D\u63D2\u5165
    if (isServerInserted.current) {
      return;
    }
    isServerInserted.current = true;
    return <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />;
  });
  return <StyleProvider cache={cache}>{children}</StyleProvider>;
};

export default StyledComponentsRegistry;
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/access.ts.ts
function getFile77() {
  const file2 = createResultFile(
    "access",
    "ts",
    `
import { authFilter } from "@/layout/utils";

export default function accessFactory({ userInfo }: any): any {
    return authFilter([
        "monitor",
        "monitor_renhang",
        "monitor_super",
        "monitor_super_fund",
        "monitor_super_info",
        "monitor_super_mgt",
        "monitor_super_check",
        "imasa_det",
        "async_auth",
        "dashboard",
        "sys",
        "sys_role"
    ], userInfo.auth);
    }        
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/_store.ts.ts
function getFile78() {
  const file2 = createResultFile(
    "_store",
    "ts",
    `
import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { storeReducer, persistConfig } from "@/models/index";

import { persistReducer } from "redux-persist";

const iterate = (reducer:any, config:any) => {
    let iterateReducer:any = {};
    for (let i in reducer) {
    iterateReducer[i] = config[i] ? persistReducer(config[i], reducer[i]) : reducer[i]
    }
    return iterateReducer;
}

const rootReducer = combineReducers(iterate(storeReducer, persistConfig));

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;        
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/_defaultProps.tsx.ts
function getFile79() {
  const file2 = createResultFile(
    "_defaultProps",
    "tsx",
    `
export default {
  title:"",
  location: {
    pathname: '/',
  },
  appList: [],
  token:{
    header: {
      colorBgHeader: '#001529',
      colorHeaderTitle: '#fff',
      colorTextMenu: '#dfdfdf',
      colorTextMenuSecondary: '#dfdfdf',
      colorTextMenuSelected: '#fff',
      colorBgMenuItemSelected: '#22272b',
      colorTextMenuActive: 'rgba(255,255,255,0.85)',
      colorTextRightActionsItem: '#dfdfdf',
    },
    colorTextAppListIconHover: '#fff',
    colorTextAppListIcon: '#dfdfdf',
    sider: {
      colorMenuBackground: '#fff',
      colorMenuItemDivider: '#dfdfdf',
      colorBgMenuItemHover: '#f6f6f6',
      colorTextMenu: '#595959',
      colorTextMenuSelected: '#242424',
      colorTextMenuActive: '#242424',
    },
  }
};
    `
  );
  return [["src", "lib"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/store/hooks.ts.ts
function getFile80() {
  const file2 = createResultFile(
    "hooks",
    "ts",
    `
// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../_store";

// Use throughout your app instead of plain \`useDispatch\` and \`useSelector\`

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;     
    `
  );
  return [["src", "lib", "store"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/store/StoreProvider.tsx.ts
function getFile81() {
  const file2 = createResultFile(
    "StoreProvider",
    "tsx",
    `
import { Provider } from "react-redux";
import { store } from "../_store";
import { persistStore } from "redux-persist";
persistStore(store);

export const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
}      
    `
  );
  return [["src", "lib", "store"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/store/createAppSlice.ts.ts
function getFile82() {
  const file2 = createResultFile(
    "createAppSlice",
    "ts",
    `
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

// \`buildCreateSlice\` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});      
    `
  );
  return [["src", "lib", "store"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/storage/config.ts.ts
function getFile83() {
  const file2 = createResultFile(
    "config",
    "ts",
    `
interface globalConfig {
  type: 'localStorage' | 'sessionStorage';
  prefix: string;
  expire: number;
  isEncrypt: boolean;
}

export const config: globalConfig = {
  type: 'localStorage',              //\u5B58\u50A8\u7C7B\u578B\uFF0ClocalStorage | sessionStorage
  prefix: 'counter_systemId_0.0.1',     //\u7248\u672C\u53F7
  expire: 24 * 60,                   //\u8FC7\u671F\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A\u4E00\u5929\uFF0C\u5355\u4F4D\u4E3A\u5206\u949F
  isEncrypt: true,                   //\u652F\u6301\u52A0\u5BC6\u3001\u89E3\u5BC6\u6570\u636E\u5904\u7406
};        
    `
  );
  return [["src", "lib", "storage"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/storage/encrypt.ts.ts
function getFile84() {
  const file2 = createResultFile(
    "encrypt",
    "ts",
    `
import CryptoJS from 'crypto-js';

const SECRET_KEY = CryptoJS.enc.Utf8.parse('3333e6e143439161'); //\u5341\u516D\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u4F5C\u4E3A\u5BC6\u94A5
const SECRET_IV = CryptoJS.enc.Utf8.parse('e3bbe7e3ba84431a'); //\u5341\u516D\u4F4D\u5341\u516D\u8FDB\u5236\u6570\u4F5C\u4E3A\u5BC6\u94A5\u504F\u79FB\u91CF

const encrypt = (data: object | string): string => {
    //\u52A0\u5BC6
    if (typeof data === 'object') {
        try {
            data = JSON.stringify(data);
        } catch (e) {
            throw new Error('encrypt error' + e);
        }
    }
    const dataHex = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(dataHex, SECRET_KEY, {
        iv: SECRET_IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
};

const decrypt = (data: string) => {
    //\u89E3\u5BC6
    const encryptedHexStr = CryptoJS.enc.Hex.parse(data);
    const str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    const decrypt = CryptoJS.AES.decrypt(str, SECRET_KEY, {
        iv: SECRET_IV,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
};

export {
    encrypt,
    decrypt
}    
    `
  );
  return [["src", "lib", "storage"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/lib/storage/hooks.ts.ts
function getFile85() {
  const file2 = createResultFile(
    "hooks",
    "ts",
    `
"use client";
import { config } from './config';
import { encrypt, decrypt } from './encrypt';
const setStorage = (key: string, value: any, expire: number = 24 * 60): boolean => {
  //\u8BBE\u5B9A\u503C
  if (value === '' || value === null || value === undefined) {
    //\u7A7A\u503C\u91CD\u7F6E
    value = null;
  }
  if (isNaN(expire) || expire < 0) {
    //\u8FC7\u671F\u65F6\u95F4\u503C\u5408\u7406\u6027\u5224\u65AD
    throw new Error('Expire must be a number');
  }
  const data = {
    value, //\u5B58\u50A8\u503C
    time: Date.now(), //\u5B58\u50A8\u65E5\u671F
    expire: Date.now() + 1000 * 60 * expire, //\u8FC7\u671F\u65F6\u95F4
  };
  //\u662F\u5426\u9700\u8981\u52A0\u5BC6\uFF0C\u5224\u65AD\u88C5\u8F7D\u52A0\u5BC6\u6570\u636E\u6216\u539F\u6570\u636E
  window[config.type].setItem(
    autoAddPreFix(key),
    config.isEncrypt ? encrypt(JSON.stringify(data)) : JSON.stringify(data),
  );
  return true;
};

const getStorageFromKey = (key: string) => {
  //\u83B7\u53D6\u6307\u5B9A\u503C
  if (config.prefix) {
    key = autoAddPreFix(key);
  }
  if (!window[config.type].getItem(key)) {
    //\u4E0D\u5B58\u5728\u5224\u65AD
    return null;
  }
  const storageVal = config.isEncrypt
    ? JSON.parse(decrypt(window[config.type].getItem(key) as string))
    : JSON.parse(window[config.type].getItem(key) as string);
  const now = Date.now();
  if (now >= storageVal.expire) {
    //\u8FC7\u671F\u9500\u6BC1
    removeStorageFromKey(key);
    return null;
    //\u4E0D\u8FC7\u671F\u56DE\u503C
  } else {
    return storageVal.value;
  }
};

const getAllStorage = () => {
  //\u83B7\u53D6\u6240\u6709\u503C
  const storageList: any = {};
  const keys = Object.keys(window[config.type]);
  keys.forEach((key) => {
    const value = getStorageFromKey(key);
    if (value !== null) {
      //\u5982\u679C\u503C\u6CA1\u6709\u8FC7\u671F\uFF0C\u52A0\u5165\u5230\u5217\u8868\u4E2D
      storageList[key] = value;
    }
  });
  return storageList;
};

const getStorageLength = () => {
  //\u83B7\u53D6\u503C\u5217\u8868\u957F\u5EA6
  return window[config.type].length;
};

const removeStorageFromKey = (key: string) => {
  //\u5220\u9664\u503C
  if (config.prefix) {
    key = autoAddPreFix(key);
  }
  window[config.type].removeItem(key);
};

const clearStorage = () => {
  window[config.type].clear();
};

const autoAddPreFix = (key: string) => {
  //\u6DFB\u52A0\u524D\u7F00\uFF0C\u4FDD\u6301\u6D4F\u89C8\u5668Application\u89C6\u56FE\u552F\u4E00\u6027
  const prefix = config.prefix || '';
  return \`\${prefix}_\${key}\`;
};

/** eg: 
setStorage('name', 'fx', 1)
setStorage('age', { now: 18 }, 100000)
setStorage('history', [1, 2, 3], 100000)
console.log('getStorageFromKey:name', getStorageFromKey('name'))
console.log('getStorageFromKey:name', getStorageFromKey('history'))
console.log('getStorageLength', getStorageLength());
console.log('getAllStorage', getAllStorage());
clearStorage();
*/ 

export {
  setStorage,
  getStorageFromKey,
  getAllStorage,
  getStorageLength,
  removeStorageFromKey,
  clearStorage,
};    
    `
  );
  return [["src", "lib", "storage"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/layout/StateLayout.tsx.ts
function getFile86() {
  const file2 = createResultFile(
    "StateLayout",
    "tsx",
    `
"use client";
import React, { useEffect, useState } from "react";
import { __setUserInfoState } from "@/models/_sysInfoSlice";
import { setStorage } from "@/lib/storage/hooks";
import { getInitialState } from "@/lib/getInitialState";
import { StoreProvider } from '@/lib/store/StoreProvider';
import { Spin } from "antd";
let watermark = undefined;
if (typeof document !== "undefined") {
    watermark = require('@webank/watermark');
}

export default ({ children }: any) => {
    const [state, setState] = useState(null);
    useEffect(() => {
    const init = async () => {
        let initialState = await getInitialState();
        setState(initialState);
        setStorage("userInfo", initialState.userInfo);
        // \u652F\u6301\u914D\u7F6E\u7684\u5C5E\u6027
        if (typeof document !== "undefined") {
        watermark.init({
            id: "",  // \u6307\u5B9A\u6C34\u5370\u8BA1\u7B97\u7684dom \u9ED8\u8BA4\u5F53\u524D\u7684\u9875\u9762body
            waterMaskBoxId: "root", // \u6C34\u5370\u5BB9\u5668\u7684id
            frontX: "", // \u6C34\u5370\u5F00\u59CB\u7684\u6A2A\u5750\u6807 \u9ED8\u8BA4\u4EE5body\u6807\u7B7E\u6765\u8BA1\u7B97
            frontY: "", // \u6C34\u5370\u5F00\u59CB\u7684\u7EB5\u5750\u6807 \u9ED8\u8BA4\u4EE5body\u6807\u7B7E\u6765\u8BA1\u7B97
            frontRows: "", // \u6C34\u5370\u7684\u884C\u6570 \u9ED8\u8BA4\u4EE5body\u6807\u7B7E\u6765\u8BA1\u7B97
            frontCols: "", // \u6C34\u5370\u7684\u5217\u6570 \u9ED8\u8BA4\u4EE5body\u6807\u7B7E\u6765\u8BA1\u7B97
            maskTxt: initialState.userInfo.loginId,  // \u6C34\u5370\u7684\u5185\u5BB9
            color: "#000000", // \u5B57\u4F53\u989C\u8272
            width: 150, // \u5BBD\u5EA6
            height: 50, // \u9AD8\u5EA6
            fontSize: "16px", // \u5B57\u4F53\u5927\u5C0F
            frontFont: "\u5FAE\u8F6F\u96C5\u9ED1", // \u5B57\u4F53
            frontBackgroundAlpha: 0, // \u80CC\u666F\u900F\u660E\u6BD4\u4F8B
            frontTxtAlpha: 0.1, // \u6587\u5B57\u900F\u660E\u6BD4\u4F8B
            angle: 15, // \u65CB\u8F6C\u89D2\u5EA6
            frontXSpace: 15, // \u6C34\u5370\u6A2A\u5411\u95F4\u9699
            frontYSpace: 15, // \u6C34\u5370\u7EB5\u5411\u95F4\u9699
            backgroundColor: "#000000", // \u80CC\u666F\u989C\u8272
            resizeable: true, // \u652F\u6301resize\u91CD\u65B0\u8BA1\u7B97\u6C34\u5370
            addTime: true, // \u652F\u6301\u6C34\u5370\u5185\u5BB9\u540E\u9762\u65B0\u589E\u65F6\u95F4
            setIntervalTime: "60000", // \u652F\u6301\u8BBE\u7F6E\u66F4\u65B0\u6C34\u5370\u65F6\u95F4\u7684\u7B49\u5F85\u65F6\u95F4
            dateFormatter: "YYYY-MM-DD hh:mm", // \u652F\u6301\u8BBE\u7F6E\u6C34\u5370\u65F6\u95F4\u7684\u683C\u5F0F
        });
        }
    }
    init();
    }, [])
    if (state != null) {
    return <StoreProvider>{React.cloneElement(children, { initialState: state })}</StoreProvider>;
    } else {
    return <Spin fullscreen></Spin>
    }
} 
    `
  );
  return [["src", "layout"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/layout/README.md.ts
function getFile87() {
  const file2 = createResultFile(
    "README",
    "md",
    `
## \u9ED8\u8BA4\u57FA\u7840\u5E03\u5C40         
    `
  );
  return [["src", "layout"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/layout/BasicLayout.tsx.ts
function getFile88() {
  const file2 = createResultFile(
    "BasicLayout",
    "tsx",
    `
"use client";
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useCallback } from 'react';
import { PageContainer } from '@ant-design/pro-components';
import type { ProSettings } from '@ant-design/pro-components';
import { Result, Button, Dropdown } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import '@/app/globals.css';
import defaultProps from '@/lib/_defaultProps';
import accessFactory from "@/lib/access";
import routes from "@/lib/routes";

import { isMatchPath, matchRouter } from './utils';
import { useAppDispatch } from '@/lib/store/hooks';
import { __setUserInfoState } from '@/models/_sysInfoSlice';
const ProLayout = dynamic(
    () => import("@ant-design/pro-components").then((com) => com.ProLayout),
    { ssr: false }
);

const noMatch = (
    <Result
        status={403}
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
            <Button type="primary">
                <Link href="/">Back to home</Link>
            </Button>
        }
    />
);
const BasicLayout = (props: any) => {
    const {
        children,
        initialState
    } = props;
    useAppDispatch()(__setUserInfoState(initialState.userInfo));
    const pathname = usePathname();
    const [pathnameProp, setPathnameProp] = useState('/');
    const [logoImg, setLogoImg] = useState("/web/menu_logo.png");
    const [collapsed, setCollapsed] = useState(true);
    const router = useRouter()
    const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
        colorPrimary: '#1890ff',
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
        menu: { locale: true },
    });
    useEffect(() => {
        setPathnameProp(pathname);
    }, [pathname])
    const access = accessFactory(initialState);
    // \u8DEF\u7531\u6743\u9650\u8FC7\u6EE4
    let newRoutes = matchRouter(access, routes);
    const renderContent = useCallback(() => {
        const matchPath = isMatchPath(pathname, newRoutes);
        if (matchPath) {
            return children
        }
        return noMatch
    }, [pathname])
    const handleMenuCollapse = (payload) => {
        setCollapsed(payload);
        payload ? setLogoImg("/web/user-empty.svg") : setLogoImg("/web/menu_logo.png")
    };
    return (
        <ProLayout
            logo={() => <img src={logoImg} alt="logImg" />}
            collapsed={collapsed}
            onCollapse={handleMenuCollapse}
            siderWidth={216}
            {...defaultProps}
            route={newRoutes[0]}
            location={{
                pathname: pathnameProp,
            }}
            avatarProps={{
                src: '/web/user-empty.svg',
                title: initialState.userInfo.userName || '\u67DC\u5458',
                size: 'small',
                render: (props, dom) => {
                    return (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: 'logout',
                                        icon: <LogoutOutlined />,
                                        label: '\u9000\u51FA\u767B\u5F55',
                                    },
                                ],
                                onClick: ({ key }) => {
                                    // message.info(\`Click on item \${key}\`);
                                    if (key === "logout") {
                                        window.location.href = initialState.userInfo.logoutUrl;
                                    }
                                }
                            }}
                        >
                            {dom}
                        </Dropdown>
                    );
                },
            }}
            actionsRender={(props) => {
                if (props.isMobile) return [];
                return [];
            }}
            onMenuHeaderClick={() => {
                setPathnameProp('/');
                router.push('/');
            }}
            menuItemRender={(item, dom) => (
                <div
                    onClick={() => {
                        router.push(item.path || '/');
                    }}>
                    {dom}
                </div>
            )}
            {...settings}
        >
            <PageContainer>
                {renderContent()}
            </PageContainer>
        </ProLayout>
    );
};
export default BasicLayout;
    `
  );
  return [["src", "layout"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/layout/utils.ts.ts
function getFile89() {
  const file2 = createResultFile(
    "utils",
    "ts",
    `
export const matchRouter = (accessProp: any, routesProp: any) => {
    let matchRoute = routesProp;
    let newList = [];
    for (let i = 0; i < matchRoute.length; i++) {
        let currentRoute = matchRoute[i];
        let currentAccess = currentRoute.access || undefined;
        if (typeof currentAccess === "string" && accessProp[currentAccess] || typeof currentAccess === "undefined") {
        let routesTmp = undefined;
        if (currentRoute.routes && currentRoute.routes.length > 0) {
            routesTmp = matchRouter(accessProp, currentRoute.routes)
            if (routesTmp && routesTmp.length > 0) {
            currentRoute.routes = routesTmp;
            newList.push(currentRoute)
            } else {
            delete currentRoute.routes
            }
        } else {
            newList.push(currentRoute)
        }
        }
    }
    return newList
    }
    export const isMatchPath = (path: string, routes: Array<any>): any => {
    let isMatch = '';
    
    for (let i = 0; i < routes.length; i++) {
        const routeItem = routes[i];
        if (path === routeItem.path) {
        isMatch = routeItem
        break
        }
        if (routeItem.routes?.length) {
        isMatch = isMatchPath(path, routeItem.routes)
        if (isMatch) {
            break;
        }
        }
    }
    return isMatch
    }
    export const hasRoleAuth = (roleList:any, auth:string):boolean => {
    return roleList.findIndex((item:string) => item === auth) > -1
    }
    export const authFilter = (list: Array<string>, auth: any) => {
    let tmp = {}
    for (let i of list) {
        tmp[i] = hasRoleAuth(auth, i)
    }
    return tmp;
    }        
    `
  );
  return [["src", "layout"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/app/page.tsx.ts
function getFile90() {
  const file2 = createResultFile(
    "page",
    "tsx",
    `
import React from "react";
const Page = ({children}: React.PropsWithChildren) => {
    return (
        <div>Welcome</div>
    )
}
export default Page;
    `
  );
  return [["src", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/app/not-found.tsx.ts
function getFile91() {
  const file2 = createResultFile(
    "not-found",
    "tsx",
    `
import React from 'react';
import { Button, Result } from 'antd';
import Link from 'next/link';

const App: React.FC = () => (
    <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary"><Link href="/">Back to home</Link></Button>}
    />

);

export default App;
    `
  );
  return [["src", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/app/loading.tsx.ts
function getFile92() {
  const file2 = createResultFile(
    "loading",
    "tsx",
    `
export default () => {
    return (
      <div>loading</div>
    );
  };
    `
  );
  return [["src", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/app/layout.tsx.ts
function getFile93() {
  const file2 = createResultFile(
    "layout",
    "tsx",
    `
import React from 'react';
// import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import BasicLayout from '@/layout/BasicLayout';
import '@/app/globals.css';
import StateLayout from '@/layout/StateLayout';

// const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: '\u67DC\u9762',
	description: '\u67DC\u9762\u63CF\u8FF0',
};
const RootLayout = async (props: React.PropsWithChildren) => {
	const {
		children
	} = props;
	return (
		<html lang="en">
			<body >
				<AntdRegistry>
					<StateLayout id="root">
						<BasicLayout >
							{children}
						</BasicLayout>
					</StateLayout>
				</AntdRegistry>
			</body>
		</html>
	);
};
export default RootLayout;
    `
  );
  return [["src", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/app/globals.css.ts
function getFile94() {
  const file2 = createResultFile(
    "globals",
    "css",
    `
/* @tailwind base;
@tailwind components;
@tailwind utilities; */

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

body {}
  
  `
  );
  return [["src", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/src/app/error.tsx.ts
function getFile95() {
  const file2 = createResultFile(
    "error",
    "tsx",
    `
"use client";
import React from 'react';
import { Button, Result } from 'antd';

const App: React.FC = () => (
  <Result
    status="error"
    title="Error"
    subTitle="Sorry, something went wrong."
    extra={<Button type="primary">Back Home</Button>}
  />
);

export default App;
  `
  );
  return [["src", "app"], file2];
}

// src/plugins/project/framework/nextjs/template/files/public/next.svg.ts
function getFile96() {
  const file2 = createResultFile(
    "next",
    "svg",
    `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>
    `
  );
  return [["public"], file2];
}

// src/plugins/project/framework/nextjs/template/files/public/vercel.svg.ts
function getFile97() {
  const file2 = createResultFile(
    "vercel",
    "svg",
    `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 283 64"><path fill="black" d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"/></svg>
    `
  );
  return [["public"], file2];
}

// src/plugins/project/framework/nextjs/template/static-files.ts
function generateStaticFiles4(root = createResultDir(".")) {
  runFileGenerator(root, getFile43);
  runFileGenerator(root, getFile44);
  runFileGenerator(root, getFile45);
  runFileGenerator(root, getFile46);
  runFileGenerator(root, getFile48);
  runFileGenerator(root, getFile47);
  runFileGenerator(root, getFile49);
  runFileGenerator(root, getFile50);
  runFileGenerator(root, getFile51);
  runFileGenerator(root, getFile52);
  runFileGenerator(root, getFile53);
  runFileGenerator(root, getFile54);
  runFileGenerator(root, getFile55);
  runFileGenerator(root, getFile56);
  runFileGenerator(root, getFile57);
  runFileGenerator(root, getFile58);
  runFileGenerator(root, getFile59);
  runFileGenerator(root, getFile60);
  runFileGenerator(root, getFile61);
  runFileGenerator(root, getFile62);
  runFileGenerator(root, getFile63);
  runFileGenerator(root, getFile64);
  runFileGenerator(root, getFile65);
  runFileGenerator(root, getFile66);
  runFileGenerator(root, getFile67);
  runFileGenerator(root, getFile68);
  runFileGenerator(root, getFile69);
  runFileGenerator(root, getFile70);
  runFileGenerator(root, getFile71);
  runFileGenerator(root, getFile72);
  runFileGenerator(root, getFile73);
  runFileGenerator(root, getFile74);
  runFileGenerator(root, getFile75);
  runFileGenerator(root, getFile76);
  runFileGenerator(root, getFile77);
  runFileGenerator(root, getFile78);
  runFileGenerator(root, getFile79);
  runFileGenerator(root, getFile80);
  runFileGenerator(root, getFile81);
  runFileGenerator(root, getFile82);
  runFileGenerator(root, getFile85);
  runFileGenerator(root, getFile84);
  runFileGenerator(root, getFile83);
  runFileGenerator(root, getFile86);
  runFileGenerator(root, getFile87);
  runFileGenerator(root, getFile88);
  runFileGenerator(root, getFile89);
  runFileGenerator(root, getFile90);
  runFileGenerator(root, getFile91);
  runFileGenerator(root, getFile92);
  runFileGenerator(root, getFile93);
  runFileGenerator(root, getFile94);
  runFileGenerator(root, getFile95);
  runFileGenerator(root, getFile96);
  runFileGenerator(root, getFile97);
  return root;
}

// src/plugins/project/framework/nextjs/template/index.ts
var nextjsTemplate = {
  slots: {
    components: {
      path: ["src", "components"]
    },
    pages: {
      path: ["src", "app"],
      fileName: "page"
    },
    router: {
      path: ["src", "lib"],
      fileName: "routes"
    },
    entry: {
      path: ["src"],
      fileName: "app"
    },
    constants: {
      path: ["src"],
      fileName: "constants"
    },
    utils: {
      path: ["src"],
      fileName: "utils"
    },
    i18n: {
      path: ["src"],
      fileName: "i18n"
    },
    globalStyle: {
      path: ["src"],
      fileName: "global"
    },
    htmlEntry: {
      path: ["public"],
      fileName: "index"
    },
    packageJSON: {
      path: [],
      fileName: "package"
    }
  },
  generateTemplate() {
    return generateStaticFiles4();
  }
};
var template_default4 = nextjsTemplate;

// src/plugins/project/framework/nextjs/plugins/packageJSON.ts
var pluginFactory43 = (cfg) => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    const ir = next.ir;
    const packageJson = {
      name: (cfg == null ? void 0 : cfg.packageName) || "counter-demo",
      version: (cfg == null ? void 0 : cfg.packageVersion) || "0.0.1",
      description: "\u8F7B\u91CF\u7EA7\u6A21\u677F\uFF0C\u4F7F\u7528 JavaScript\uFF0C\u4EC5\u5305\u542B\u57FA\u7840\u7684 Layout\u3002",
      dependencies: {
        "@ant-design/cssinjs": "^1.18.2",
        "@ant-design/icons": "^5.2.6",
        "@ant-design/nextjs-registry": "^1.0.0",
        "@ant-design/pro-components": "^2.6.43",
        "@emotion/css": "^11.11.2",
        "@reduxjs/toolkit": "^2.2.1",
        "@webank/watermark": "^1.0.9",
        "antd": "^5.12.7",
        "axios": "^1.6.5",
        "moment": "^2.30.1",
        "next-auth": "^4.24.5",
        "react": "^18",
        "react-dom": "^18",
        "react-redux": "^9.1.0",
        "redux-persist": "^6.0.0",
        ...buildDataSourceDependencies(ir, cfg == null ? void 0 : cfg.datasourceConfig)
      },
      devDependencies: {
        "@types/crypto-js": "^4.2.2",
        "@types/node": "^20",
        "@types/react": "^18",
        "@types/react-dom": "^18",
        "autoprefixer": "^10.0.1",
        "crypto-js": "^4.2.0",
        "eslint": "^8",
        "eslint-config-next": "14.0.4",
        "express": "^4.18.2",
        "http-proxy-middleware": "^2.0.6",
        "next": "^14.1.0",
        "next-env": "^1.0.0",
        "postcss": "^8",
        "tailwindcss": "^3.3.0",
        "typescript": "^5"
      },
      scripts: {
        "dev": "next dev -p 8000",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "dev:proxy": "node proxy.js"
      },
      private: true
    };
    ir.packages.forEach((packageInfo) => {
      packageJson.dependencies[packageInfo.package] = packageInfo.version;
    });
    next.chunks.push({
      type: "json" /* JSON */,
      fileType: "json" /* JSON */,
      name: COMMON_CHUNK_NAME.FileMainContent,
      content: packageJson,
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var packageJSON_default4 = pluginFactory43;

// src/plugins/project/framework/nextjs/index.ts
var nextjs_default = {
  template: template_default4,
  plugins: {
    packageJSON: packageJSON_default4
  }
};

// src/solutions/nextjs.ts
function createNextJsProjectBuilder(options) {
  return createProjectBuilder({
    inStrictMode: options == null ? void 0 : options.inStrictMode,
    extraContextData: { ...options },
    template: nextjs_default.template,
    plugins: {
      components: [
        reactCommonDeps_default(),
        esmodule_default({
          fileType: "tsx"
        }),
        styleImport_default(),
        containerClass_default(),
        containerInjectContext_default(),
        containerInjectUtils_default(),
        containerInjectDataSourceEngine_default(),
        containerInjectI18n_default(),
        containerInjectConstants_default(),
        containerInitState_default(),
        containerLifeCycle_default(),
        containerMethod_default(),
        jsx_default({
          nodeTypeMapping: {
            Div: "div",
            Component: "div",
            Page: "div",
            Block: "div"
          }
        }),
        css_default()
      ],
      pages: [
        reactCommonDeps_default(),
        esmodule_default({
          fileType: "tsx"
        }),
        styleImport_default(),
        containerClass_default(),
        containerInjectContext_default(),
        containerInjectUtils_default(),
        containerInjectDataSourceEngine_default(),
        containerInjectI18n_default(),
        containerInjectConstants_default(),
        containerInitState_default(),
        containerLifeCycle_default(),
        containerMethod_default(),
        jsx_default({
          nodeTypeMapping: {
            Div: "div",
            Component: "div",
            Page: "div",
            Block: "div",
            Box: "div"
          }
        }),
        css_default()
      ],
      constants: [constants_default()],
      utils: [esmodule_default(), utils_default("react")],
      i18n: [i18n_default()],
      packageJSON: [nextjs_default.plugins.packageJSON()]
    },
    postProcessors: [prettier_default()],
    customizeBuilderOptions: options == null ? void 0 : options.customizeBuilderOptions
  });
}
var plugins4 = {
  containerClass: containerClass_default,
  containerInitState: containerInitState_default,
  containerInjectContext: containerInjectContext_default,
  containerInjectUtils: containerInjectUtils_default,
  containerInjectI18n: containerInjectI18n_default,
  containerInjectDataSourceEngine: containerInjectDataSourceEngine_default,
  containerLifeCycle: containerLifeCycle_default,
  containerMethod: containerMethod_default,
  jsx: jsx_default,
  commonDeps: reactCommonDeps_default
};

// src/plugins/common/requireUtils.ts
var pluginFactory44 = () => {
  const plugin = async (pre) => {
    const next = {
      ...pre
    };
    next.chunks.push({
      type: "string" /* STRING */,
      fileType: "jsx" /* JSX */,
      name: COMMON_CHUNK_NAME.InternalDepsImport,
      content: "import * from 'react';",
      linkAfter: []
    });
    return next;
  };
  return plugin;
};
var requireUtils_default = pluginFactory44;

// src/utils/index.ts
var utils_exports = {};
__export(utils_exports, {
  common: () => common_exports,
  compositeType: () => compositeType_exports,
  dataSource: () => dataSource_exports,
  expressionParser: () => expressionParser_exports,
  jsExpression: () => jsExpression_exports,
  jsSlot: () => jsSlot_exports,
  nodeToJSX: () => nodeToJSX_exports,
  pathHelper: () => pathHelper_exports,
  resultHelper: () => resultHelper_exports,
  schema: () => schema_exports,
  scope: () => Scope_exports,
  templateHelper: () => templateHelper_exports,
  validate: () => validate_exports,
  version: () => version_exports
});

// src/index.ts
var src_default = {
  createProjectBuilder,
  createModuleBuilder,
  solutions: {
    icejs: createIceJsProjectBuilder,
    icejs3: createIceJsProjectBuilder2,
    rax: createRaxProjectBuilder,
    nextjs: createNextJsProjectBuilder
  },
  solutionParts: {
    icejs: icejs_default,
    icejs3: icejs3_default,
    rax: rax_default,
    nextjs: nextjs_default
  },
  publishers: {
    disk: createDiskPublisher,
    zip: createZipPublisher
  },
  plugins: {
    common: {
      esmodule: esmodule_default,
      esModule: esmodule_default,
      requireUtils: requireUtils_default,
      styleImport: styleImport_default
    },
    style: {
      css: css_default
    },
    project: {
      constants: constants_default,
      i18n: i18n_default,
      utils: utils_default
    },
    icejs: {
      ...plugins
    },
    icejs3: {
      ...plugins2
    },
    rax: {
      ...plugins3
    },
    nextjs: {
      ...plugins4
    },
    react: {
      ...plugins
    }
  },
  postprocessor: {
    prettier: prettier_default
  },
  utils: utils_exports,
  chunkNames: {
    COMMON_CHUNK_NAME,
    CLASS_DEFINE_CHUNK_NAME,
    REACT_CHUNK_NAME
  },
  defaultLinkAfter: {
    COMMON_DEFAULT_LINK_AFTER: DEFAULT_LINK_AFTER
  },
  constants: const_exports
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BUILTIN_SLOT_NAMES,
  CLASS_DEFINE_CHUNK_NAME,
  COMMON_CHUNK_NAME,
  COMMON_SUB_MODULE_NAME,
  CONTAINER_TYPE,
  ChunkBuilder,
  ChunkType,
  CodeBuilder,
  CodeGeneratorError,
  CompatibilityError,
  ComponentValidationError,
  DEFAULT_LINK_AFTER,
  DependencyType,
  FILE_TYPE_FAMILY,
  FileType,
  InternalDependencyType,
  NATIVE_ELE_PKG,
  PIECE_TYPE,
  PluginType,
  ProjectBuilder,
  PublisherError,
  SUPPORT_SCHEMA_VERSION_LIST,
  SchemaParser,
  componentAnalyzer,
  createModuleBuilder,
  createProjectBuilder,
  groupChunks,
  isBuiltinSlotName
});
//# sourceMappingURL=index.js.map
