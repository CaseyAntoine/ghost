$(document).ready(function(){
  $("td").click(function(){
    $("td").children('td').last().toggle();
  });
});
