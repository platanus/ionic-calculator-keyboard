var KEYBOARD_TEMPLATE =
'<div class="calculator-keyboard-wrapper calculator-keyboard-closed">'+
  '<div ng-class={"calculator-operation-bar-open":calculationString} class="calculator-operation-bar">{{calculationString}}</div>'+
  '<div class="calculator-keyboard">'+
    '<div class="calculator-keyboard-row">'+
      '<button data-type="clear" class="calculator-keyboard-clear">C</button>  '+
      '<button data-type="parentheses" class="calculator-keyboard-parentheses">(</button>'+
      '<button data-type="parentheses" class="calculator-keyboard-parentheses">)</button>'+
      '<button data-type="operator" ng-disabled="isAwaitingNumber()" class="calculator-keyboard-operator">÷</button>'+
    '</div>'+
    '<div class="calculator-keyboard-row">'+
      '<button data-type="number">7</button>'+
      '<button data-type="number">8</button>'+
      '<button data-type="number">9</button>'+
      '<button data-type="operator" ng-disabled="isAwaitingNumber()" class="calculator-keyboard-operator">x</button>'+
    '</div>'+
    '<div class="calculator-keyboard-row">'+
      '<button data-type="number">4</button>'+
      '<button data-type="number">5</button>'+
      '<button data-type="number">6</button>'+
      '<button data-type="operator" ng-disabled="isAwaitingNumber()" class="calculator-keyboard-operator">–</button>'+
    '</div>'+
    '<div class="calculator-keyboard-row">'+
      '<button data-type="number">1</button>'+
      '<button data-type="number">2</button>'+
      '<button data-type="number">3</button>'+
      '<button data-type="operator" ng-disabled="isAwaitingNumber()" class="calculator-keyboard-operator">+</button>'+
    '</div>'+
    '<div class="calculator-keyboard-row">'+
      '<button data-type="number" class="calculator-keyboard-zero">0</button>'+
      '<button data-type="dot" class="calculator-keyboard-dot">.</button>'+
      '<button data-type="backspace" class="calculator-keyboard-backspace">'+
        '<img src="data:image/png;base64,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" />'+
      '</button>'+
      '<button data-type="equals" ng-disabled="isAwaitingNumber()" class="calculator-keyboard-equals">=</button>'+
    '</div>'+
  '</div>'+
'</div>';

