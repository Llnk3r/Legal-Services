import {
  CommonModule,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-EBRXQLDE.js";

// src/app/modules/page404/page404/page404.component.ts
var _Page404Component = class _Page404Component {
};
_Page404Component.\u0275fac = function Page404Component_Factory(t) {
  return new (t || _Page404Component)();
};
_Page404Component.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Page404Component, selectors: [["app-page404"]], decls: 7, vars: 0, consts: [[1, "page404"], ["routerLink", "/"]], template: function Page404Component_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "h1");
    \u0275\u0275text(2, "The page can\u2019t be found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "It looks like nothing was found at this location.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 1);
    \u0275\u0275text(6, "Back to Home page");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [RouterLink] });
var Page404Component = _Page404Component;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Page404Component, { className: "Page404Component", filePath: "src\\app\\modules\\page404\\page404\\page404.component.ts", lineNumber: 8 });
})();

// src/app/modules/page404/page404.module.ts
var routes = [
  {
    path: "",
    component: Page404Component,
    title: "Page not found"
  }
];
var _Page404Module = class _Page404Module {
};
_Page404Module.\u0275fac = function Page404Module_Factory(t) {
  return new (t || _Page404Module)();
};
_Page404Module.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _Page404Module });
_Page404Module.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule.forChild(routes)
] });
var Page404Module = _Page404Module;
export {
  Page404Module
};
//# sourceMappingURL=chunk-UHEX5MRN.js.map
