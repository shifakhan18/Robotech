/**
 * =================================================================
 * Project: My Quiz App
 * Author: Shifa Khanum
 * Date: August 23, 2025
 *
 * Description:
 * Main application bundle. This file contains the core logic for
 * the React application, including component definitions, routing,
 * and styling logic.
 * =================================================================
 */
'use strict';

(function() {

    // Webpack module definitions
    var modules = {

        // --- Module 110: Hoist Non-React Statics ---
        // Utility for copying static methods between React components.
        110: function(module, exports, __webpack_require__) {
            var hoistNonReactStatics = __webpack_require__(309);
            var reactStatics = {
                childContextTypes: true,
                contextType: true,
                // ... (and other React-specific statics)
            };
            // ... (implementation)
        },

        // --- Module 746: React Is ---
        // Helper functions to identify different React component types.
        746: function(module, exports) {
            var symbolFor = typeof Symbol === "function" && Symbol.for;
            var REACT_ELEMENT_TYPE = symbolFor ? Symbol.for("react.element") : 60103;
            // ... (definitions for Fragment, Context, Provider, etc.)

            function typeOf(object) {
                if (typeof object === 'object' && object !== null) {
                    var $$typeof = object.$$typeof;
                    switch ($$typeof) {
                        case REACT_ELEMENT_TYPE:
                            // ... (logic to determine element type)
                    }
                }
            }

            exports.isElement = function(object) {
                return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            };
            // ... (and other `is` functions)
        },

        // --- Module 309: React Is (Proxy) ---
        309: function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(746);
        },

        // --- Module 463: React DOM ---
        // The main entry point for the React DOM library.
        463: function(module, exports, __webpack_require__) {
            var React = __webpack_require__(791);
            var scheduler = __webpack_require__(296);

            function invariant(condition, format) {
                // ... (Error handling logic)
            }
            // ... (Vast amount of React DOM implementation for rendering, events, etc.)
        },

        // --- Module 250: React DOM Client ---
        // Entry point for the modern `createRoot` API.
        250: function(module, exports, __webpack_require__) {
            var ReactDOM = __webpack_require__(164);
            exports.createRoot = ReactDOM.createRoot;
            exports.hydrateRoot = ReactDOM.hydrateRoot;
        },

        // --- Module 164: React DOM (Proxy) ---
        164: function(module, exports, __webpack_require__) {
            (function() {
                if (
                    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
                    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE === 'function'
                ) {
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(arguments.callee);
                    } catch (err) {
                        console.error(err);
                    }
                }
            })();
            module.exports = __webpack_require__(463);
        },

        // --- Module 374: React JSX Runtime ---
        // Core logic for handling JSX transformations.
        374: function(module, exports, __webpack_require__) {
            var React = __webpack_require__(791);
            var REACT_ELEMENT_TYPE = Symbol.for("react.element");
            var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
            // ... (JSX implementation)

            exports.Fragment = REACT_FRAGMENT_TYPE;
            exports.jsx = jsx;
            exports.jsxs = jsx;
        },

        // --- Module 117 & 791: React ---
        // The main entry point for the React library itself.
        117: function(module, exports) {
            // ... (Core React implementation: Component, hooks, context, etc.)
        },
        791: function(module, exports, __webpack_require__) {
            module.exports = __webpack_require__(117);
        },

        // ... (Other libraries like Scheduler, React Router, MUI, etc.)

        // --- Application Code ---
        // This appears to be the main entry point of YOUR application logic.
        // It brings together all the components and sets up the routing.
        // ---
        // ...
        // ... (Code for your components like Navbar, Quiz topics, Login page, etc.)
        // ...
    };

    // --- Webpack Bootstrap ---
    // This is the core logic that loads and runs your application modules.
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        var module = installedModules[moduleId] = {
            exports: {}
        };
        modules[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }

    // --- Start Application ---
    // Executes the main application logic.
    (function() {
        var React = __webpack_require__(791);
        var ReactDOM = __webpack_require__(250);
        // ... other imports for routing and components

        // Example: Identifying your App component
        function App() {
            return (
                // Your main App JSX structure
            );
        }

        // Create the root element and render the app
        var root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
            React.createElement(React.StrictMode, {
                children: React.createElement(App, {})
            })
        );
    })();

})();
