<script type="text/javascript">
$(document).ready(function(){
    $(".tabs_list p a").click(function(e){
        e.preventDefault();
     });

     $(".tabs_list p").click(function(){
        var tabid = $(this).find("a").attr("href");
        $(".tabs_list p,.tabs aside.tab").removeClass("active");

        $(".tab").hide();   // hiding open tab
        $(tabid).show();    // show tab
        $(this).addClass("active"); //  adding active class to clicked tab
     });
   
});
</script>