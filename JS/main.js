function getQuote(){
  $.ajax({
    type:"POST",
    url:"https://andruxnet-random-famous-quotes.p.mashape.com/",
    headers:{
     'X-Mashape-Key':'qQ7llgXUuMmshpSN0Ehp0h3rZAwqp1FyKC6jsn9LcpK2D5Z7QB',
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept':'application/json'
    },
    success:function(data){
      
      data=JSON.parse(data);
      $(".panel-body").html("\"<i>"+data.quote+"\"</i>");
      
      $("#author-link").attr('href',"https://en.wikipedia.org/wiki/"+data.author);                 $("#author-link").html("-"+data.author); 
       twitterButtonUpdate(data.quote,data.author);
      
      }
  });
}
function twitterButtonUpdate(quote,author){

  var href = "https://twitter.com/intent/tweet?button_hashtag=quotegenerator&text=" + quote + "- " + author;
 $("#tweet").attr("href",href);
  $.getScript("https://platform.twitter.com/widgets.js");
}
getQuote();