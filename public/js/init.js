(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $(".tabs").tabs();
    $(".collapsible").collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.tabs').tabs();

    // for HTML5 "required" attribute
    $("select[required]").css({
      display: "inline",
      height: 0,
      padding: 0,
      width: 0
    });

    $('.fixed-action-btn').floatingActionButton({
      direction: 'left',
      hoverEnabled: false,
      toolbarEnabled: false
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space