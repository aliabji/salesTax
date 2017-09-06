var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var telusSales = 0
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

var telusSales = calculateTelusSales(companySalesData[0])
telusSales = Number(telusSales)
var telusSales2 = calculateTelusSales2(companySalesData[2])
telusSales2 = Number(telusSales2)

telusSales = telusSales + telusSales2

console.log(telusSales)

function calculateBombardierSales(company) {
  var compSales = 0
  for (var index in company.sales) {
    compSales += company.sales[index]
  }
  return compSales
}

var bombardierSales = calculateBombardierSales(companySalesData[1])

console.log(bombardierSales)

function calculateSalesTax(telus, bombardier, salesTax) {
  
}

//
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
