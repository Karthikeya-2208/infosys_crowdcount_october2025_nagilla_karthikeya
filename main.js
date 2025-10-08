 $(document).ready(function(){

   $('.message a').click(function(){
      $('form').animate({height:"toggle", opacity:"toggle"}, "slow")
   })

   // Simple demo login redirect -> dashboard
   $('.login-form').on('submit', function(e){
      e.preventDefault();
      var name = $('#username').val() || 'User';
      try{ localStorage.setItem('username', name); }catch(err){}
      window.location.href = 'dashboard.html';
   })

   // Demo registration toggled form handler
   $('.registration-form').on('submit', function(e){
      e.preventDefault();
      $('form').animate({height:"toggle", opacity:"toggle"}, "slow");
   })

  });