(function() {
  'use strict';

  angular
    .module("calcKeyboard")
    .service("calcKeyboardSrv", calcKeyboard);

  /*@ngInject*/
  function calcKeyboard($ionicPosition, $rootScope, $timeout, calculatorSrv, $ionicPlatform, $ionicBody, $compile, IONIC_BACK_PRIORITY) {

    var self = {};
    var clearOnPress = false;
    var $ = angular.element;
    var documentBody = $($ionicBody.get());
    var awaitingNumber = true;

    return {
      show: show,
      hide: hide,
      destroy: destroy
    };

    function _build(callback){
      self.scope      = $rootScope.$new();
      self.element    = $compile(KEYBOARD_TEMPLATE)(self.scope);
      self.destroyed  = false;
      self.scope.isAwaitingNumber = isAwaitingNumber;

      documentBody.append(self.element);
      self.element.find('button').on('click', handleButton);
    }

    function show(target){
      if (self.isShown) return;
      if (self.destroyed || !self.element) _build();

      self.input = $(target);

      self.isShown = true;
      self.inputController = self.input.controller('ngModel');

      if(getInputValueNumber()){
        setIsAwaitingNumber(false);
        setCalculationString(evaluateInput());
      }

      // TODO: require animation frame here
      self.element.removeClass('calculator-keyboard-closed');
      documentBody.addClass("calculator-keyboard-open");

      self.backButton = $ionicPlatform.registerBackButtonAction(hide,
        IONIC_BACK_PRIORITY.popup);
    }

    /**
     * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
     *
     * @param {string} text The text to be rendered.
     * @param {string} font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
     *
     * http://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
     */
    function getTextWidth(text, font) {
        var canvas, metrics, context;
        // re-use canvas object for better performance
        canvas = getTextWidth.canvas || (getTextWidth.canvas = window.document.createElement("canvas"));
        context = canvas.getContext("2d");
        context.font = font;
        metrics = context.measureText(text);

        return metrics.width;
    }

    function hide(callback){
      if (!self.isShown) return;

      self.isShown = false;
      self.element.addClass('calculator-keyboard-closed');
      documentBody.removeClass("calculator-keyboard-open");

      clearCalculationString();
      (self.backButton || angular.noop)();

      handleEquals(); // calculate result
      if(callback) callback();
    }

    /**
     * Remove the element from the DOM and destroy it's scope
     */
    function destroy(){
      hide(function(){
        self.element.remove();
        self.scope.$destroy();
      });

      self.destroyed = false;
    }

    /* Input controls */

    /**
     * Set the value of the input the calculator is bound to
     * @param string value
     */
    function setInputTo(value){
      self.inputController.$setViewValue(value);
      self.inputController.$render();
    }

    /**
     * @return string
     */
    function getInputValue(){
      return String(self.inputController.$viewValue || "");
    }

    /**
     * @return number
     */
    function getInputValueNumber(){
      if(getInputValue() === "") return 0;
      return parseInt(getInputValue());
    }

    /**
     * Set the input value to empty string.
     */
    function clearInput(){
      if(isWaitingToClear()) clearOnNextPress(false);
      setInputTo("");
    }

    function evaluateInput(){
      return Math.round(Calculator.evaluateString(getInputValue()));
    }

    /**
     * @return boolean
     */
    function isWaitingToClear(){
      return clearOnPress;
    }

    /**
     * Set whether the input should be cleared when the next button is pressed
     * @param boolean value
     */
    function clearOnNextPress(value){
      clearOnPress = !!value;
    }

    /**
     * Set the variable used to show the calculation history
     * @param string value
     */
    function setCalculationString(value){
      // http://stackoverflow.com/a/18996042/459688
      $timeout(function(){
        self.scope.calculationString = value;
        self.scope.$digest();
      });
    }

    /**
     * @return string
     */
    function getCalculationString(){
      return self.scope.calculationString || "";
    }

    /** Clear the calculation history */
    function clearCalculationString(){
      setCalculationString("");
    }

    /**
     * @param event
     * Event handler for the calculator buttons
     */
    function handleButton(e){
      var button  = e.target.tagName === 'IMG' ? $(e.target).parent() : $(e.target);
      var value   = button.text();
      var result;

      if(isWaitingToClear()) clearInput();

      switch(button.attr('data-type')) {
        case 'number':      handleNumber(value);   break;
        case 'dot':         addToInput(value);     break;
        case 'operator':    handleOperator(value); break;
        case 'backspace':   handleBackspace();     break;
        case 'clear':       clearInput();          break;
        case 'equals':      handleEquals();        break;
        case 'parentheses': addToInput(value);     break;
      }

      setCalculationString(evaluateInput());
    }

    function setIsAwaitingNumber(value){
      awaitingNumber = value;
    }

    function isAwaitingNumber(){
      return awaitingNumber;
    }

    function handleNumber(number){
      setIsAwaitingNumber(false);
      addToInput(number);
    }

    function handleOperator(operator){
      setIsAwaitingNumber(true);
      addToInput(operator);
    }

    /** Delete the last character of the input value */
    function handleBackspace(){
      // if the user deletes the operator he has to be able to tap another one
      if(isAwaitingNumber()) setIsAwaitingNumber(false);

      setInputTo(getInputValue().slice(0,-1));
    }

    /**
     * @param value any character
     * Append a character to the input value
     */
    function addToInput(value){
      setInputTo(getInputValue() + value);
    }

    /** Set the input value to the evaluated string */
    function handleEquals(){
      var result = Calculator.evaluateString(getInputValue());
      setInputTo(Math.round(result));

      if(getInputValue().indexOf("Error") != -1) clearOnNextPress(true);
    }

  }
})();
