(function(){
  'use strict';

  $('document').ready(initialize);

  var balance = 1000;

  function initialize() {
    $('#deposit').click(deposit);
    $('#withdraw').click(withdraw);
  }

  function getAmount(){
    var amount = $('#amount').val();
    return amount * 1;
  }

  function deposit(){
    var amount = getAmount();
    balance += amount;
    display();
    createRow('deposit');
  }

  function withdraw(){
    var amount = getAmount();
    balance -= amount;
    // var fee = balance < 0 ? 50 : null;    //this code should be added for the fee
    // balance = fee ? balance - fee : balance;
    display();
    createRow('withdraw');
  }

  function display(){
    $('#balance').text('$' + balance);
  }

  // function clearAmount(){
  //   $('#amount').val(0);
  // }

  function createRow(transaction){
    var tr = $('<tr>');
    var fee = $('<td>').addClass('fee').text(addFee);
    var deposit;
    var withdraw;

    if (transaction==='deposit') {
    deposit = $('<td>').addClass('deposit').text(getAmount());
  } else {
    deposit = $('<td>').text(0);
  }

    if (transaction==='withdraw'){
    withdraw = $('<td>').addClass('withdraw').text(getAmount());
  } else {
    withdraw = $('<td>').text(0);
  }

    var bal = $('<td>').addClass('bal').text(balance);

    tr.append(fee, deposit, withdraw, bal);
    $('#ledger > tbody').append(tr);

  }

  function addFee() {
    if (balance < 0){
      balance -= 50;
      return 50;
    }
  }



})();
