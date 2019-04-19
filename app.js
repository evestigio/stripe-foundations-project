function purchaseProduct(event) {
  event.preventDefault();
  console.log(event);
  alert('hello world');
}

function openProductModal(event) {
  console.log(event.srcElement.parentNode.parentNode.children[0].children[1].innerText)
  let title=event.srcElement.parentNode.parentNode.children[0].children[1].innerText
  // console.log(event.srcElement.parentNode.parentNode.innerText)
  $('#purchaseProductModal').modal('show')
  let productTitle=document.querySelector('#productItemTitle')
  productTitle.innerHTML=title
  // let productDescription=document.querySelector('#productItemDescription')
  // productDescription.innerHTML=description
}