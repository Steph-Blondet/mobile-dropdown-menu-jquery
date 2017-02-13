//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
    var $anchor = $(this);
    //Create an option
    var $option = $("<option></option>");
    //Option's value is the href
    $option.val($anchor.attr("href"));
    //Option's text is the text of links
    $option.text($anchor.text());
    //Append option to select
    $select.append($option);
});

//Create button
var $button = $("<button>Go</button>");
$("#menu").append($button);
//Bind click to go button
$button.click(function(){
    //Go to seelct's location
    window.location = $select.val();

});
