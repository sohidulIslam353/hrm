<?php
session_start();
include('common/db.php');
$count=count($_POST);
    if($count>0)
    {       
        $email = $_POST['email'];
        $password =MD5( $_POST['password']);
        $query = "SELECT * FROM employee WHERE email = '$email' and password = '$password' and active ='1'";
        $result = mysqli_query($connect,$query);        
         $num=mysqli_num_rows($result);
             if ($num==0) {
                  $result = mysqli_query($connect, $query);
                
                 }
                   else {
                    echo "<pre>";
                    while ($row=mysqli_fetch_assoc($result)) {
                            $_SESSION['username']=$row['username'];
                            $_SESSION['email']=$row['email'];
                            
                    }
                       header("Location:dashboard.php");        
                    }
         
    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Login | MVS Admin</title>

    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
    <link rel="shortcut icon" href="img/xlogo2.ico.pagespeed.ic.qmwUApvH50.html"/>
    <!--start global css-->
    <link type="text/css" rel="stylesheet" href="css%2c_app.css%2bcss%2c_custom.css%2bvendors%2c_bootstrapvalidator%2c_css%2c_bootstrapValidator.min.css%2bcss%2c_pages%2c_login.css.pagespeed.cc.F4IeeecOC6.css"/>
    <!-- end of global css -->
</head>
<body class="login_screen">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
            <div class="login_box p-3">
                <div class="row m-t-20">
                    <div class="col-lg-12 text-center">
                        <img src="img/logoo.png" class="img-fluid" alt="logo"/>
                        <h5 class="text-white m-t-20">Login</h5></div>
                </div>
                    <?php       

            if (isset($result)) {
                echo  "<div class='alert alert-danger'> User Doesn't Exist </div>";
             } 
                ?>

                <div class="m-t-15">
                    <form action="" id="tryitForm" method="post" autocomplete="off">
                        <div class="form-group ">
                            <div class="input-group ">
                            <span class="input-group-addon">
                                <i class="ti-user"></i>
                            </span>
                                <input type="email" name="email" class="form-control" id="email" placeholder="Email Address" required>
                            </div>
                        </div>
                        <div class="form-group ">
                            <div class="input-group m-t-15">
                            <span class="input-group-addon">
                                <i class="ti-lock"></i>
                            </span>
                                <input type="password" name="password" class="form-control" id="password" placeholder="Password" required>
                            </div>
                        </div>                       
                        <div class="text-center login_bottom">
                            <button type="submit" class="btn btn-success btn-block b_r_20 m-t-10 m-r-20">LOG IN</button>
                        </div>
                        <div class="row">
                            <div class="col-7 m-t-15 ">
                                <a href="forgot_password.php" class="text-white">Forgot password ?</a>
                            </div>
                            <div class="col-5 m-t-15 text-right">
                                <a href="register.php" class="forgottxt_clr text-white"><i class="fa fa-external-link"></i> Sign up</a>
                            </div>

                        </div>

                    </form>
                </div>

                <div class="row">
                    <div class="text-center col-lg-12 m-t    border-left:0;-20">
                        <h5 class="text-white">--Or--</h5>
                    </div>
                    <div class="col-lg-12 text-center mb-3">
                        <a href="#" class="btn login_fb btn-block">Sign in with <i class="ti-facebook"></i></a>
                        <a href="#" class="btn login_google btn-block">Sign in with <i class="ti-google"></i></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript" src="js/jquery.min.js.pagespeed.jm.29OAZzvhfX.js"></script>
<script src="js/tether.min.js%2bbootstrap.min.js.pagespeed.jc.pYiAkWqVgD.js"></script><script>eval(mod_pagespeed_Ttl$8NIw88);</script>
<script>eval(mod_pagespeed_lxYO0S2_jt);</script>


<script type="text/javascript" src="vendors/bootstrapvalidator/js/bootstrapValidator.min.js.pagespeed.jm.YU3KUlvaHb.js"></script>
<script type="text/javascript" src="vendors/jasny-bootstrap/js/inputmask.js.pagespeed.jm.cQynfQ4m3q.js"></script>
<script type="text/javascript">//<![CDATA[
"use strict";$(document).ready(function(){$(window).on("load",function(){$('.preloader img').fadeOut();$('.preloader').fadeOut(1000);});$(".reg_submit").on("click",function(){var password=document.getElementById("txtPassword").value;var confirmPassword=document.getElementById("cnfpassword").value;if(password!=confirmPassword){alert("Passwords do not match.");return false;}else{return true;}});$('#tryitForm').bootstrapValidator({fields:{password:{validators:{notEmpty:{message:'Enter the password'}}},confirmpassword:{validators:{notEmpty:{message:'Confirm the password'},identical:{field:'password',message:'Please enter the same password as above'}}},email:{validators:{notEmpty:{message:'Enter the email address '},regexp:{regexp:/^\S+@\S{1,}\.\S{1,}$/,message:'The input is not a valid email address '}}},cell:{validators:{notEmpty:{message:'Enter the phone number'},regexp:{regexp:/^[0-9]{10}$/,message:'The phone number can only consist of numbers with 10 digits'}}},city:{validators:{notEmpty:{message:'City is required'}}},country:{validators:{notEmpty:{message:'country is required'}}},gender:{validators:{notEmpty:{message:'Gender is required'}}},pincode:{validators:{notEmpty:{message:'Pincode number is required'},regexp:{regexp:/^(\+?1-?)?(\([0-9]\d{2}\)|[0-9]\d{2})-?[0-9]\d{2}$/,message:'Enter valid Pincode number'}}},activate:{validators:{notEmpty:{message:'You have to activate your account'}}},check_active:{validators:{notEmpty:{message:'You have to activate your account'}}},terms:{validators:{notEmpty:{message:'You have to accept the terms and policies'}}}},submitHandler:function(form){if($('#tryitForm').valid()){console.log("now we enable the submit button!");}}});});
//]]></script>

</body>

<!-- Mirrored from demo.rareadmin.com/light-sidebar/login.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Jul 2017 08:14:27 GMT -->
</html>