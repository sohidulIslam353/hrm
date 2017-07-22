
<header class="header">
    <nav class="navbar navbar-static-top">
        <div>
            <a href="dashboard.php" class="logo navbar-brand float-left text-white text-center">
                <img style="width: 40%; height: 20%;" src="img/logoo.png" alt="logo" class="img-fluid navbar_brand_img"/>
            </a>
            <div class="navbar-btn float-left sidebar-toggle">
                <div>                  
                    <div class="bar1 first"></div>
                    <div class="bar2 second"></div>
                    <div class="bar3 third"></div>                   
                </div>
            </div>
            <div class="top_right_nav">
                <div class="float-left">
                    <div class="menu_search hidden-md-down mt-1">
                        <div class="input_icon">
                            <i class="icon_in_input input_icon_left ti-search text-primary"></i>
                            <input type="text" id="menu_filter" autocomplete="off" class="form-control pl-5 br_25" name="search" placeholder="Search...">
                        </div>
                        <!--<input type="search" name="search" class="form-control" >-->
                    </div>
                </div>
                <div class="float-right">
                    <!--start admin setting section-->
                    <div class="dropdown">
                        <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src="img/sdsd.jpg" class="admin_img2 img-fluid rounded-circle avatar-img" alt="avatar">

                        </a>
                        <div class="dropdown-menu admin_setting_dropdown" aria-labelledby="dropdownMenuButton">
    <div>
        <div class="admin_image_section">
            <img src="img/sdsd.jpg" class="admin_image img-fluid rounded-circle avatar-img" alt="avatar">
            <h5 class="text-white p-b-30">
                <?php 
                    echo ucfirst($_SESSION['username']);
                  ?>
            </h5>
        </div>
        <p></p>
        <div>
            <div class="admin_social_icon">
                <div class="admin_fb float-left mb-1"><i class="ti-facebook text-white"></i>
                </div>
                <div class="admin_twitter float-left mb-1"><i class="ti-twitter-alt text-white"></i></div>
                <div class="admin_google float-left mb-1"><i class="ti-google text-white"></i>
                </div>
            </div>
        </div>
        <div class="clear_both">
            <div class="admin_item"><i class="ti-user"> </i><a href="profile.php"> My Profile </a></div>
            <div class="admin_item"><i class="ti-settings"> </i><a href="#"> Account Settings </a></div>
        </div>
        <div class="admin_account">
            <div class="float-left"><a href="lockscreen.php"><i class="ti-lock"> </i> Lock</a></div>
            <div class="float-right"><a href="logout.php"><i class="ti-shift-right"> </i> Logout</a>
            </div>
        </div>
    </div>
</div>
                    </div>
                    <!--end admin setting section-->
                </div>
                <div class="messages float-right">
                    <!--start admin setting section-->
                    <div class="dropdown">
                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ti-email text-white"></i>
                            <div class="messages_badge_top">
                                <span class="badge badge-warning">3</span>
                            </div>
                        </a>
                        <div class="dropdown-menu messages_content" aria-labelledby="dropdownMenuButton">
    <div class="msg_title">
        <p class="text-center text-info">3 New Messages</p>
    </div>
    <div class="msg_item">
        <div class="row">
            <div class="col-3">
                <img src="img/xpeople2.png.pagespeed.ic.GEQOLGMLGN.jpg" class="rounded-circle" alt="avatar">
                <span class="text-sm">5:50pm</span>
            </div>
            <div class="col-9">
                <span class="text-info">sifat haque</span>
                <br/>
                <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    </div>
    <div class="msg_item">
        <div class="row">
            <div class="col-3">
                <img src="img/xpeople5.png.pagespeed.ic.Ff0Fmpp446.jpg" class="rounded-circle" alt="avatar">
                <span class="text-sm">4:45pm</span>
            </div>
            <div class="col-9">
                <span class="text-info">Naumy Haque</span>
                <br/>
                <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    </div>
    <div class="msg_item">
        <div class="row">
            <div class="col-3">
                <img src="img/xpeople3.png.pagespeed.ic.4A81ySgKZB.png" class="rounded-circle" alt="avatar">
                <span class="text-sm">3:30pm</span>
            </div>
            <div class="col-9">
                <span class="text-info">Masud Alam</span>
                <br/>
                <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
        </div>
    </div>
    <div class="msg_footer">
        <p class="text-center text-white"><a href="inbox.php">Show All Messages</a></p>
    </div>
</div>
                    </div>
                    <!--end admin setting section-->
                </div>
                <div class="notifications float-right">
                    <!--start admin setting section-->
                    <div class="dropdown">
                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="ti-bell text-white"></i>
                            <div class="notifications_badge_top">
                                <span class="badge badge-danger">4</span>
                            </div>
                        </a>
                        <div class="dropdown-menu notifications_content" aria-labelledby="dropdownMenuButton">
    <div class="noti_title">
        <p class="text-center text-info">4 New Notifications</p>
    </div>
    <div class="noti_item">
        <div class="row">
            <div class="col-3">
                <p></p>
                <i class="ti-email text-info noti_msg"></i>
            </div>
            <div class="col-9">
                <span>New message from john.</span>
                <br/>
                <span class="text-sm">jan 29th 2017</span>
            </div>
        </div>
    </div>
    <div class="noti_item">
        <div class="row">
            <div class="col-3">
                <p></p>
                <i class="ti-user text-info noti_msg"></i>
            </div>
            <div class="col-9">
                <span>Friend request from Teena.</span>
                <br/>
                <span class="text-sm">jan 20th 2017</span>
            </div>
        </div>
    </div>
    <div class="noti_item">
        <div class="row">
            <div class="col-3">
                <p></p>
                <i class="ti-gift text-info noti_msg"></i>
            </div>
            <div class="col-9">
                <span>Today Mahesh birthday.</span>
                <br/>
                <span class="text-sm">jan 9th 2017</span>
            </div>
        </div>
    </div>
    <div class="noti_item">
        <div class="row">
            <div class="col-3">
                <p></p>
                <i class="ti-heart text-info noti_msg"></i>
            </div>
            <div class="col-9">
                <span>Bannett like your comment.</span>
                <br/>
                <span class="text-sm">jan 1st 2017</span>
            </div>
        </div>
    </div>
    <div class="noti_footer">
        <p class="text-center text-white"><a href="#">Show All Notifications</a></p>
    </div>
</div>
                    </div>
                    <!--end admin setting section-->
                </div>
                <div class="fullscreen float-right hidden-xs-down">
                    <i class="ti-fullscreen text-white full_screen"></i>
                </div>
            </div>
        </div>
    </nav>
</header>
