let preTip = 200;

function calculateTip(preTip) {
  return preTip * 0.2;
}
let tip = calculateTip(preTip);
let tipRnd = tip.toFixed(2)
console.log("The amount to tip is $" + tipRnd + ".");

function getBillTotal(tip, preTip) {
  return (tip + preTip);
}
let totalBill = getBillTotal(tip, preTip);
let totalBillRnd = totalBill.toFixed(2)
console.log("The total bill, after tip, is $" + totalBillRnd + ".");
