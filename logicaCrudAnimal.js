let QtdGalinhas = 0;
let QtdGalos = 0;
let QtdColetados = 0;
let QtdTrincados = 0;
let QtdIncubaveis = 0;
let QtdSujosNinho = 0;
let QtdSujosCama = 0;
let QtdDeformados = 0;
let QtdDuasGemas = 0;
let QtdCascaFina = 0;
let QtdManchados = 0;
let QtdPequenos = 0;
let QtdMercado = 0;
let QtdLavados = 0;
let QtdEliminados = 0;
let QtdBons = 0;
let ValorUnitario = 0
let ValorIncubaveis = 0.0;
let porcentGalinhas = 0;
let porcentGalos = 0;
let porcentColetados = 0;
let porcentTrincados = 0;
let porcentIncubaveis = 0;
let porcentSujosNinho = 0;
let porcentSujosCama = 0;
let porcentDeformados = 0;
let porcentDuasGemas = 0;
let porcentCascaFina = 0;
let porcentManchados = 0;
let porcentPequenos = 0;
let porcentMercado = 0;
let porcentLavados = 0;
let porcentEliminados = 0;
let porcentBons = 0;


var exibColetados = document.querySelector("#outColetados")
    exibColetados.innerHTML= QtdColetados

var exibGalinhas = document.querySelector("#outGalinhas")
    exibGalinhas.innerHTML= QtdGalinhas

var exibGalos = document.querySelector("#outGalos")
    exibGalos.innerHTML= QtdGalos

var exibTrincados = document.querySelector("#outTrincados")
    exibTrincados.innerHTML= QtdTrincados

var exibIncubaveis = document.querySelector("#outIncubaveis")
    exibIncubaveis.innerHTML= QtdIncubaveis

var exibIncubaveis2 = document.querySelector("#outIncubaveis2")
    exibIncubaveis2.innerHTML= QtdIncubaveis

var exibSujosNinho = document.querySelector("#outSujosNinho")
    exibSujosNinho.innerHTML= QtdIncubaveis

var exibSujosCama = document.querySelector("#outSujosCama")
    exibSujosCama.innerHTML= QtdSujosCama

var exibDeformados = document.querySelector("#outDeformados")
    exibDeformados.innerHTML= QtdDeformados

var exibDuasGemas = document.querySelector("#outDuasGemas")
    exibDuasGemas.innerHTML= QtdDuasGemas

var exibCascaFina = document.querySelector("#outCascaFina")
    exibCascaFina.innerHTML= QtdCascaFina

var exibManchados = document.querySelector("#outManchados")
    exibManchados.innerHTML= QtdManchados

var exibPequenos = document.querySelector("#outPequenos")
    exibPequenos.innerHTML= QtdPequenos

var exibMercado = document.querySelector("#outMercado")
    exibMercado.innerHTML= QtdMercado

var exibEliminados = document.querySelector("#outEliminados")
    exibEliminados.innerHTML= QtdEliminados

var exibLavados = document.querySelector("#outLavados")
    exibLavados.innerHTML= QtdLavados

var exibBons = document.querySelector("#outBons")
    exibBons.innerHTML= QtdBons

var exibValorIncubaveis = document.querySelector("#outValorIncubaveis")
    exibValorIncubaveis.innerHTML= ValorIncubaveis

var exibPorcentGalinhas = document.querySelector("#outPorcentGalinhas")
    exibPorcentGalinhas.innerHTML= porcentGalinhas.toFixed(2) + "%" 

var exibPorcentGalos = document.querySelector("#outPorcentGalos")
    exibPorcentGalos.innerHTML= porcentGalos.toFixed(2)+ "%" 

var exibPorcentTrincados = document.querySelector("#outPorcentTrincados")
    exibPorcentTrincados.innerHTML= porcentTrincados.toFixed(2)+ "%" 

var exibPorcentIncubaveis = document.querySelector("#outPorcentIncubaveis")
    exibPorcentIncubaveis.innerHTML= porcentIncubaveis.toFixed(2)+ "%" 

 var exibPorcentSujosNinho = document.querySelector("#outPorcentSujosNinho")
     exibPorcentSujosNinho.innerHTML= porcentSujosNinho.toFixed(2)+ "%" 

var exibPorcentSujosCama = document.querySelector("#outPorcentSujosCama")
    exibPorcentSujosCama.innerHTML = porcentSujosCama.toFixed(2) + "%"

