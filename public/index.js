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
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Neuron_1 = __webpack_require__(/*! ./Neuron */ \"./src/Neuron.ts\");\nvar Layer = /** @class */ (function () {\n    function Layer(neuronsNumber, eachNeuronInputsNumber) {\n        this.neurons = [];\n        for (var i = 0; i < neuronsNumber; i++) {\n            this.neurons[i] = new Neuron_1.Neuron(eachNeuronInputsNumber);\n        }\n    }\n    Layer.prototype.activate = function (previousLayerOutputs) {\n        this.neurons.forEach(function (neuron) {\n            neuron.activate(previousLayerOutputs);\n        });\n    };\n    Layer.prototype.updateDeltas = function (gradientsForNeurons) {\n        this.neurons.forEach(function (neuron, neuronOutputIndex) {\n            neuron.updateDelta(gradientsForNeurons[neuronOutputIndex]);\n        });\n    };\n    Layer.prototype.getGradientsForInputNeurons = function (inputNeuronsNumber) {\n        var gradients = [];\n        for (var i = 0; i < inputNeuronsNumber; i++) {\n            gradients.push(this.getGradientForInputNeuron(i));\n        }\n        return gradients;\n    };\n    /**\n     * Предполагается, что у каждого нейрона порядок весов соответствует порядку нейронов в предыдущем слое.\n     * В перспективе, в неполносвязной модели, каждый нейрон будет иметь\n     * таблицу индексов входящих в него нейронов.\n     */\n    Layer.prototype.getGradientForInputNeuron = function (inputNeuronIndex) {\n        return this.neurons.reduce(function (accum, neuron) {\n            return accum + neuron.getGradientByInputIndex(inputNeuronIndex);\n        }, 0);\n    };\n    Object.defineProperty(Layer.prototype, \"outputs\", {\n        get: function () {\n            return this.neurons.map(function (neuron) { return neuron.output; });\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Layer;\n}());\nexports.Layer = Layer;\n// todo: добавить HiddenLayer, в который перенести некоторые методы из Layer\nvar InputLayer = /** @class */ (function (_super) {\n    __extends(InputLayer, _super);\n    function InputLayer(neuronsNumber) {\n        return _super.call(this, neuronsNumber, 1) || this;\n    }\n    InputLayer.prototype.activate = function (networkInputs) {\n        if (networkInputs.length !== this.neurons.length) {\n            throw new Error(\"Число входов в сеть не соответствует формату обучающих данных\");\n        }\n        for (var i = 0; i < networkInputs.length; i++) {\n            var input = networkInputs[i];\n            this.neurons[i].activate([input]);\n        }\n    };\n    return InputLayer;\n}(Layer));\nexports.InputLayer = InputLayer;\nvar OutputLayer = /** @class */ (function (_super) {\n    __extends(OutputLayer, _super);\n    function OutputLayer() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    OutputLayer.prototype.updateDeltas = function (gradients) {\n        this.neurons.forEach(function (neuron, neuronOutputIndex) {\n            neuron.updateDelta(gradients[neuronOutputIndex]);\n        });\n    };\n    return OutputLayer;\n}(Layer));\nexports.OutputLayer = OutputLayer;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTGF5ZXIudHM/NmM4MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBMkM7QUFZM0M7SUFHSSxlQUNFLGFBQXFCLEVBQ3JCLHNCQUE4QjtRQUp6QixZQUFPLEdBQWMsRUFBRSxDQUFDO1FBTTdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLGVBQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztJQUVNLHdCQUFRLEdBQWYsVUFBZ0Isb0JBQThCO1FBQzVDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFNO1lBQ3pCLE1BQU0sQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSw0QkFBWSxHQUFuQixVQUFvQixtQkFBNkI7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFNLEVBQUUsaUJBQWlCO1lBQzdDLE1BQU0sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLDJDQUEyQixHQUFsQyxVQUFtQyxrQkFBMEI7UUFDM0QsSUFBTSxTQUFTLEdBQWEsRUFBRSxDQUFDO1FBRS9CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBQ0kseUNBQXlCLEdBQWhDLFVBQWlDLGdCQUF3QjtRQUN2RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLE1BQU07WUFDdkMsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUVELHNCQUFXLDBCQUFPO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxNQUFNLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFDSCxZQUFDO0FBQUQsQ0FBQztBQWhEVSxzQkFBSztBQWtEaEIsNEVBQTRFO0FBRTVFO0lBQWdDLDhCQUFLO0lBQ25DLG9CQUFZLGFBQXFCO2VBQy9CLGtCQUFNLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVNLDZCQUFRLEdBQWYsVUFBZ0IsYUFBdUI7UUFDckMsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hELE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUM7U0FDakY7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM3QyxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxDQWYrQixLQUFLLEdBZXBDO0FBZlksZ0NBQVU7QUFpQnZCO0lBQWlDLCtCQUFLO0lBQXRDOztJQU9BLENBQUM7SUFOUSxrQ0FBWSxHQUFuQixVQUFvQixTQUFtQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sRUFBRSxpQkFBaUI7WUFFN0MsTUFBTSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQVBnQyxLQUFLLEdBT3JDO0FBUFksa0NBQVciLCJmaWxlIjoiLi9zcmMvTGF5ZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTmV1cm9uLCBOZXVyb24gfSBmcm9tIFwiLi9OZXVyb25cIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxheWVyIHtcclxuICAgIG5ldXJvbnM6IElOZXVyb25bXTtcclxuICAgIG91dHB1dHM6IG51bWJlcltdO1xyXG4gIFxyXG4gICAgYWN0aXZhdGUoaW5wdXRzOiBudW1iZXJbXSk6IHZvaWQ7XHJcbiAgICB1cGRhdGVEZWx0YXMoZ3JhZGllbnRzRm9yTmV1cm9uczogbnVtYmVyW10pOiB2b2lkO1xyXG4gICAgZ2V0R3JhZGllbnRGb3JJbnB1dE5ldXJvbihpbnB1dE5ldXJvbkluZGV4OiBudW1iZXIpIDogbnVtYmVyO1xyXG4gICAgZ2V0R3JhZGllbnRzRm9ySW5wdXROZXVyb25zKGlucHV0TmV1cm9uc051bWJlcjogbnVtYmVyKSA6IG51bWJlcltdO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXllciBpbXBsZW1lbnRzIElMYXllciB7XHJcbiAgICBwdWJsaWMgbmV1cm9uczogSU5ldXJvbltdID0gW107XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgbmV1cm9uc051bWJlcjogbnVtYmVyLFxyXG4gICAgICBlYWNoTmV1cm9uSW5wdXRzTnVtYmVyOiBudW1iZXJcclxuICAgICkgeyAgICAgICAgXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV1cm9uc051bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy5uZXVyb25zW2ldID0gbmV3IE5ldXJvbihlYWNoTmV1cm9uSW5wdXRzTnVtYmVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGFjdGl2YXRlKHByZXZpb3VzTGF5ZXJPdXRwdXRzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICB0aGlzLm5ldXJvbnMuZm9yRWFjaChuZXVyb24gPT4ge1xyXG4gICAgICAgIG5ldXJvbi5hY3RpdmF0ZShwcmV2aW91c0xheWVyT3V0cHV0cyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVEZWx0YXMoZ3JhZGllbnRzRm9yTmV1cm9uczogbnVtYmVyW10pIDogdm9pZCB7XHJcbiAgICAgIHRoaXMubmV1cm9ucy5mb3JFYWNoKChuZXVyb24sIG5ldXJvbk91dHB1dEluZGV4KSA9PiB7XHJcbiAgICAgICAgbmV1cm9uLnVwZGF0ZURlbHRhKGdyYWRpZW50c0Zvck5ldXJvbnNbbmV1cm9uT3V0cHV0SW5kZXhdKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcHVibGljIGdldEdyYWRpZW50c0ZvcklucHV0TmV1cm9ucyhpbnB1dE5ldXJvbnNOdW1iZXI6IG51bWJlcik6IG51bWJlcltdIHsgICAgXHJcbiAgICAgIGNvbnN0IGdyYWRpZW50czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXROZXVyb25zTnVtYmVyOyBpKyspIHtcclxuICAgICAgICAgIGdyYWRpZW50cy5wdXNoKHRoaXMuZ2V0R3JhZGllbnRGb3JJbnB1dE5ldXJvbihpKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGdyYWRpZW50cztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCf0YDQtdC00L/QvtC70LDQs9Cw0LXRgtGB0Y8sINGH0YLQviDRgyDQutCw0LbQtNC+0LPQviDQvdC10LnRgNC+0L3QsCDQv9C+0YDRj9C00L7QuiDQstC10YHQvtCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0YPQtdGCINC/0L7RgNGP0LTQutGDINC90LXQudGA0L7QvdC+0LIg0LIg0L/RgNC10LTRi9C00YPRidC10Lwg0YHQu9C+0LUuXHJcbiAgICAgKiDQkiDQv9C10YDRgdC/0LXQutGC0LjQstC1LCDQsiDQvdC10L/QvtC70L3QvtGB0LLRj9C30L3QvtC5INC80L7QtNC10LvQuCwg0LrQsNC20LTRi9C5INC90LXQudGA0L7QvSDQsdGD0LTQtdGCINC40LzQtdGC0YwgXHJcbiAgICAgKiDRgtCw0LHQu9C40YbRgyDQuNC90LTQtdC60YHQvtCyINCy0YXQvtC00Y/RidC40YUg0LIg0L3QtdCz0L4g0L3QtdC50YDQvtC90L7Qsi5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEdyYWRpZW50Rm9ySW5wdXROZXVyb24oaW5wdXROZXVyb25JbmRleDogbnVtYmVyKSA6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiB0aGlzLm5ldXJvbnMucmVkdWNlKChhY2N1bSwgbmV1cm9uKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjdW0gKyBuZXVyb24uZ2V0R3JhZGllbnRCeUlucHV0SW5kZXgoaW5wdXROZXVyb25JbmRleCk7XHJcbiAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGdldCBvdXRwdXRzKCk6IG51bWJlcltdIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmV1cm9ucy5tYXAobmV1cm9uID0+IG5ldXJvbi5vdXRwdXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzog0LTQvtCx0LDQstC40YLRjCBIaWRkZW5MYXllciwg0LIg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQvdC10YHRgtC4INC90LXQutC+0YLQvtGA0YvQtSDQvNC10YLQvtC00Ysg0LjQtyBMYXllclxyXG5cclxuICBleHBvcnQgY2xhc3MgSW5wdXRMYXllciBleHRlbmRzIExheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5ldXJvbnNOdW1iZXI6IG51bWJlcikgeyAgICAgICAgXHJcbiAgICAgIHN1cGVyKG5ldXJvbnNOdW1iZXIsIDEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcHVibGljIGFjdGl2YXRlKG5ldHdvcmtJbnB1dHM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgIGlmIChuZXR3b3JrSW5wdXRzLmxlbmd0aCAhPT0gdGhpcy5uZXVyb25zLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCn0LjRgdC70L4g0LLRhdC+0LTQvtCyINCyINGB0LXRgtGMINC90LUg0YHQvtC+0YLQstC10YLRgdGC0LLRg9C10YIg0YTQvtGA0LzQsNGC0YMg0L7QsdGD0YfQsNGO0YnQuNGFINC00LDQvdC90YvRhVwiKVxyXG4gICAgICB9XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV0d29ya0lucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gbmV0d29ya0lucHV0c1tpXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLm5ldXJvbnNbaV0uYWN0aXZhdGUoW2lucHV0XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBPdXRwdXRMYXllciBleHRlbmRzIExheWVyIHtcclxuICAgIHB1YmxpYyB1cGRhdGVEZWx0YXMoZ3JhZGllbnRzOiBudW1iZXJbXSkgOiB2b2lkIHtcclxuICAgICAgdGhpcy5uZXVyb25zLmZvckVhY2goKG5ldXJvbiwgbmV1cm9uT3V0cHV0SW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgbmV1cm9uLnVwZGF0ZURlbHRhKGdyYWRpZW50c1tuZXVyb25PdXRwdXRJbmRleF0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Layer.ts\n");

