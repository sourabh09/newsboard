    var category = "";

    $(document).ready(function () {

    $.ajax({ 
    type: 'GET', 
    url: 'categories.json',
    dataType: 'json',
    success: function (data) { 
     
        console.log(data)

        for (var i=0; i<=data.length-1; i++) {
          
            //alert(data[i].category);

      $('.category').append('<button style="margin:3px;" type="button" class="mdl-chip item_inner"><span class="mdl-chip__text">'+

          data[i].category+'</span></button>')

        }


       $('.item_inner:first-child').click();

    }
        });        
  })

    function getData(){
    $('.dummy').show();
	const app = document.getElementById('root')

		const container = document.createElement('div')
		container.setAttribute('class', 'container')

		app.appendChild(container)

var request = new XMLHttpRequest()
var apikey = "0ECt45onptn7-gwFrzfhRc6NO20gRNPrGqtZ8pY9R4PDx_m2";

//request.open('GET', 'https://newsapi.org/v2/everything?language=en&q='+category+'&pageSize=50&sortBy=publishedAt&apiKey='+apikey, true);
request.open('GET', 'https://api.currentsapi.services/v1/search?keywords='+category+'&apiKey='+apikey, true);
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  var articles = data.news;

  if (request.status >= 200 && request.status < 400) {
    console.log(data);
      $('.dummy').hide();
      $('.info').hide();
    //alert(articles.length)

    if(articles.length==0){
      alert("No articles found!")
      return false
    }
      const selectedcategory = document.createElement('div')
      selectedcategory.setAttribute('class', 'selectedcategory')
      container.appendChild(selectedcategory)
      selectedcategory.innerHTML = category;

     articles.forEach(articles => {
      //console.log(articles.title);
      /*$('#root').append("<div class='main'><div class='img'><img src='"+articles.urlToImage+"'></div><div class='title'>"+articles.title+"</div><div class='content'>"+articles.description+
      	"</div><div class='viewmore'><a target='_blank' href='"+articles.url+"'>View more</a></div></div>");*/


      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const imgclass = document.createElement('div')
      imgclass.setAttribute('class', 'imgclass')

      const imageHolder = document.createElement('div')
      imageHolder.setAttribute('class', 'imageHolder')

      const img = document.createElement('img')

      if(articles.image=="None"){
      	img.setAttribute('src', "default.png")
      }else{
      	img.setAttribute('src', articles.image)
      }
      

      const h3 = document.createElement('h5')
      h3.textContent = articles.title

      const p = document.createElement('p')
      p.textContent = articles.description;

      const a = document.createElement('a')
      a.innerHTML = "<br>Read more on "+articles.url;
      a.setAttribute('href', articles.url)
	    a.setAttribute('target', "_blank")

      container.appendChild(card)
	  card.appendChild(imgclass)
	  imgclass.appendChild(imageHolder)
      imageHolder.appendChild(img)
      card.appendChild(h3)
      card.appendChild(p)
      p.appendChild(a)

    })

     $('html, body').animate({
        scrollTop: $(".selectedcategory").last().offset().top
    }, 300);
        

  } else {
    console.log('error')
  }

}


request.send()


}
  $(document).ready(function() { 
      $(document).on("click", ".mdl-chip" , function() {
                  category = $(this).text();
                  getData();
          $(this).addClass('selectedchips');

          $(this).attr('disabled', 'disabled');
  });

});

 /* $(document).ready(function() { 

    var height =  screen.height;
    var width = screen.width;
    document.body.style.width = width+"px";
    document.body.style.height = height+"px";


    var mq = window.matchMedia( "(min-width: 1024px)" );
    if (mq.matches) {
      $('body').css("background-image","url('https://source.unsplash.com/1920x1080/?abstract')");
  
    } else {
      $('body').css("background-image","url('https://source.unsplash.com/750x1334/?abstract')");
      
    }
   

  });*/


  function getData2(){

    var inputValue = $('#inputcategory').val();
    if(inputValue==""){
      alert("Please enter category..")
      return false;
    }

    category = inputValue;
    getData();

    $("#myModal").css('display', 'none');
  };

  function info(){

		$("#myModal").css('display', 'block');

	};

	$(document).on("click", "#list-switch-1" , function() {

       var bgcolor = $('body').css("background-color");
       if(bgcolor=="rgb(230, 230, 230)"){
       	$('body').css("background-color","#263238")

       }else if(bgcolor=="rgb(38, 50, 56)"){
       
       	$('body').css("background-color","#e6e6e6")
      }
     });

$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        return false;
    });

})

  function closeModel(){
    $("#myModal").hide();
  }

