/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Layer.ts":
/*!**********************!*\
  !*** ./src/Layer.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Neuron_1 = __webpack_require__(/*! ./Neuron */ \"./src/Neuron.ts\");\nvar Layer = /** @class */ (function () {\n    function Layer(neuronsNumber, eachNeuronInputsNumber) {\n        this.neurons = [];\n        for (var i = 0; i < neuronsNumber; i++) {\n            this.neurons[i] = new Neuron_1.Neuron(eachNeuronInputsNumber);\n        }\n    }\n    Layer.prototype.activate = function (previousLayerOutputs) {\n        this.neurons.forEach(function (neuron) {\n            neuron.activate(previousLayerOutputs);\n        });\n    };\n    Object.defineProperty(Layer.prototype, \"outputs\", {\n        get: function () {\n            return this.neurons.map(function (neuron) { return neuron.output; });\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Layer;\n}());\nexports.Layer = Layer;\nvar InputLayer = /** @class */ (function (_super) {\n    __extends(InputLayer, _super);\n    function InputLayer(neuronsNumber) {\n        return _super.call(this, neuronsNumber, 1) || this;\n    }\n    InputLayer.prototype.activate = function (networkInputs) {\n        if (networkInputs.length !== this.neurons.length) {\n            throw new Error(\"Число входов в сеть не соответствует формату обучающих данных\");\n        }\n        for (var i = 0; i < networkInputs.length; i++) {\n            var input = networkInputs[i];\n            this.neurons[i].activate([input]);\n        }\n    };\n    return InputLayer;\n}(Layer));\nexports.InputLayer = InputLayer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5ZXIudHM/NmM4MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBMkM7QUFTM0M7SUFHSSxlQUNFLGFBQXFCLEVBQ3JCLHNCQUE4QjtRQUp6QixZQUFPLEdBQWMsRUFBRSxDQUFDO1FBTTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0Isb0JBQThCO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNO1lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBVywwQkFBTzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsTUFBTSxFQUFiLENBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztPQUFBO0lBQ0gsWUFBQztBQUFELENBQUM7QUFyQlUsc0JBQUs7QUF1QmhCO0lBQWdDLDhCQUFLO0lBQ25DLG9CQUFZLGFBQXFCO2VBQy9CLGtCQUFNLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsYUFBdUI7UUFDckMsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUM7U0FDakY7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQWYrQixLQUFLLEdBZXBDO0FBZlksZ0NBQVUiLCJmaWxlIjoiLi9zcmMvTGF5ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmV1cm9uLCBOZXVyb24gfSBmcm9tIFwiLi9OZXVyb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxheWVyIHtcclxuICAgIG5ldXJvbnM6IElOZXVyb25bXTtcclxuICAgIG91dHB1dHM6IG51bWJlcltdO1xyXG4gIFxyXG4gICAgYWN0aXZhdGUoaW5wdXRzOiBudW1iZXJbXSk6IHZvaWQ7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGNsYXNzIExheWVyIGltcGxlbWVudHMgSUxheWVyIHtcclxuICAgIHB1YmxpYyBuZXVyb25zOiBJTmV1cm9uW10gPSBbXTtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBuZXVyb25zTnVtYmVyOiBudW1iZXIsXHJcbiAgICAgIGVhY2hOZXVyb25JbnB1dHNOdW1iZXI6IG51bWJlclxyXG4gICAgKSB7ICAgICAgICBcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXVyb25zTnVtYmVyOyBpKyspIHtcclxuICAgICAgICB0aGlzLm5ldXJvbnNbaV0gPSBuZXcgTmV1cm9uKGVhY2hOZXVyb25JbnB1dHNOdW1iZXIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUocHJldmlvdXNMYXllck91dHB1dHM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgIHRoaXMubmV1cm9ucy5mb3JFYWNoKG5ldXJvbiA9PiB7XHJcbiAgICAgICAgbmV1cm9uLmFjdGl2YXRlKHByZXZpb3VzTGF5ZXJPdXRwdXRzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgZ2V0IG91dHB1dHMoKTogbnVtYmVyW10ge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXVyb25zLm1hcChuZXVyb24gPT4gbmV1cm9uLm91dHB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgSW5wdXRMYXllciBleHRlbmRzIExheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ldXJvbnNOdW1iZXI6IG51bWJlcikgeyAgICAgICAgXHJcbiAgICAgIHN1cGVyKG5ldXJvbnNOdW1iZXIsIDEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGFjdGl2YXRlKG5ldHdvcmtJbnB1dHM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXR3b3JrSW5wdXRzLmxlbmd0aCAhPT0gdGhpcy5uZXVyb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCn0LjRgdC70L4g0LLRhdC+0LTQvtCyINCyINGB0LXRgtGMINC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YTQvtGA0LzQsNGC0YMg0L7QsdGD0YfQsNGO0YnQuNGFINC00LDQvdC90YvRhVwiKVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV0d29ya0lucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gbmV0d29ya0lucHV0c1tpXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5ldXJvbnNbaV0uYWN0aXZhdGUoW2lucHV0XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Layer.ts\n");

