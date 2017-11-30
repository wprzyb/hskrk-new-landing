jQuery(document).ready(function () {
  var DOCUMENT = jQuery(document);
  var IS_OPEN = 'is-open';
  var excerpt = jQuery('.excerpt');
  var excerptClose = excerpt.find('.excerpt-close');
  var excerptBack = excerpt.find('.excerpt-back');
  var excerptFront = excerpt.find('.excerpt-front');
  var span3 = jQuery('.span3');
  var span12 = jQuery('.span12');
  var oldWidth;
  var span12Width;
  var span3width;
  var span3marginLeft;
  var currentOpen;

  var thumb = jQuery('.thumbnails li>div');

  jQuery('.excerpt-front').html('Czytaj fragment');

  jQuery('.excerpt-link').click(function () {
    return false;
  });

  function closeExcerpts() {
    var back = currentOpen.find('.excerpt-back');
    currentOpen.removeClass(IS_OPEN);
    back.removeClass(IS_OPEN);
    back.width(oldWidth);
    back.css('marginLeft', 0);
    currentOpen = null;
  }

  function setVariables() {
    span12Width = span12.width();
    span3width = span3.width();
    span3marginLeft = parseInt(span3.css('marginLeft').replace('px', ''), 10);
    excerptBack.css({
      width: oldWidth,
      marginLeft: 0
    });
    oldWidth = excerptBack.width();
    excerpt.removeClass(IS_OPEN);
  }


  function distance(x1, y1, x2, y2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  setVariables();

  if (excerpt.length > 0) {
    jQuery(window).on('resize', function () {
      setVariables();
    });

    jQuery(document).on('click', function(event) {
      if (event.target.className !== "excerpt-front" && currentOpen) {
        closeExcerpts();
      }
    });

    excerptClose.on('click', function (event) {
      closeExcerpts();
      return false;
    });

    excerpt.on('click', function (event) {
      if (currentOpen) {
        closeExcerpts();
      }
      var target = jQuery(event.target);
      var parent = target.parents('.excerpt');
      var back = parent.find('.excerpt-back');
      var post = target.parents('.thumbnail.frontpage-post');
      var index = thumb.index(post);
      currentOpen = parent;
      var mx = event.clientX - parent.offsetLeft,
        my = event.clientY - parent.offsetTop;

      var w = parent.offsetWidth,
        h = parent.offsetHeight;

      var directions = [{
        id: 'top',
        x: w / 2,
        y: 0
      }, {
        id: 'right',
        x: w,
        y: h / 2
      }, {
        id: 'bottom',
        x: w / 2,
        y: h
      }, {
        id: 'left',
        x: 0,
        y: h / 2
      }];


      directions.sort(function (a, b) {
        return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
      });
      parent.attr('data-direction', directions.shift().id);
      parent.addClass(IS_OPEN);
      back.css({
        width: span12Width,
        marginLeft: span3marginLeft === 20 ? -(index * span3width + span3marginLeft * index) : 0
      });
    });
  }
});