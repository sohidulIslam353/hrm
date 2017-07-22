<div class="wrapper">
    <!-- Left side column. contains the logo and sidebar -->
    <div class="left_aside">
        <!-- sidebar: style can be found in sidebar-->
        <div class="sidebar">
            <!--user profile section-->
            <div class="user_section">
                <div class="row">
                    <div class="col-5">
                        <img src="img/sdsd.jpg" alt="user not found" class="rounded-circle">
                    </div>
                    <div class="col-7">
                        <p class="text-white mt-2 mb-0">
                        <?php 
                           echo ucfirst($_SESSION['username']);
                        ?>                     
                  </p>
                        <div class="leftuser_icons">
                            <span class="float-left"><a href="profile.php"><i class="ti-user text-white"></i></a></span><span class="float-left"><a href="inbox.php"><i class="ti-email text-white"></i></a></span><span class="float-left"><a href="lockscreen.php"><i class="ti-lock text-white"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu" role="navigation">
                <ul class="navigation">
                    <li class="menu-dropdown  active">
                        <a href="dashboard.php" class="dropdown_head">
                            <i class="menu_icon ti-home text-primary"></i>
                            <span class="mm-text ">Dashboard</span>
                            
                        </a>
                       
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-palette text-danger"></i>
                            <span class="mm-text "> Attendence</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">
                            <li>
                                <a href="markattendence.php">
                                    <i class="ti-angle-double-right"></i> Mark Attendence 
                                </a>
                            </li>
                            <li>
                                <a href="viewattendence.php">
                                    <i class="ti-angle-double-right"></i> View Attendence
                                </a>
                            </li> 
                             <li>
                                <a href="leavetypes.php">
                                    <i class="ti-angle-double-right"></i> Leave Types
                                </a>
                            </li>                           
                        </ul>
                    </li>
                    <li class="divider"><span>UI Components</span>
                        <hr/>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-paint-bucket text-success"></i>
                            <span>
                                    Employee
                                </span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">
                            <li>
                                <a href="addemployee.php">
                                    <i class="ti-angle-double-right"></i> Add Employee
                                </a>
                            </li>
                            <li>
                                <a href="allemployee.php">
                                    <i class="ti-angle-double-right"></i> All Employee
                                </a>
                            </li>                                                  
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-world text-warning"></i>
                            <span>
                                    Department
                                </span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">
                            <li>
                                <a href="departmentlist.php">
                                    <i class="ti-angle-double-right"></i>Department List
                                </a>
                           </li>                                                                        
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="ti-layers-alt menu_icon text-info"></i>  <span>Award</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu sub-submenu">
                            <li>
                                <a href="awardlist.php">
                                    <i class="ti-angle-double-right"></i> Award List
                                </a>
                            </li>                                                    
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-shortcode text-warning"></i>
                            <span>Expense</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">

                            <li class="menu-dropdown ">
                                <a href="expenselist.php" class="dropdown_head">
                                   <i class="ti-angle-double-right"></i> Expense List                                
                                </a>                               
                            </li>                                                                                
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-pencil-alt text-danger"></i>
                            <span>Holidays</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">

                            <li class="menu-dropdown ">
                                <a href="holidaylist.php" class="dropdown_head">
                                    <i class="ti-angle-double-right"></i> Holidays List
                                   
                                </a>
                                
                            </li>                                                                                
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-clipboard text-success"></i>
                            <span>Notice Board</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">

                            <li class="menu-dropdown ">
                                <a href="noticeboard.php" class="dropdown_head">
                                    <i class="ti-angle-double-right"></i>Notice Board                                  
                                </a>                               
                            </li>                                                                                
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-layout-tab-v text-warning"></i>
                            <span>Leave Application</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">

                            <li class="menu-dropdown ">
                                <a href="applicationlist.php" class="dropdown_head">
                                    <i class="ti-angle-double-right"></i> Application List                                   
                                </a>                                
                            </li>                                                                                
                        </ul>
                    </li>
                    <li class="menu-dropdown ">
                        <a href="#" class="dropdown_head">
                            <i class="menu_icon ti-settings text-info"></i>
                            <span>Settings</span>
                            <span class="ti-angle-up"></span>
                        </a>
                        <ul class="sub_menu">
                            <li class="menu-dropdown ">
                                <a href="generalsetting.php" class="dropdown_head">
                                    <i class="ti-angle-double-right"></i> General Setting                                
                                </a>                              
                            </li> 
                            <li class="menu-dropdown ">
                                <a href="profilesetting.php" class="dropdown_head">
                                    <i class="ti-angle-double-right"></i> Profile Setting                                
                                </a>                              
                            </li>   
                            <li class="menu-dropdown ">
                                <a href="notificationsetting.php" class="dropdown_head">
                                    <i class="ti-angle-double-right"></i> Notification Setting                                 
                                </a>                              
                            </li>                                                                                  
                        </ul>
                    </li>
                    <li>
                        <a href="calendar.php">
                            <i class="menu_icon ti-calendar text-warning"></i>
                            <span>Calendar</span>
                        </a>
                    </li>                     
                </li>
                   
                </ul>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </div>
        <!-- /.sidebar -->
    </div>