describe('Calculator Keyboard', function(){
  var calculatorKeyboard, templateCache, compile, rootScope, ionicBody, input, body;

  beforeEach(module('ionic'));
  beforeEach(module('app'));

  beforeEach(inject(function(calcKeyboardSrv, $templateCache, $compile, $rootScope, $ionicBody) {
    calculatorKeyboard = calcKeyboardSrv;
    compile = $compile;
    rootScope = $rootScope;
    ionicBody = $ionicBody;

    var inputTemplate = "<input type='text' ng-model='amount' ng-focus='showKeyboard($event)' />";
    scope = rootScope.$new();

    scope.showKeyboard = showKeyboard;

    input = compile($(inputTemplate))(scope);
    input.triggerHandler('focus');
    body = $(ionicBody.get());

    function showKeyboard(event){
      calculatorKeyboard.show(event.target);
    }
  }));

  it('Should add the calculator-keyboard-open class to the body', function() {
    expect(body.hasClass("calculator-keyboard-open")).toBe(true);
  });

  it('Should append the the keyboard to the body', function() {
    expect(body.find(".calculator-keyboard-wrapper").length > 0).toBe(true);
  });
});