var exibPorcentDeformados = document.querySelector("#outPorcentDeformados")
    exibPorcentDeformados.innerHTML = porcentDeformados.toFixed(2) + "%"

var exibPorcentDuasGemas = document.querySelector("#outPorcentDuasGemas")
    exibPorcentDuasGemas.innerHTML = porcentDuasGemas.toFixed(2) + "%"

var exibPorcentCascaFina = document.querySelector("#outPorcentCascaFina")
    exibPorcentCascaFina.innerHTML = porcentCascaFina.toFixed(2) + "%" 
    
var exibPorcentManchados = document.querySelector("#outPorcentManchados")
    exibPorcentManchados.innerHTML = porcentManchados.toFixed(2) + "%"

var exibPorcentPequenos = document.querySelector("#outPorcentPequenos")
    exibPorcentPequenos.innerHTML = porcentPequenos.toFixed(2) + "%"

var exibPorcentLavados = document.querySelector("#outPorcentLavados")
    exibPorcentLavados.innerHTML = porcentLavados.toFixed(2) + "%"

var exibPorcentMercado = document.querySelector("#outPorcentMercado")
    exibPorcentMercado.innerHTML = porcentMercado.toFixed(2) + "%"

var exibPorcentColetados = document.querySelector("#outPorcentColetados")
    exibPorcentColetados.innerHTML = porcentColetados.toFixed(2) + "%"

var exibPorcentBons = document.querySelector("#outPorcentBons")
    exibPorcentBons.innerHTML = porcentBons.toFixed(2) + "%"

var exibPorcentEliminados = document.querySelector("#outPorcentEliminados")
    exibPorcentEliminados.innerHTML = porcentEliminados.toFixed(2) + "%"
   


function calcAll(){
    QtdColetados = QtdIncubaveis + QtdSujosNinho + QtdSujosCama + QtdDeformados + QtdDuasGemas + QtdCascaFina + QtdManchados + QtdPequenos + QtdTrincados
    exibColetados.innerHTML= QtdColetados
}

function calcMercados(){
    QtdMercado = QtdDeformados + QtdDuasGemas + QtdCascaFina + QtdManchados + QtdPequenos
    exibMercado.innerHTML= QtdMercado  
    porcentMercado = QtdMercado / QtdColetados *100
 
}

function calcEliminados(){
    QtdEliminados = QtdTrincados;
    exibEliminados.innerHTML= QtdEliminados
}

function calcLavados(){
    QtdLavados = QtdSujosCama + QtdSujosNinho;
    exibLavados.innerHTML= QtdLavados
}

function calcBons(){
    QtdBons = QtdIncubaveis + QtdSujosNinho + QtdSujosCama + QtdDeformados + QtdDuasGemas + QtdCascaFina + QtdManchados + QtdPequenos
    exibBons.innerHTML= QtdBons
}

function calcValorIncubaveis(){
    ValorIncubaveis = (QtdBons-QtdMercado)* parseFloat(document.getElementById("inValorUnitario").value)
    exibValorIncubaveis.innerHTML= ValorIncubaveis.toFixed(2)
    
}

function calcValorMercado(){
    ValorMercado = QtdMercado*ValorUnitario
}

 function addGalinhas(){
   if((parseInt(document.getElementById("galinhas").value) > 0 )){
      QtdGalinhas = QtdGalinhas + parseInt(document.getElementById("galinhas").value)
    exibGalinhas.innerHTML=QtdGalinhas
    calcPorcentGalinhas()
    calcPorcentGalos()
   }}

 function subGalinhas(){
    if((parseInt(document.getElementById("galinhas").value) > 0 )){
   QtdGalinhas = QtdGalinhas - parseInt(document.getElementById("galinhas").value)
   exibGalinhas.innerHTML=QtdGalinhas
   calcPorcentGalinhas()
   calcPorcentGalos()
    }}

 function addGalos(){
    if((parseInt(document.getElementById("galos").value) > 0 )){
   QtdGalos = QtdGalos + parseInt(document.getElementById("galos").value)
   exibGalos.innerHTML=QtdGalos
   calcPorcentGalinhas()
   calcPorcentGalos()
    }}

function subGalos(){
    if((parseInt(document.getElementById("galos").value) > 0 )){
   QtdGalos = QtdGalos - parseInt(document.getElementById("galos").value)
   exibGalos.innerHTML=QtdGalos
   calcPorcentGalinhas()
   calcPorcentGalos()
}}

function addTrincados(){
    if((parseInt(document.getElementById("Trincados").value) > 0 )){
   QtdTrincados = QtdTrincados + parseInt(document.getElementById("Trincados").value)
   exibTrincados.innerHTML= QtdTrincados
   calcAll()
   calcEliminados()
   calcPorcentOvos()
}}

function subTrincados(){
    if((parseInt(document.getElementById("Trincados").value) > 0 )){
   QtdTrincados = QtdTrincados - parseInt(document.getElementById("Trincados").value)
   exibTrincados.innerHTML= QtdTrincados
   calcAll()
   calcEliminados()
   calcPorcentOvos()
}}

function addIncubaveis(){
    if((parseInt(document.getElementById("incubaveis").value) > 0 )){
   QtdIncubaveis = QtdIncubaveis + parseInt(document.getElementById("incubaveis").value)
   exibIncubaveis.innerHTML= QtdIncubaveis
   exibIncubaveis2.innerHTML= QtdIncubaveis
   calcAll()
   calcBons()
   calcValorIncubaveis()
   calcPorcentOvos()
   
}}

function subIncubaveis(){
    if((parseInt(document.getElementById("incubaveis").value) > 0 )){
   QtdIncubaveis = QtdIncubaveis - parseInt(document.getElementById("incubaveis").value)
   exibIncubaveis.innerHTML= QtdIncubaveis
   exibIncubaveis2.innerHTML= QtdIncubaveis
   calcAll()
   calcBons()
   calcValorIncubaveis()
   calcPorcentOvos()
}}

function addSujosNinho(){
    if((parseInt(document.getElementById("SujosNinho").value) > 0 )){
   QtdSujosNinho = QtdSujosNinho + parseInt(document.getElementById("SujosNinho").value)
   exibSujosNinho.innerHTML= QtdSujosNinho
   calcAll()
   calcLavados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subSujosNinho(){
    if((parseInt(document.getElementById("SujosNinho").value) > 0 )){
   QtdSujosNinho = QtdSujosNinho - parseInt(document.getElementById("SujosNinho").value)
   exibSujosNinho.innerHTML= QtdSujosNinho
   calcAll()
   calcLavados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function addSujosCama(){
    if((parseInt(document.getElementById("SujosCama").value) > 0 )){
   QtdSujosCama = QtdSujosCama + parseInt(document.getElementById("SujosCama").value)
   exibSujosCama.innerHTML= QtdSujosCama
   calcAll()
   calcLavados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subSujosCama(){
    if((parseInt(document.getElementById("SujosCama").value) > 0 )){
   QtdSujosCama = QtdSujosCama - parseInt(document.getElementById("SujosCama").value)
   exibSujosCama.innerHTML= QtdSujosCama
   calcAll()
   calcLavados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function addDeformados(){
    if((parseInt(document.getElementById("Deformados").value) > 0 )){
   QtdDeformados = QtdDeformados + parseInt(document.getElementById("Deformados").value)
   exibDeformados.innerHTML= QtdDeformados
   calcAll()
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subDeformados(){
    if((parseInt(document.getElementById("Deformados").value) > 0 )){
   QtdDeformados = QtdDeformados - parseInt(document.getElementById("Deformados").value)
   exibDeformados.innerHTML= QtdDeformados
   calcAll()
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function addDuasGemas(){
    if((parseInt(document.getElementById("DuasGemas").value) > 0 )){
   QtdDuasGemas = QtdDuasGemas + parseInt(document.getElementById("DuasGemas").value)
   exibDuasGemas.innerHTML= QtdDuasGemas
   calcAll()
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subDuasGemas(){
    if((parseInt(document.getElementById("DuasGemas").value) > 0 )){
   QtdDuasGemas = QtdDuasGemas - parseInt(document.getElementById("DuasGemas").value)
   exibDuasGemas.innerHTML= QtdDuasGemas
   calcAll()
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function addCascaFina(){
    if((parseInt(document.getElementById("CascaFina").value) > 0 )){
   QtdCascaFina = QtdCascaFina + parseInt(document.getElementById("CascaFina").value)
   exibCascaFina.innerHTML= QtdCascaFina
   calcAll()
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subCascaFina(){
    if((parseInt(document.getElementById("CascaFina").value) > 0 )){
   QtdCascaFina = QtdCascaFina - parseInt(document.getElementById("CascaFina").value)
   exibCascaFina.innerHTML= QtdCascaFina
   calcAll()
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function addManchados(){
    if((parseInt(document.getElementById("Manchados").value) > 0 )){
   QtdManchados = QtdManchados + parseInt(document.getElementById("Manchados").value)
   exibManchados.innerHTML= QtdManchados
   calcAll();
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subManchados(){
    if((parseInt(document.getElementById("Manchados").value) > 0 )){
   QtdManchados = QtdManchados - parseInt(document.getElementById("Manchados").value)
   exibManchados.innerHTML= QtdManchados
   calcAll();
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function addPequenos(){
    if((parseInt(document.getElementById("Pequenos").value) > 0 )){
   QtdPequenos = QtdPequenos + parseInt(document.getElementById("Pequenos").value)
   exibPequenos.innerHTML= QtdPequenos
   calcAll();
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function subPequenos(){
    if((parseInt(document.getElementById("Pequenos").value) > 0 )){
   QtdPequenos = QtdPequenos - parseInt(document.getElementById("Pequenos").value)
   exibPequenos.innerHTML= QtdPequenos
   calcAll();
   calcMercados()
   calcBons()
   calcPorcentOvos()
   calcValorIncubaveis()
}}

function atualizarValor(){
    calcValorIncubaveis()
}

function calcPorcentGalinhas(){
    porcentGalinhas = QtdGalinhas / (QtdGalinhas+QtdGalos)*100
    exibPorcentGalinhas.innerHTML = porcentGalinhas.toFixed(2) + "%"
}

function calcPorcentGalos(){
    porcentGalos = QtdGalos / (QtdGalinhas+QtdGalos)*100
    exibPorcentGalos.innerHTML = porcentGalos.toFixed(2) + "%"
}

function calcPorcentOvos(){
    porcentTrincados = QtdTrincados / QtdColetados *100
    exibPorcentTrincados.innerHTML = porcentTrincados.toFixed(2) + "%"
    porcentIncubaveis = QtdIncubaveis / QtdColetados *100
    exibPorcentIncubaveis.innerHTML = porcentIncubaveis.toFixed(2) + "%"
    porcentSujosNinho = QtdSujosNinho / QtdColetados *100
    exibPorcentSujosNinho.innerHTML = porcentSujosNinho.toFixed(2) + "%"
    porcentSujosCama = QtdSujosCama / QtdColetados * 100
    exibPorcentSujosCama.innerHTML = porcentSujosCama.toFixed(2) + "%"
    porcentDeformados = QtdDeformados / QtdColetados * 100
    exibPorcentDeformados.innerHTML = porcentDeformados.toFixed(2) + "%"
    porcentDuasGemas = QtdDuasGemas / QtdColetados * 100
    exibPorcentDuasGemas.innerHTML = porcentDuasGemas.toFixed(2) + "%"
    porcentCascaFina = QtdCascaFina / QtdColetados * 100
    exibPorcentCascaFina.innerHTML = porcentCascaFina.toFixed(2) + "%"
    porcentManchados = QtdManchados / QtdColetados * 100
    exibPorcentManchados.innerHTML = porcentManchados.toFixed(2) + "%"
    porcentPequenos = QtdPequenos / QtdColetados * 100
    exibPorcentPequenos.innerHTML = porcentPequenos.toFixed(2) + "%"
    porcentLavados = QtdLavados / QtdColetados * 100
    exibPorcentLavados.innerHTML = porcentLavados.toFixed(2) + "%"
    porcentMercado = QtdMercado / QtdColetados * 100
    exibPorcentMercado.innerHTML = porcentMercado.toFixed(2) + "%"
    porcentColetados =  QtdColetados / QtdColetados *100 
    exibPorcentColetados.innerHTML = porcentColetados.toFixed(2) + "%"
    porcentBons = QtdBons / QtdColetados * 100
    exibPorcentBons.innerHTML = porcentBons.toFixed(2) + "%"
    porcentEliminados = QtdEliminados / QtdColetados * 100
    exibPorcentEliminados.innerHTML = porcentEliminados.toFixed(2) + "%"

}

