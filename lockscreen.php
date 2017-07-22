<!DOCTYPE html>
<html lang="en">
<head>
    <title>Lockscreen |</title>
    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
    <link rel="shortcut icon" href="img/xlogo2.ico.pagespeed.ic.qmwUApvH50.html"/>
    <!--start global css-->
    <link type="text/css" rel="stylesheet" href="css/app.css%2bcustom.css%2bpages%2c_login.css%2bpages%2c_lockscreen.css.pagespeed.cc.P4rbhoFefg.css"/>
    <!-- end of global css -->

</head>

<body class="lockscreen">
<div class="container">
    <div class="row justify-content-center ">
        <div class="col-lg-4">
            <div class="login-container row">
                <div class="col-lg-12 login_border_radius1 lockscreen_img">
                    <div id="output"></div>
                    <p></p>
                    <div class="avatar"></div>
                    <h6 class="text-white">Sohidul Islam</h6>
                    <p></p>
                </div>
                <div class="col-lg-12 login_border_radius lockscreen_content">
                    <div class="form-box">
                        <form method="post" class="form" name="screen" id="tryitForm">
                            <div class="form-group ">
                                <div class="input-group">
                                    <input type="password" name="password" class="form-control" placeholder="Password">
                                </div>
                            </div>
                            <button class="btn btn-outline-white btn-block mt-3 mb-3" id="index" type="submit">UNLOCK</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript" src="js/jquery.min.js.pagespeed.jm.29OAZzvhfX.js"></script>
<script src="js/tether.min.js%2bbootstrap.min.js.pagespeed.jc.pYiAkWqVgD.js"></script><script>eval(mod_pagespeed_Ttl$8NIw88);</script>
<script>eval(mod_pagespeed_lxYO0S2_jt);</script>


<script type="text/javascript">//<![CDATA[
"use strict";$(document).ready(function(){$(window).on("load",function(){$('.preloader img').fadeOut();$('.preloader').fadeOut(1000);});$(window).on("load",function(){$('.preloader img').fadeOut();$('.preloader').fadeOut(1000);});var textfield=$("input[name=password]");$('button[type="submit"]').on('click',function(e){e.preventDefault();if(textfield.val()!=""){$("#output").addClass("alert alert-success animated fadeInUp").html("Welcome back press continue").removeClass('alert-danger');$("input").css({"height":"0","padding":"0","margin":"0","opacity":"0"});$(".locked").addClass("hidden");$(".unlocked").removeClass("hidden");$('button[type="submit"]').html("CONTINUE").on("click",function(){window.location.href='dashboard.php';});$(".avatar").css({"background-image":"url('img/admin.jpg')"});}else{$("#output").removeClass(' alert alert-success').addClass("alert alert-danger animated fadeInUp").html("Sorry Enter Your Password ");}return false;});});
//]]></script>

</body>
</html>