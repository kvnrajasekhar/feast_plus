$(document).ready(function(){
  $(".remove-btn").click(function(){
    const orderItem = $(this).closest('.order-item');

    orderItem.fadeOut(300, function() {
      $(this).remove();
    })
  })

  
  $(".quantity button").on("click", function() {
    const button = $(this);
    const input = button.siblings(".quantity-input");
    let quantity = parseInt(input.val());
    const Baseprice=219.54;

    if (button.text() === "+") {
      quantity++;
    } else if (button.text() === "-" && quantity > 1) {
      quantity--;
    }

    input.val(quantity);

    const newItemPrice = quantity * Baseprice;
    button.closest('.order-item').find('.price').text('₹' + newItemPrice.toFixed(2));

    updateTotal();
  });

  function updateTotal() {
    let total = 0;
    $(".order-item").each(function() {
      const priceText = $(this).find('.price').text().replace('₹', '');
      total += parseFloat(priceText);
    });

    // Assuming a fixed delivery fee for simplicity
    const deliveryFee = 50;
    $(".total span:last-child").text('₹' + total.toFixed(2));
  }

  // Initial total update on page load
  updateTotal();
});