const historico=[];
function myFunction(id) {
    document.calc.result.value+=id;
  }
  function clearScreen() {
    document.calc.result.value="";
  }
  function calculate() {
    try {
      var input = eval(document.calc.result.value);
      historico.push(input)
      console.log(historico)
      document.calc.historico.value=historico;
      document.calc.result.value=input;
    } catch(err){
        document.calc.result.value="Error";
      }
  }
