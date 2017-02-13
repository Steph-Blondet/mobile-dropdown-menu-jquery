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
//Bind click to go button
    //Go to seelct's location
//Modify CSS to hide links on small width and show button and select
    //Also hides select and button on larger width and show's links
//Deal with selected options depending on current page
