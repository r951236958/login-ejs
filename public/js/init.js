(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $(".tabs").tabs();
    $(".collapsible").collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.tabs').tabs();
    $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 250, // Transition in duration
      out_duration: 200, // Transition out duration
      //ready: function() { alert('Ready'); }, // Callback for Modal open
      //complete: function() { alert('Closed'); } // Callback for Modal close
    });
    $('.modal-xl').modal();

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