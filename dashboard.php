<?php
session_start();

include('common/db.php');
include('common/logedin.php');





?>
<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from demo.rareadmin.com/light-sidebar/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Jul 2017 08:03:20 GMT -->
<head>
    <title>Dashboard  | MVS admin</title>
    
    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
    <link rel="shortcut icon" href="img/xlogo2.ico.pagespeed.ic.qmwUApvH50.html"/>
    <!--start global css-->
    <link type="text/css" rel="stylesheet" href="css%2c_app.css%2bcss%2c_custom.css%2bvendors%2c_c3%2c_css%2c_c3.min.css%2bcss%2c_pages%2c_index1.css%2bcss%2c_pages%2c_light_sidebar.css.pagespeed.cc.pd5wVVtuBm.css"/>
    <!-- end of global css -->

    
</head>

<body>
<div class="preloader">
    <div class="preloader_img">
        <img src="img/loader.gif.pagespeed.ce.hzUa_66CCA.gif" class="pre_img" alt="loading...">
    </div>
</div>
<?php include('common/header.php'); ?>


<?php include('common/navbar.php'); ?>

    <div class="right-aside view-port-height">    
    <!-- Main content -->
    <div class="content">
        <div class="row">
            <div class="col-lg-9">
                <div class="card main_chart2">
                    <div class="card-header bg-white">
                        <div><h5 class="float-left mt-2"> Statistics</h5><div class="float-right"><div class="btn-group br_25" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-primary">Daily</button>
                            <button type="button" class="btn btn-outline-primary">Weekly</button>
                            <button type="button" class="btn btn-outline-primary">Monthly</button>
                        </div></div></div>

                    </div>
                    <div class="card-block">
                        <div class="m-t-10" id="spline_chart"></div>
                        <div class="row">
                            <div class="col-12 m-t-10">
                                <div class="bg-white info_widgets">
                                    <div class="row">
                                        <div class="col-sm-3 border_right_sm m-t-10">
                                            Daily Views
                                            <div class="widget2_bar2 m-t-10"><canvas width="216" height="70" style="display: inline-block; width: 216px; height: 70px; vertical-align: top;"></canvas></div>


                                        </div>
                                        <div class="col-sm-3 border_right_sm m-t-10">
                                            Weekly Views
                                            <div class="widget2_bar1 m-t-10"><canvas width="206" height="70" style="display: inline-block; width: 206px; height: 70px; vertical-align: top;"></canvas></div>


                                        </div>
                                        <div class="col-sm-3 border_right_sm m-t-10">
                                            Monthly Views
                                            <div class="widget2_bar3 m-t-10"><canvas width="216" height="70" style="display: inline-block; width: 216px; height: 70px; vertical-align: top;"></canvas></div>

                                        </div>
                                        <div class="col-sm-3 m-t-10">
                                            Anual Views
                                            <div class="widget2_bar4 m-t-10"><canvas width="206" height="70" style="display: inline-block; width: 206px; height: 70px; vertical-align: top;"></canvas></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="col-lg-3">
                <div class="row">
                    <div class="col-lg-12 col-sm-6 m-t-30">
                        <div id="top_widget4" style="perspective: 480px; position: relative; transform-style: preserve-3d;">


                            <div class="bg-info widg-bg-icon br_5px info_widgets front" style="backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out;">
                                <div class="row" style="backface-visibility: hidden;">
                                    <div class="col-6" style="backface-visibility: hidden;">

                                        <p class="text-white mb-0" style="backface-visibility: hidden;">Views</p>
                                        <p class="text-white font_18" style="backface-visibility: hidden;">470</p>

                                    </div>
                                    <div class="col-6" style="backface-visibility: hidden;">
                                        <i class="ti-eye" style="backface-visibility: hidden;"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white widg-bg-icon br_5px info_widgets back" style="backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out;">
                                <div class="row" style="backface-visibility: hidden;">
                                    <div class="col-4" style="backface-visibility: hidden;">

                                        <h6 style="backface-visibility: hidden;">Views</h6>
                                        <h4 style="backface-visibility: hidden;">470</h4>

                                    </div>
                                    <div class="col-8" style="backface-visibility: hidden;">
                                        <div class="sparkline_flip1" style="backface-visibility: hidden;"><canvas width="120" height="70" style="display: inline-block; width: 120px; height: 70px; vertical-align: top;"></canvas></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 m-t-30">
                        <div id="top_widget3" style="perspective: 480px; position: relative; transform-style: preserve-3d;">

                            <div class="bg-danger widg-bg-icon br_5px info_widgets front" style="backface-visibility: hidden; transform-style: preserve-3d; position: absolute; z-index: 1; height: 100%; width: 100%; transition: all 0.5s ease-out;">
                                <div class="row" style="backface-visibility: hidden;">
                                    <div class="col-6" style="backface-visibility: hidden;">

                                        <p class="text-white mb-0" style="backface-visibility: hidden;">Comments</p>
                                        <p class="text-white font_18" style="backface-visibility: hidden;">120</p>
                                    </div>
                                    <div class="col-6" style="backface-visibility: hidden;">
                                        <i class="ti-comment" style="backface-visibility: hidden;"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white widg-bg-icon br_5px info_widgets back" style="backface-visibility: hidden; transform-style: preserve-3d; position: relative; z-index: 0; height: 100%; width: 100%; transform: rotateY(-180deg); transition: all 0.5s ease-out;">
                                <div class="row" style="backface-visibility: hidden;">
                                    <div class="col-4" style="backface-visibility: hidden;">

                                        <h6 style="backface-visibility: hidden;">Comments</h6>
                                        <h4 style="backface-visibility: hidden;">120</h4>
                                    </div>
                                    <div class="col-8" style="backface-visibility: hidden;">
                                        <div class="sparkline_widget4" style="backface-visibility: hidden;"><canvas width="106" height="70" style="display: inline-block; width: 106px; height: 70px; vertical-align: top;"></canvas></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 m-t-30">
                        <div class="bg-white info_widgets">
                            <div class="row">
                                <div class="col-5">
                                    <p><i class="ti-user text-success info_icon"></i></p>
                                </div>
                                <div class="col-7 text-right">
                                    <span class="info_num" id="info6">599</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <span>Users</span>
                                    <div class="progress">
                                        <div class="progress-bar w-75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-sm-6 m-t-30">
                        <div class="bg-primary">
                            <div class="row p-3">
                                <div class="col-5 text-center ">
                                    <p><i class="ti-twitter-alt text-white client_icon"></i></p>

                                </div>
                                <div class="col-7 text-right text-white">
                                    <span class="client_count"><span id="info13">99</span>+</span>
                                    <p><b>Followers</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">

            <div class="col-lg-6">
                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-md-4 m-t-30">
                        <div class="text-center p-3 widget_social_icons facebook">
                            <div class=" widget_social_inner1" style="top: 20px;">
                                <i class="ti-facebook" style="font-size: 45px;"></i>
                            </div>
                            <div class="widget_social_inner2" style="display: none;">
                                <h4 class="mb-0">7565</h4>
                                <p class="m-0">Likes</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 m-t-30">
                        <div class="text-center p-3 widget_social_icons twitter">
                            <div class="widget_social_inner1" style="top: 20px;">
                                <i class="ti-twitter-alt" style="font-size: 45px;"></i></div>
                            <div class="widget_social_inner2" style="display: none;">
                                <h4 class="mb-0">1245</h4>
                                <p class="m-0">Followers</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 m-t-30">
                        <div class="text-center p-3 widget_social_icons google">
                            <div class=" widget_social_inner1" style="top: 20px;">
                                <i class="ti-google" style="font-size: 45px;"></i>
                            </div>
                            <div class="widget_social_inner2" style="display: none;">
                                <h4 class="mb-0">742</h4>
                                <p class="m-0">Messages</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 m-t-30">
                        <div class="text-center p-3 widget_social_icons linkedin">
                            <div class=" widget_social_inner1" style="top: 20px;">
                                <i class="ti-linkedin" style="font-size: 45px;"></i>
                            </div>
                            <div class="widget_social_inner2" style="display: none;">
                                <h4 class="mb-0">8125</h4>
                                <p class="m-0">Connections</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 m-t-30">
                        <div class="text-center p-3 widget_social_icons youtube">
                            <div class=" widget_social_inner1" style="top: 20px;">
                                <i class="ti-youtube" style="font-size: 45px;"></i>
                            </div>
                            <div class="widget_social_inner2" style="display: none;">
                                <h4 class="mb-0">125k</h4>
                                <p class="m-0">Views</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-md-4 m-t-30">
                        <div class="text-center  p-3 widget_social_icons instagram">
                            <div class=" widget_social_inner1" style="top: 20px;">
                                <i class="ti-instagram" style="font-size: 45px;"></i>
                            </div>
                            <div class="widget_social_inner2" style="display: none;">
                                <h4 class="mb-0">550+</h4>
                                <p class="m-0">Pictures</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-block weather_section1">
                        <div class="row">
                            <div class="col-6 text-white">
                                <h3 class="m-t-40 m-b-0 text-white">New york city</h3> America
                            </div>
                            <div class="col-6">
                                <div><span class="weather_num text-white float-right">22°</span></div>
                            </div>
                        </div>
                        <div class="row text-white">
                            <div class="col-12 col-sm-12">
                                <div>
                                    <div class="cloud_icon float-left "><i class="ti-cloud"></i></div>
                                    <div class="current_status float-left">Snowing currently                                        </div>
                                </div>

                            </div>
                        </div>
                        <div class="row bottom_row">
                            <div class="col-3 text-white text-center bottom_weather_sections">
                                <p>now</p>
                                <i class="ti-cloud-down bottom_weather_icons"></i>
                                <p>snow</p>
                            </div>
                            <div class="col-3 text-white text-center bottom_weather_sections">
                                <p>8:00am</p>
                                <i class="ti-cloud bottom_weather_icons"></i>
                                <p>clear</p>
                            </div>
                            <div class="col-3 text-white text-center bottom_weather_sections">
                                <p>1:00pm</p>
                                <i class="ti-cloud bottom_weather_icons"></i>
                                <p>windy</p>
                            </div>
                            <div class="col-3 text-white text-center bottom_weather_sections">
                                <p>5:00pm</p>
                                <i class="ti-cloud bottom_weather_icons"></i>
                                <p>clear</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-12 ">
                <!--Card-->
                <div class="card">
                    <!--Card image-->
                    <div class="card7_img_section">
                        <img src="img/xcard7_img.jpg.pagespeed.ic.slZ1lb_Kl3.jpg" class="img-fluid" alt="Card image with a sunset in mountains.">
                    </div>
                    <!--/.Card image-->
                    <!--Card content-->
                    <div class="card-block">
                        <!--Title-->
                        <div>
                            <div class="float-left">
                                <h5 class="card-title m-b-0">Tshirts</h5>
                                <span>Men's running tshirts.</span>
                            </div>
                            <div class="float-right">
                                <h5 class="text-danger">$45.25</h5>
                            </div>
                        </div>
                        <br>
                        <br>
                        <br>
                        <h6 class="clear_both m-b-0">Sizes</h6>
                        <span>s,m,l,xl,xxl</span>
                        <br>
                        <br>
                        <h6 class="m-b-0">Colors</h6>
                        <div class="shirt_clor bg-danger pointer"></div>
                        <div class="shirt_clor bg-mint pointer"></div>
                        <div class="shirt_clor bg-purple pointer"></div>
                        <div class="shirt_clor bg-warning pointer"></div>
                    </div>
                    <!--/.Card content-->
                </div>
                <!--/.Card-->
            </div>
            <div class="col-md-4 col-12">
                <div class="card testimonial-card">
                    <!--Bacground color-->
                    <div class="card-up card6_bg">
                        <div class="card_social_icon">
                            <div class="card6_plus float-right bg-success"><strong><i class="ti-plus text-white"></i></strong></div>
                            <div class="card6_google float-right"><i class="ti-google text-white"></i></div>
                            <div class="card6_twitter float-right"><i class="ti-twitter-alt text-white"></i></div>
                            <div class="card6_fb float-right"><i class="ti-facebook text-white"></i></div>
                        </div>
                    </div>
                    <!--Avatar-->
                    <div class="card-block clearfix_lg_up">
                        <!--Name-->
                        <h6 class="card-title text-info">UI Developer</h6>
                        <span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</span>
                        <hr>
                        <div class="card6_footer_icons">
                            <i class="ti-heart text-danger"></i>
                            <i class="ti-comments text-primary"></i>
                            <button class="btn btn-outline-danger btn-sm float-right">Read More..</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-12 ">
                <!--Card-->
                <div class="card">
                    <!--Card image-->
                    <div class="card8_top_section">
                        <div class="">
                            <h5 class="text-gray-dark p-t-10">&nbsp; Men Shoes</h5>
                        </div>
                        <div class="card_date bg-danger text-danger pointer">
                            <span class="text-white"><strong>50%</strong></span>
                            <p class="text-white card_month">off</p>
                        </div>
                        <div class="card8_shoe_image">
                            <img src="img/xcard8_shoes.png.pagespeed.ic.EXZ0V94GSx.png" class="img-fluid" alt="shoe no found">
                        </div>
                    </div>
                    <!--/.Card image-->
                    <!--Card content-->
                    <div class="card-block card8_block">
                        <h6 class="clear_both m-b-0 float-left">Ratings</h6>
                        <span class="float-right"><i class="ti-star text-danger"></i><i class="ti-star text-danger"></i><i class="ti-star text-danger"></i><i class="ti-star"></i><i class="ti-star"></i></span>
                        <br>
                        <br>
                        <h6 class="clear_both m-b-0">Sizes</h6>
                        <span>14, 15, 16, 17</span>
                        <!--Title-->
                        <br>
                        <br>
                        <div class="float-left"></div>
                        <h6 class="m-b-0">Colors</h6>
                        <div class="shirt_clor bg-danger pointer"></div>
                        <div class="shirt_clor bg-mint pointer"></div>
                        <div class="shirt_clor bg-purple pointer"></div>
                        <div class="shirt_clor bg-warning pointer"></div>
                        <div class="float-right">
                            <div class="price_tag bg-info pointer m-t-10">
                                <p class="text-white price_tag_text mb-0"><strong> Price: $12.75 </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row">

            <div class="col-lg-12">
                <div class="card">
                    <div class="table-responsive">
                        <table class="table bashboard1_table">
                            <thead>
                            <tr>
                                <th> <i class="ti-user"> </i> </th>
                                <th>User Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Stats</th>
                                <th>Salary</th>
                                <th>Progress</th>
                                <th>Company Name</th>
                                <th>Activites</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img src="img/users/avatar1.png.pagespeed.ce.CGYNZ-w3jn.png" class="rounded-circle" alt="user not found"></td>
                                <td>George</td>
                                <td><span class="badge badge-primary">Admin</span></td>
                                <td>George@gmail.com</td>
                                <td>
                                    <div class="sparkline_sales"></div>
                                </td>

                                <td>$900</td>
                                <td>
                                    75%
                                    <div class="progress">
                                        <div class="progress-bar bg-mint" role="progressbar" style="width: 75%; height: 7px" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td>IBM</td>
                                <td><i class="ti-pencil"></i><i class="ti-close"></i></td>
                            </tr>
                            <tr>
                                <td><img src="img/users/avatar2.png.pagespeed.ce.ct9nzuUsgZ.png" class="rounded-circle" alt="user not found"></td>
                                <td>Joe </td>
                                <td><span class="badge badge-danger">Designer</span></td>
                                <td>sharp@gmail.com</td>
                                <td>
                                    <div class="sparkline_users"></div>
                                </td>
                                <td>$778</td>
                                <td>
                                    65%
                                    <div class="progress">
                                        <div class="progress-bar bg-warning" role="progressbar" style="width: 65%; height: 7px" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </td>
                                <td>Sonata</td>
                                <td><i class="ti-pencil"></i><i class="ti-close"></i></td>
                            </tr>
                            <tr>
                                <td><img src="img/users/avatar3.png.pagespeed.ce.MFaZ1m9EPI.png" class="rounded-circle" alt="user not found"></td>
                                <td>Marvin</td>
                                <td><span class="badge badge-success">Developer</span></td>
                                <td>marvin@gmail.com</td>
                                <td>
                                    <div class="sparkline_sales"></div>
                                </td>
                                <td>$1000</td>
                                <td>
                                    85%
                                    <div class="progress">
                                        <div class="progress-bar bg-success" role="progressbar" style="width: 85%; height: 7px" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> </td>
                                <td>TCS</td>
                                <td><i class="ti-pencil"></i><i class="ti-close"></i></td>
                            </tr>
                            <tr>
                                <td><img src="img/users/avatar4.png.pagespeed.ce.J48DfJINyV.png" class="rounded-circle" alt="user not found"></td>
                                <td>Benjamin</td>
                                <td><span class="badge badge-warning">Developer</span></td>
                                <td>power@gmail.com</td>
                                <td>
                                    <div class="sparkline_users"></div>
                                </td>
                                <td>$912</td>
                                <td>
                                    25%
                                    <div class="progress">
                                        <div class="progress-bar bg-purple" role="progressbar" style="width: 25%; height: 7px" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div> </td>
                                <td>Infotech</td>
                                <td><i class="ti-pencil"></i><i class="ti-close"></i></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
</div>
<footer>
    <div class="bg-white container-fluid">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="footer_content"> Copyright ©2017 made by jyostna</div>
            </div>
        </div>
    </div>

</footer>
<script type="text/javascript" src="js/app.js.pagespeed.jm.PVZQb7x2om.js"></script>
<!--end global js -->
<script type="text/javascript" src="js/custom.js.pagespeed.jm.d52yjq59xU.js"></script>



<script type="text/javascript" src="js/pluginjs/sparkline.js.pagespeed.jm.PgTHNPyYgG.js"></script>
<script type="text/javascript" src="vendors/d3/js/d3.min.js.pagespeed.jm.hcZ4wO0QRk.js"></script>
<script type="text/javascript" src="vendors/c3/js/c3.min.js.pagespeed.jm.F8GMEIG-qq.js"></script>
<script type="text/javascript" src="js/pages/index1.js.pagespeed.jm.VKTtlBPvIw.js"></script>

</body>

<!-- Mirrored from demo.rareadmin.com/light-sidebar/index.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Jul 2017 08:05:28 GMT -->
</html>