/***/ }),

/***/ "./src/Network.ts":
/*!************************!*\
  !*** ./src/Network.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Layer_1 = __webpack_require__(/*! ./Layer */ \"./src/Layer.ts\");\nvar Network = /** @class */ (function () {\n    function Network(layersSizes) {\n        this.layers = [];\n        this.layers.push(new Layer_1.InputLayer(layersSizes[0]));\n        for (var i = 1; i < layersSizes.length; i++) {\n            var previousLayerSize = layersSizes[i - 1];\n            var currentLayerSize = layersSizes[i];\n            this.layers.push(new Layer_1.Layer(currentLayerSize, previousLayerSize));\n        }\n    }\n    Network.prototype.activate = function (networkInputs) {\n        this.layers[0].activate(networkInputs);\n        for (var i = 1; i < this.layers.length; i++) {\n            var previousLayerOutputs = this.layers[i - 1].outputs;\n            this.layers[i].activate(previousLayerOutputs);\n        }\n    };\n    Network.prototype.propogate = function (target, learningRate) { };\n    Object.defineProperty(Network.prototype, \"outputs\", {\n        get: function () {\n            return this.outputLayer.outputs;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Network.prototype, \"outputLayer\", {\n        get: function () {\n            return this.layers[this.layers.length - 1];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Network;\n}());\nexports.Network = Network;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTmV0d29yay50cz8zOGI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQW9EO0FBT3BEO0lBR0UsaUJBQVksV0FBcUI7UUFGekIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFTSwwQkFBUSxHQUFmLFVBQWdCLGFBQXVCO1FBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUV4RCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVNLDJCQUFTLEdBQWhCLFVBQWlCLE1BQWdCLEVBQUUsWUFBb0IsSUFBRyxDQUFDO0lBRTNELHNCQUFXLDRCQUFPO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLGdDQUFXO2FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUM7QUFqQ1ksMEJBQU8iLCJmaWxlIjoiLi9zcmMvTmV0d29yay50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMYXllciwgTGF5ZXIsIElucHV0TGF5ZXIgfSBmcm9tIFwiLi9MYXllclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJTmV0d29yayB7XHJcbiAgYWN0aXZhdGUoaW5wdXRzOiBudW1iZXJbXSk6IHZvaWQ7XHJcbiAgcHJvcG9nYXRlKHRhcmdldDogbnVtYmVyW10sIGxlYXJuaW5nUmF0ZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5ldHdvcmsgaW1wbGVtZW50cyBJTmV0d29yayB7XHJcbiAgcHJpdmF0ZSBsYXllcnM6IElMYXllcltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGxheWVyc1NpemVzOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5sYXllcnMucHVzaChuZXcgSW5wdXRMYXllcihsYXllcnNTaXplc1swXSkpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsYXllcnNTaXplcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBwcmV2aW91c0xheWVyU2l6ZSA9IGxheWVyc1NpemVzW2kgLSAxXTtcclxuICAgICAgY29uc3QgY3VycmVudExheWVyU2l6ZSA9IGxheWVyc1NpemVzW2ldO1xyXG5cclxuICAgICAgdGhpcy5sYXllcnMucHVzaChuZXcgTGF5ZXIoY3VycmVudExheWVyU2l6ZSwgcHJldmlvdXNMYXllclNpemUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY3RpdmF0ZShuZXR3b3JrSW5wdXRzOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5sYXllcnNbMF0uYWN0aXZhdGUobmV0d29ya0lucHV0cyk7ICAgIFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNMYXllck91dHB1dHMgPSB0aGlzLmxheWVyc1tpIC0gMV0ub3V0cHV0cztcclxuXHJcbiAgICAgIHRoaXMubGF5ZXJzW2ldLmFjdGl2YXRlKHByZXZpb3VzTGF5ZXJPdXRwdXRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9wb2dhdGUodGFyZ2V0OiBudW1iZXJbXSwgbGVhcm5pbmdSYXRlOiBudW1iZXIpIHt9XHJcblxyXG4gIHB1YmxpYyBnZXQgb3V0cHV0cygpIHtcclxuICAgIHJldHVybiB0aGlzLm91dHB1dExheWVyLm91dHB1dHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBvdXRwdXRMYXllcigpIHtcclxuICAgIHJldHVybiB0aGlzLmxheWVyc1t0aGlzLmxheWVycy5sZW5ndGggLSAxXTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Network.ts\n");

