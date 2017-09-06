var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var telusSalesBC = 0
var telusSalesSK = 0
var bombardierSales = 0

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateTelusSales(company) {
  var compSales = 0
  for (var index in company.sales){
    compSales += company.sales[index]
  }
  return compSales
}

function calculateTelusSales2(company) {
  var compSales = 0
  for (var index in company.sales) {
    compSales += company.sales[index]
  }
  return compSales
}

var companySales = {
  
}

var telusSalesBC = calculateTelusSales(companySalesData[0])
telusSalesBC = Number(telusSalesBC)

var telusSalesSK = calculateTelusSales2(companySalesData[2])
telusSalesSK = Number(telusSalesSK)

var telusTotalSales = telusSalesBC + telusSalesSK


console.log(telusSalesBC)
console.log(telusSalesSK)
console.log(telusTotalSales)

function calculateBombardierSales(company) {
  var compSales = 0
  for (var index in company.sales) {
    compSales += company.sales[index]
  }
  return compSales
}

var bombardierSales = calculateBombardierSales(companySalesData[1])

console.log(bombardierSales)
//
//function calculateSalesTax(telusBC, telusSK, bombardier, salesTax) {
//  var salesTaxAB = 0
//  var salesTaxBC = 0
//  var salesTaxSK = 0
//  telusBC * salesTaxRates[1]
//  telusAB * salesTaxRates[2]
//}
//
//var totalTaxPaid = calculateSalesTax(telusSalesBC, telusSalesSK, bombardierSales, salesTax)
////

var telusTaxPaidBC = telusSalesBC * salesTaxRates.BC
var telusTaxPaidSK = telusSalesSK * salesTaxRates.SK
var telusTotalTaxPaid = telusTaxPaidBC + telusTaxPaidSK
console.log(telusTotalTaxPaid)

var bombardierTaxPaid = bombardierSales * salesTaxRates.AB
console.log(bombardierTaxPaid)

var final = new Object
final.Telus = new Object
final.Bombardier = new Object

final.Telus.totalSales = telusTotalSales
final.Telus.totalTaxes = telusTotalTaxPaid
final.Bombardier.totalSales = bombardierSales
final.Bombardier.totalTaxes = bombardierTaxPaid


console.log(final)


//
//
//
// function calculateSalesTax(salesData, taxRates) {
//
// }
//
// var results = calculateSalesTax(companySalesData, salesTaxRates);
//
// /* Expected Results:
// {
//   Telus: {
//     totalSales: 1300
//     totalTaxes: 144
//   },
//   Bombardier: {
//     totalSales: 800,
//     totalTaxes: 40
//   }
// }
// */