/***/ }),

/***/ "./src/Network.ts":
/*!************************!*\
  !*** ./src/Network.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Layer_1 = __webpack_require__(/*! ./Layer */ \"./src/Layer.ts\");\nvar Network = /** @class */ (function () {\n    function Network(layersSizes) {\n        this.layers = [];\n        this.layers.push(new Layer_1.InputLayer(layersSizes[0]));\n        for (var i = 1; i < layersSizes.length; i++) {\n            var previousLayerSize = layersSizes[i - 1];\n            var currentLayerSize = layersSizes[i];\n            var isOutputLayer = layersSizes.length - 1 === i;\n            this.layers.push(new (isOutputLayer ? Layer_1.OutputLayer : Layer_1.Layer)(currentLayerSize, previousLayerSize));\n        }\n    }\n    Network.prototype.activate = function (networkInputs) {\n        this.layers[0].activate(networkInputs);\n        for (var i = 1; i < this.layers.length; i++) {\n            var previousLayerOutputs = this.layers[i - 1].outputs;\n            this.layers[i].activate(previousLayerOutputs);\n        }\n    };\n    Network.prototype.propogate = function (targetValues, learningRate) {\n        var _this = this;\n        var errors = targetValues.map(function (targetValue, index) { return targetValue - _this.outputs[index]; });\n        this.outputLayer.updateDeltas(errors);\n        for (var i = this.layers.length - 2; i >= 0; i--) {\n            var currentLayer = this.layers[i];\n            var nextLayer = this.layers[i + 1];\n            var gradientsForNeurons = nextLayer.getGradientsForInputNeurons(currentLayer.neurons.length);\n            currentLayer.updateDeltas(gradientsForNeurons);\n        }\n    };\n    Object.defineProperty(Network.prototype, \"outputs\", {\n        get: function () {\n            return this.outputLayer.outputs;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(Network.prototype, \"outputLayer\", {\n        get: function () {\n            return this.layers[this.layers.length - 1];\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Network;\n}());\nexports.Network = Network;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTmV0d29yay50cz8zOGI4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWlFO0FBT2pFO0lBR0UsaUJBQVksV0FBcUI7UUFGekIsV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGtCQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBTSxpQkFBaUIsR0FBRyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRXhDLElBQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxtQkFBVyxDQUFDLENBQUMsQ0FBQyxhQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDbEc7SUFDSCxDQUFDO0lBRU0sMEJBQVEsR0FBZixVQUFnQixhQUF1QjtRQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFFeEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFTSwyQkFBUyxHQUFoQixVQUFpQixZQUFzQixFQUFFLFlBQW9CO1FBQTdELGlCQVlDO1FBWEMsSUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFdBQVcsRUFBRSxLQUFLLElBQUssa0JBQVcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFDM0YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRXJDLElBQU0sbUJBQW1CLEdBQWEsU0FBUyxDQUFDLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFekcsWUFBWSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELHNCQUFXLDRCQUFPO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLGdDQUFXO2FBQXZCO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7OztPQUFBO0lBQ0gsY0FBQztBQUFELENBQUM7QUEvQ1ksMEJBQU8iLCJmaWxlIjoiLi9zcmMvTmV0d29yay50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElMYXllciwgTGF5ZXIsIElucHV0TGF5ZXIsIE91dHB1dExheWVyIH0gZnJvbSBcIi4vTGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSU5ldHdvcmsge1xyXG4gIGFjdGl2YXRlKGlucHV0czogbnVtYmVyW10pOiB2b2lkO1xyXG4gIHByb3BvZ2F0ZSh0YXJnZXQ6IG51bWJlcltdLCBsZWFybmluZ1JhdGU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOZXR3b3JrIGltcGxlbWVudHMgSU5ldHdvcmsge1xyXG4gIHByaXZhdGUgbGF5ZXJzOiBJTGF5ZXJbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihsYXllcnNTaXplczogbnVtYmVyW10pIHsgXHJcbiAgICB0aGlzLmxheWVycy5wdXNoKG5ldyBJbnB1dExheWVyKGxheWVyc1NpemVzWzBdKSlcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxheWVyc1NpemVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzTGF5ZXJTaXplID0gbGF5ZXJzU2l6ZXNbaSAtIDFdO1xyXG4gICAgICBjb25zdCBjdXJyZW50TGF5ZXJTaXplID0gbGF5ZXJzU2l6ZXNbaV07XHJcblxyXG4gICAgICBjb25zdCBpc091dHB1dExheWVyID0gbGF5ZXJzU2l6ZXMubGVuZ3RoIC0gMSA9PT0gaTtcclxuXHJcbiAgICAgIHRoaXMubGF5ZXJzLnB1c2gobmV3IChpc091dHB1dExheWVyID8gT3V0cHV0TGF5ZXIgOiBMYXllcikoY3VycmVudExheWVyU2l6ZSwgcHJldmlvdXNMYXllclNpemUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY3RpdmF0ZShuZXR3b3JrSW5wdXRzOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5sYXllcnNbMF0uYWN0aXZhdGUobmV0d29ya0lucHV0cyk7ICAgIFxyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNMYXllck91dHB1dHMgPSB0aGlzLmxheWVyc1tpIC0gMV0ub3V0cHV0cztcclxuXHJcbiAgICAgIHRoaXMubGF5ZXJzW2ldLmFjdGl2YXRlKHByZXZpb3VzTGF5ZXJPdXRwdXRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBwcm9wb2dhdGUodGFyZ2V0VmFsdWVzOiBudW1iZXJbXSwgbGVhcm5pbmdSYXRlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHRhcmdldFZhbHVlcy5tYXAoKHRhcmdldFZhbHVlLCBpbmRleCkgPT4gdGFyZ2V0VmFsdWUgLSB0aGlzLm91dHB1dHNbaW5kZXhdKTtcclxuICAgIHRoaXMub3V0cHV0TGF5ZXIudXBkYXRlRGVsdGFzKGVycm9ycyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHRoaXMubGF5ZXJzLmxlbmd0aCAtIDI7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRMYXllciA9IHRoaXMubGF5ZXJzW2ldO1xyXG4gICAgICBjb25zdCBuZXh0TGF5ZXIgPSB0aGlzLmxheWVyc1tpICsgMV07XHJcblxyXG4gICAgICBjb25zdCBncmFkaWVudHNGb3JOZXVyb25zOiBudW1iZXJbXSA9IG5leHRMYXllci5nZXRHcmFkaWVudHNGb3JJbnB1dE5ldXJvbnMoY3VycmVudExheWVyLm5ldXJvbnMubGVuZ3RoKTsgIFxyXG4gICAgXHJcbiAgICAgIGN1cnJlbnRMYXllci51cGRhdGVEZWx0YXMoZ3JhZGllbnRzRm9yTmV1cm9ucyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG91dHB1dHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vdXRwdXRMYXllci5vdXRwdXRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgb3V0cHV0TGF5ZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5sYXllcnNbdGhpcy5sYXllcnMubGVuZ3RoIC0gMV07XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Network.ts\n");

