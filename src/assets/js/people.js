$(function () {
    // Add items in the table

    $("#table-items-add").click(function () {
        console.log('e');
        $("#table-items").removeClass('hide');
        var item = $("#table-items-select").val();
        var html = "<tr><td>" + item + "</td>" +
            "<td><input type='text' placeholder='10' class='item-name' id='" + item + "'> </td>" +
            "<td class='text-center'><input type='button' value='Remove' class='table-items-remove alert button'></td></tr>";

        $("#table-items-body").append(html);
    });

    $(document).on("click", ".table-items-remove", function () {
        $(this).parents('tr').remove();
    });

});