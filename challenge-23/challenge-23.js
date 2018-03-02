( function( win, doc ) {
    'use strict';
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */
   var $display = doc.querySelector( '[data-js="display"]' );
   var $buttonsNumbers = doc.querySelectorAll( '[data-js="btn-numbers"]' );
   var $buttonsOperations = doc.querySelectorAll( '[data-js="btn-operators"]' );
   var $buttonCE = doc.querySelector( '[data-js="button-ce"]' );
   var $buttonEqual = doc.querySelector( '[data-js="button-equal"]' );

    function initialize() {
      initEvents();
    }

    function initEvents() {
      Array.prototype.forEach.call( $buttonsNumbers, function( $item, index ) {
        $item.addEventListener( 'click', handleClickNumber, false ); 
      } );
      Array.prototype.forEach.call( $buttonsOperations, function( $item, index ){
        $item.addEventListener( 'click', handleClickOperation, false ); 
      });
      $buttonCE.addEventListener( 'click', handleClickCE, false );
      $buttonEqual.addEventListener( 'click', handleClickEqual, false );
    }
    
    function handleClickNumber(){
      $display.value += this.value;
    }

    function handleClickOperation(){
      $display.value = removeLastItemIfItIsAnOperator( $display.value );
      $display.value += this.value;
    }
    
    function handleClickCE() {
      $display.value = 0;
    }

    function handleClickEqual() {
      $display.value = removeLastItemIfItIsAnOperator( $display.value );
      var allValues = $display.value.match( getRegexOperations() );
      $display.value = allValues.reduce( calculateAllValues );
    }

    function calculateAllValues( acc, curr){
      var firstValue = acc.slice(0, -1);
      var operator = acc.split('').pop();
      var lastValue = removeLastItemIfItIsAnOperator( curr );
      var lastOperator = isLastItemAnOperation( curr ) ? curr.split('').pop() : '';

      return doOperation( operator, firstValue, lastValue ) + lastOperator;
    }

    function doOperation( operator, firstValue, lastValue ) {
      switch( operator ) {
        case '+':
          return Number( firstValue ) + Number( lastValue );
        case '-':
          return Number( firstValue ) - Number( lastValue );
        case 'x':
          return Number( firstValue ) * Number( lastValue );
        case '÷':
          return Number( firstValue ) / Number( lastValue );
      }
    }
    
    function isLastItemAnOperation( number ) {
      var operators = getOperations();
      var lastItem = number.split('').pop();
      return operators.some( function(operator) {
        return operator === lastItem;
      } );
    }

    function getOperations() {
      return Array.prototype.map.call( $buttonsOperations, function( button ) {
        return button.value;
      } );
    }

    function getRegexOperations() {
      return new RegExp( '\\d+[' + getOperations().join('') + ']?','g' );
    }

    function removeLastItemIfItIsAnOperator( string ) {
      if( isLastItemAnOperation( string ) )
        return string.slice( 0, -1 );
      return string;
    }
    
    initialize();
  } )( window, document );
