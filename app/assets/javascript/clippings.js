$(function(){
  $("#new_clipping").on("submit", function(e){
    $.ajax({
       type: 'post',
       url: this.action,
       data: $(this).serialize(),
       success: function(response){
         $("#gardenClippings").append(response)
       }
    });
    e.preventDefault();
  })

  $(".edit_clipping").on("submit", function(e){
    $.ajax({
       type: ($("input[name='_method']").val() || this.method),
       url: this.action,
       data: $(this).serialize(),
       success: function(response){
         console.log(response)
       }
    });
    e.preventDefault();
  })
})