/***/ }),

/***/ "./src/Neuron.ts":
/*!***********************!*\
  !*** ./src/Neuron.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar squash = {\n    SIGMOID: function (x, isDerivate) {\n        var fx = 1 / (1 + Math.exp(-x));\n        return isDerivate ? fx * (1 - fx) : fx;\n    }\n};\nvar Neuron = /** @class */ (function () {\n    function Neuron(inputsNumber) {\n        // todo: возможно стоит переделать часть свойств в get, чтобы в них нельзя было писать\n        this.output = 0;\n        this.delta = 0;\n        this.sum = 0;\n        this.weights = [];\n        this.biasWeight = 0;\n        this.initializeWeights(inputsNumber);\n    }\n    Neuron.prototype.activate = function (inputs) {\n        this.summarize(inputs);\n        this.output = squash.SIGMOID(this.sum);\n    };\n    Neuron.prototype.getGradientByInputIndex = function (index) {\n        if (index >= this.weights.length) {\n            throw new Error(\"Попытка обратиться к несуществующей связи\");\n        }\n        return this.delta * this.weights[index];\n    };\n    Neuron.prototype.updateDelta = function (gradient) {\n        this.delta = squash.SIGMOID(this.sum, true) * gradient;\n    };\n    Neuron.prototype.summarize = function (inputs) {\n        var _this = this;\n        if (this.weights.length !== inputs.length) {\n            throw new Error(\"Число входов в нейрон не соответствует количеству его весов\");\n        }\n        this.sum = inputs.reduce(function (accum, input, index) {\n            return accum + input * _this.weights[index];\n        }, this.biasWeight);\n    };\n    Neuron.prototype.initializeWeights = function (weightsNumber) {\n        this.weights = [];\n        for (var i = 0; i < weightsNumber; i++) {\n            this.weights[i] = this.randomNumber;\n        }\n        this.biasWeight = this.randomNumber;\n    };\n    Object.defineProperty(Neuron.prototype, \"randomNumber\", {\n        get: function () {\n            return -1 + Math.random() * 2;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    return Neuron;\n}());\nexports.Neuron = Neuron;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvTmV1cm9uLnRzPzA4ZTgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFVQyxJQUFNLE1BQU0sR0FBRztJQUNaLE9BQU8sRUFBUCxVQUFRLENBQVMsRUFBRSxVQUFvQjtRQUNyQyxJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDRixDQUFDO0FBRUY7SUFTRSxnQkFBWSxZQUFvQjtRQVJoQyxzRkFBc0Y7UUFDL0UsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLFFBQUcsR0FBVyxDQUFDLENBQUM7UUFDaEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUV0QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRzdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0seUJBQVEsR0FBZixVQUFnQixNQUFnQjtRQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHdDQUF1QixHQUE5QixVQUErQixLQUFhO1FBQzFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2hDLE1BQU0sSUFBSSxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQztTQUM5RDtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixRQUFnQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDekQsQ0FBQztJQUVPLDBCQUFTLEdBQWpCLFVBQWtCLE1BQWdCO1FBQWxDLGlCQVVDO1FBVEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pDLE1BQU0sSUFBSSxLQUFLLENBQ2IsNkRBQTZELENBQzlELENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztZQUMzQyxPQUFPLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNyQixDQUFDO0lBRU8sa0NBQWlCLEdBQXpCLFVBQTBCLGFBQXFCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxzQkFBWSxnQ0FBWTthQUF4QjtZQUNFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUNILGFBQUM7QUFBRCxDQUFDO0FBdkRZLHdCQUFNIiwiZmlsZSI6Ii4vc3JjL05ldXJvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSU5ldXJvbiB7XHJcbiAgICBzdW06IG51bWJlcjtcclxuICAgIG91dHB1dDogbnVtYmVyO1xyXG4gICAgZGVsdGE6IG51bWJlcjtcclxuICBcclxuICAgIGFjdGl2YXRlKGlucHV0czogbnVtYmVyW10pOiB2b2lkO1xyXG4gICAgdXBkYXRlRGVsdGEoZ3JhZGllbnQ6IG51bWJlcik6IHZvaWQ7XHJcbiAgICBnZXRHcmFkaWVudEJ5SW5wdXRJbmRleChpbmRleDogbnVtYmVyKSA6IG51bWJlcjtcclxuICB9XHJcblxyXG4gY29uc3Qgc3F1YXNoID0ge1xyXG4gICAgU0lHTU9JRCh4OiBudW1iZXIsIGlzRGVyaXZhdGU/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgICAgY29uc3QgZnggPSAxIC8gKDEgKyBNYXRoLmV4cCgteCkpO1xyXG4gICAgICByZXR1cm4gaXNEZXJpdmF0ZSA/IGZ4ICogKDEgLSBmeCkgOiBmeDtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGV4cG9ydCBjbGFzcyBOZXVyb24gaW1wbGVtZW50cyBJTmV1cm9uIHtcclxuICAgIC8vIHRvZG86INCy0L7Qt9C80L7QttC90L4g0YHRgtC+0LjRgiDQv9C10YDQtdC00LXQu9Cw0YLRjCDRh9Cw0YHRgtGMINGB0LLQvtC50YHRgtCyINCyIGdldCwg0YfRgtC+0LHRiyDQsiDQvdC40YUg0L3QtdC70YzQt9GPINCx0YvQu9C+INC/0LjRgdCw0YLRjFxyXG4gICAgcHVibGljIG91dHB1dDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBkZWx0YTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzdW06IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgd2VpZ2h0czogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIGJpYXNXZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgXHJcbiAgICBjb25zdHJ1Y3RvcihpbnB1dHNOdW1iZXI6IG51bWJlcikge1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVXZWlnaHRzKGlucHV0c051bWJlcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwdWJsaWMgYWN0aXZhdGUoaW5wdXRzOiBudW1iZXJbXSk6IHZvaWQge1xyXG4gICAgICB0aGlzLnN1bW1hcml6ZShpbnB1dHMpO1xyXG4gICAgICB0aGlzLm91dHB1dCA9IHNxdWFzaC5TSUdNT0lEKHRoaXMuc3VtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0R3JhZGllbnRCeUlucHV0SW5kZXgoaW5kZXg6IG51bWJlcikgOiBudW1iZXIge1xyXG4gICAgICBpZiAoaW5kZXggPj0gdGhpcy53ZWlnaHRzLmxlbmd0aCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcItCf0L7Qv9GL0YLQutCwINC+0LHRgNCw0YLQuNGC0YzRgdGPINC6INC90LXRgdGD0YnQtdGB0YLQstGD0Y7RidC10Lkg0YHQstGP0LfQuFwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZGVsdGEgKiB0aGlzLndlaWdodHNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVEZWx0YShncmFkaWVudDogbnVtYmVyKSA6IHZvaWQge1xyXG4gICAgICB0aGlzLmRlbHRhID0gc3F1YXNoLlNJR01PSUQodGhpcy5zdW0sIHRydWUpICogZ3JhZGllbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBwcml2YXRlIHN1bW1hcml6ZShpbnB1dHM6IG51bWJlcltdKTogdm9pZCB7XHJcbiAgICAgIGlmICh0aGlzLndlaWdodHMubGVuZ3RoICE9PSBpbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgXCLQp9C40YHQu9C+INCy0YXQvtC00L7QsiDQsiDQvdC10LnRgNC+0L0g0L3QtSDRgdC+0L7RgtCy0LXRgtGB0YLQstGD0LXRgiDQutC+0LvQuNGH0LXRgdGC0LLRgyDQtdCz0L4g0LLQtdGB0L7QslwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zdW0gPSBpbnB1dHMucmVkdWNlKChhY2N1bSwgaW5wdXQsIGluZGV4KTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gYWNjdW0gKyBpbnB1dCAqIHRoaXMud2VpZ2h0c1tpbmRleF07XHJcbiAgICAgIH0sIHRoaXMuYmlhc1dlaWdodClcclxuICAgIH1cclxuICBcclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVdlaWdodHMod2VpZ2h0c051bWJlcjogbnVtYmVyKSB7ICAgXHJcbiAgICAgIHRoaXMud2VpZ2h0cyA9IFtdO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWlnaHRzTnVtYmVyOyBpKyspIHtcclxuICAgICAgICB0aGlzLndlaWdodHNbaV0gPSB0aGlzLnJhbmRvbU51bWJlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5iaWFzV2VpZ2h0ID0gdGhpcy5yYW5kb21OdW1iZXI7XHJcbiAgICB9ICAgIFxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHJhbmRvbU51bWJlcigpIDogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIC0xICsgTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Neuron.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Network_1 = __webpack_require__(/*! ./Network */ \"./src/Network.ts\");\nvar network = new Network_1.Network([2, 3, 1]);\nnetwork.activate([1, 0]);\nconsole.log(network.outputs);\nnetwork.propogate([1], .1);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlFQUFvQztBQUVwQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTdCLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ldHdvcmsgfSBmcm9tIFwiLi9OZXR3b3JrXCI7XHJcblxyXG5jb25zdCBuZXR3b3JrID0gbmV3IE5ldHdvcmsoWzIsIDMsIDFdKTtcclxubmV0d29yay5hY3RpdmF0ZShbMSwgMF0pO1xyXG5cclxuY29uc29sZS5sb2cobmV0d29yay5vdXRwdXRzKTtcclxuXHJcbm5ldHdvcmsucHJvcG9nYXRlKFsxXSwgLjEpO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ });