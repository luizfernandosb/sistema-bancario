//selecionando elementos
const localBalance = JSON.parse(localStorage.getItem("balance"));
let balanceVal = document.querySelector("#balance");
let newBalance;

const extractList = document.querySelector("#extract");
let extract = [];

let newExtract = [];


function showExtract() {
  if (extract === null || extract === undefined) {
    const empety = document.createElement("p");
    empety.textContent = "Nenhuma operação feita";
    extractList.appendChild(empety);
  } else {
    const getExtract = JSON.parse(localStorage.getItem("extract"));
    getExtract.map((ops) => {
      const op = document.createElement("p");
      const val = document.createElement("span");
      op.textContent = ops.op + ops.val;
      extractList.appendChild(op);
    });
  }
}

showExtract();

function showBalance() {
  //const name = document.querySelector("#name");
  //const getName = prompt("Digite seu nome");
  //name.innerText = getName;

    if (
      localBalance === 0 ||
      localBalance === null ||
      localBalance === undefined
    ) {
      balanceVal.innerText = 0;
    } else {
      balanceVal.innerText = localBalance;
    }
  
}

showBalance();

//função sacar
function withdraw() {
  const withdrawVal = prompt("Qual valor você deseja sacar?");
  if (
    localBalance === 0 ||
    localBalance === null ||
    localBalance === undefined
  ) {
    alert("Saldo insuficiente.");
  } else {
    const localBalance = JSON.parse(localStorage.getItem("balance"));
    newBalance = localBalance - withdrawVal;
    balanceVal.innerText = newBalance;
    localStorage.setItem("balance", JSON.stringify(newBalance));

    const op = document.createElement("p");
    const val = document.createElement("span");
    op.textContent = "Saque: -R$ " + withdrawVal;
    extractList.appendChild(op);

    const newOp = {
      op: "Saque: -R$ ",
      val: withdrawVal,
    };

    extract.push(newOp);

    const extractJSON = JSON.stringify(extract);
    localStorage.setItem("extract", extractJSON);

    const getExtract = JSON.parse(localStorage.getItem("extract"));
    console.log(getExtract);
  }
}

//função depositar
function deposit() {
  const depositVal = prompt("Qual valor você deseja depositar?");
  const localBalance = JSON.parse(localStorage.getItem("balance"));
  newBalance = localBalance + Number(depositVal);
  balanceVal.innerText = newBalance;
  localStorage.setItem("balance", JSON.stringify(newBalance));

  const op = document.createElement("p");
  const val = document.createElement("span");
  op.textContent = "Depósito: +R$ " + depositVal;
  extractList.appendChild(op);

  const newOp = {
    op: "Depósito: -R$: ",
    val: depositVal,
  };

  extract.push(newOp);

  const extractJSON = JSON.stringify(extract);
  localStorage.setItem("extract", extractJSON);

  const getExtract = JSON.parse(localStorage.getItem("extract"));
  console.log(getExtract);
}