/***/ }),

/***/ "./src/Neuron.ts":
/*!***********************!*\
  !*** ./src/Neuron.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar squash = {\n    SIGMOID: function (x, isDerivate) {\n        var fx = 1 / (1 + Math.exp(-x));\n        return isDerivate ? fx * (1 - fx) : fx;\n    }\n};\nvar Neuron = /** @class */ (function () {\n    function Neuron(inputsNumber) {\n        this.output = 0;\n        this.delta = 0;\n        this.sum = 0;\n        this.weights = [];\n        this.biasWeight = 0;\n        this.initializeWeights(inputsNumber);\n    }\n    Neuron.prototype.activate = function (inputs) {\n        this.summarize(inputs);\n        this.output = squash.SIGMOID(this.sum);\n    };\n    Neuron.prototype.summarize = function (inputs) {\n        var _this = this;\n        if (this.weights.length !== inputs.length) {\n            throw new Error(\"Число входов в нейрон не соответствует количеству его весов\");\n        }\n        this.sum = 0;\n        inputs.forEach(function (input, index) {\n            _this.sum += input * _this.weights[index];\n        });\n        this.sum += this.biasWeight;\n    };\n    Neuron.prototype.initializeWeights = function (weightsNumber) {\n        this.weights = [];\n        for (var i = 0; i < weightsNumber; i++) {\n            this.weights[i] = this.randomNumber;\n        }\n        this.biasWeight = this.randomNumber;\n    };\n    Object.defineProperty(Neuron.prototype, \"randomNumber\", {\n        get: function () {\n            return -1 + Math.random() * 2;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Neuron;\n}());\nexports.Neuron = Neuron;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTmV1cm9uLnRzPzA4ZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQyxJQUFNLE1BQU0sR0FBRztJQUNaLE9BQU8sRUFBUCxVQUFRLENBQVMsRUFBRSxVQUFvQjtRQUNyQyxJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDRixDQUFDO0FBRUY7SUFRRSxnQkFBWSxZQUFvQjtRQVB6QixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsUUFBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixZQUFPLEdBQWEsRUFBRSxDQUFDO1FBRXRCLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFHN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSx5QkFBUSxHQUFmLFVBQWdCLE1BQWdCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU8sMEJBQVMsR0FBakIsVUFBa0IsTUFBZ0I7UUFBbEMsaUJBY0M7UUFiQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDekMsTUFBTSxJQUFJLEtBQUssQ0FDYiw2REFBNkQsQ0FDOUQsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFFYixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDMUIsS0FBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBRU8sa0NBQWlCLEdBQXpCLFVBQTBCLGFBQXFCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFBWSxnQ0FBWTthQUF4QjtZQUNFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNILGFBQUM7QUFBRCxDQUFDO0FBOUNZLHdCQUFNIiwiZmlsZSI6Ii4vc3JjL05ldXJvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU5ldXJvbiB7XHJcbiAgICBzdW06IG51bWJlcjtcclxuICAgIG91dHB1dDogbnVtYmVyO1xyXG4gIFxyXG4gICAgYWN0aXZhdGUoaW5wdXRzOiBudW1iZXJbXSk6IHZvaWQ7XHJcbiAgfVxyXG5cclxuIGNvbnN0IHNxdWFzaCA9IHtcclxuICAgIFNJR01PSUQoeDogbnVtYmVyLCBpc0Rlcml2YXRlPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICAgIGNvbnN0IGZ4ID0gMSAvICgxICsgTWF0aC5leHAoLXgpKTtcclxuICAgICAgcmV0dXJuIGlzRGVyaXZhdGUgPyBmeCAqICgxIC0gZngpIDogZng7XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgY2xhc3MgTmV1cm9uIGltcGxlbWVudHMgSU5ldXJvbiB7XHJcbiAgICBwdWJsaWMgb3V0cHV0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGRlbHRhOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHN1bTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB3ZWlnaHRzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIHByaXZhdGUgYmlhc1dlaWdodDogbnVtYmVyID0gMDtcclxuICBcclxuICAgIGNvbnN0cnVjdG9yKGlucHV0c051bWJlcjogbnVtYmVyKSB7XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZVdlaWdodHMoaW5wdXRzTnVtYmVyKTtcclxuICAgIH1cclxuICBcclxuICAgIHB1YmxpYyBhY3RpdmF0ZShpbnB1dHM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuc3VtbWFyaXplKGlucHV0cyk7XHJcbiAgICAgIHRoaXMub3V0cHV0ID0gc3F1YXNoLlNJR01PSUQodGhpcy5zdW0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBzdW1tYXJpemUoaW5wdXRzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICBpZiAodGhpcy53ZWlnaHRzLmxlbmd0aCAhPT0gaW5wdXRzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIFwi0KfQuNGB0LvQviDQstGF0L7QtNC+0LIg0LIg0L3QtdC50YDQvtC9INC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0LrQvtC70LjRh9C10YHRgtCy0YMg0LXQs9C+INCy0LXRgdC+0LJcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3VtID0gMDsgICAgICBcclxuXHJcbiAgICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCwgaW5kZXgpID0+IHtcclxuICAgICAgICB0aGlzLnN1bSArPSBpbnB1dCAqIHRoaXMud2VpZ2h0c1tpbmRleF07XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zdW0gKz0gdGhpcy5iaWFzV2VpZ2h0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplV2VpZ2h0cyh3ZWlnaHRzTnVtYmVyOiBudW1iZXIpIHsgICBcclxuICAgICAgdGhpcy53ZWlnaHRzID0gW107XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlaWdodHNOdW1iZXI7IGkrKykge1xyXG4gICAgICAgIHRoaXMud2VpZ2h0c1tpXSA9IHRoaXMucmFuZG9tTnVtYmVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmJpYXNXZWlnaHQgPSB0aGlzLnJhbmRvbU51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCByYW5kb21OdW1iZXIoKSA6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiAtMSArIE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Neuron.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Network_1 = __webpack_require__(/*! ./Network */ \"./src/Network.ts\");\nvar network = new Network_1.Network([2, 3, 1]);\nnetwork.activate([1, 0]);\nconsole.log(network.outputs);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlFQUFvQztBQUVwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV0d29yayB9IGZyb20gXCIuL05ldHdvcmtcIjtcclxuXHJcbmNvbnN0IG5ldHdvcmsgPSBuZXcgTmV0d29yayhbMiwgMywgMV0pO1xyXG5uZXR3b3JrLmFjdGl2YXRlKFsxLCAwXSk7XHJcbmNvbnNvbGUubG9nKG5ldHdvcmsub3V0cHV0cyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });