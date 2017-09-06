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

function calculateBombardierSales(company) {
  var compSales = 0
  for (var index in company.sales) {
    compSales += company.sales[index]
  }
  return compSales
}

var bombardierSales = calculateBombardierSales(companySalesData[1])


var telusTaxPaidBC = telusSalesBC * salesTaxRates.BC
var telusTaxPaidSK = telusSalesSK * salesTaxRates.SK
var telusTotalTaxPaid = telusTaxPaidBC + telusTaxPaidSK


var bombardierTaxPaid = bombardierSales * salesTaxRates.AB


var final = new Object
final.Telus = new Object
final.Bombardier = new Object

final.Telus.totalSales = telusTotalSales
final.Telus.totalTaxes = telusTotalTaxPaid
final.Bombardier.totalSales = bombardierSales
final.Bombardier.totalTaxes = bombardierTaxPaid


console.log(final)

