{/* <script type="text/javascript">
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
</script> */}

let toTab1 = document.getElementById('to_tab1');
let toTab2 = document.getElementById('to_tab2');
let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
// let hrTab1 = document.getElementById('hr_tab1');
// let hrTab2 = document.getElementById('hr_tab2');

toTab1.addEventListener('click', () => {
   toTab1.classList.add('active_tab');
   toTab2.classList.remove('active_tab');
   // hrTab1.classList.remove('in_active_line');
   // hrTab2.classList.add('in_active_line');
   tab1.classList.remove('in_active_tab_info');
   tab2.classList.add('in_active_tab_info');
   tab2.classList.remove('course_overview_container');
});

toTab2.addEventListener('click', () => {
   toTab1.classList.remove('active_tab');
   toTab2.classList.add('active_tab');
   // hrTab1.classList.add('in_active_line');
   // hrTab2.classList.remove('in_active_line');
   tab1.classList.add('in_active_tab_info');
   tab2.classList.remove('in_active_tab_info');
   tab2.classList.add('course_overview_container');
});