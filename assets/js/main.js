var mobileBtn = new Vue({
  el: '#wrapper',
  data: {
    isActive: false
  },
  methods: {
    toggleMenu: function () {
      this.isActive = !this.isActive
    }
  }
})

// var buildSlideMarkup = function buildSlideMarkup(count){
// 	var slideMarkup = '';
//   for (var i = 1; i <= count; i++) {
//   	slideMarkup += '<slide><img src="http://lorempixel.com/800/600" /></slide>'
//   };
//   return slideMarkup;
// };

var examplecv = new Vue({
	el: '#examplecv',
  components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  template: '#blog-template'
});
  // ,
  // template: '<div><carousel :autoplay="true" :autoplayTimeout="4000" easing="ease-in-out" :perPage="1" :paginationEnabled="false">' + buildSlideMarkup(5) + '</carousel></div>'
  // }
  // ,
  // template: '<div><carousel :autoplay="true" :autoplayTimeout="4000" easing="ease-in-out" :perPage="1" :paginationEnabled="false">{% for post in site.posts limit:5 %}<slide><span class="image-container"><p>{{ post.title }}</p></span></slide>{% endfor %}</carousel>'
  // }

  // <carousel :autoplay="true" :autoplayTimeout="4000" easing="ease-in-out" :perPage="1" :paginationEnabled="false">
  //   {% for post in site.posts limit:5 %}
  //     <slide>
  //       <span class="image-container">
  //         <p>{{ post.title }}</p>
  //       </span>
  //     </slide>
  //   {% endfor %}
  // </carousel>
