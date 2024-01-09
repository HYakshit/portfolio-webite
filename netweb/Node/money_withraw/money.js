// quantity
let one_h_quantity = 10;
let two_h_quantity = 10;
let five_h_quantity = 10;
// notes
let oneh = 100;
let twoh = 200;
let fiveh = 500;
let total = oneh * one_h_quantity + twoh * two_h_quantity + fiveh * five_h_quantity;
$(document).ready(function () {
    function show() {
        $('#one_quantity').text(one_h_quantity);
        $('#two_quantity').text(two_h_quantity);
        $('#five_quantity').text(five_h_quantity);
        $('#total').text(total);
    }
    show();
    $(document).on('click', '#Submit', function () {

        let withdrawalAmount = parseInt($('#withraw').val());
        let str = withdrawalAmount.toString();
        let lasttwo = str.slice(-2)
        if (lasttwo != '00') {
            $('#err').text(`we don't have notes of${lasttwo}`);
            return;
        }
        if (withdrawalAmount > total) {
            $('#err').text(`Insefecient balance`);
            return;
        }

        if (!isNaN(withdrawalAmount)) {
            let remainingAmount = withdrawalAmount;

            let oneHUsed = parseInt(remainingAmount / oneh);

            if (oneHUsed > one_h_quantity) {
                oneHUsed = one_h_quantity;
            }
            remainingAmount -= oneHUsed * oneh;

            let twoHUsed = parseInt(remainingAmount / twoh);

            if (twoHUsed > two_h_quantity) {
                twoHUsed = two_h_quantity;
            }
            remainingAmount -= twoHUsed * twoh;

            let fiveHUsed = parseInt(remainingAmount / fiveh);
            if (fiveHUsed >= five_h_quantity) {
                fiveHUsed = five_h_quantity;
            }
            remainingAmount -= fiveHUsed * fiveh;

            one_h_quantity -= oneHUsed;
            two_h_quantity -= twoHUsed;
            five_h_quantity -= fiveHUsed;
            total = oneh * one_h_quantity + twoh * two_h_quantity + fiveh * five_h_quantity;

            show();
        } else {

            alert('Please enter a valid withdrawal amount.');
        }
    });

})