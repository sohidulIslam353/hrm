<!DOCTYPE html>
<html lang="en">
<head>
    <title>Calendar | </title>
    
    <meta charset="UTF-8">
    <meta content='width=device-width, initial-scale=1, maximum-scale=1' name='viewport'>
    <link rel="shortcut icon" href="img/xlogo2.ico.pagespeed.ic.qmwUApvH50.html"/>
    <!--start global css-->
    <link type="text/css" rel="stylesheet" href="css/app.css"/>
    <!-- end of global css -->
    <link type="text/css" rel="stylesheet" href="css/custom.css"/>

    
<link type="text/css" rel="stylesheet" href="vendors/fullcalendar/css/fullcalendar.min.css"/>
<link type="text/css" rel="stylesheet" href="css/pages/calendar.css"/>

    <link type="text/css" rel="stylesheet" href="css/pages/light_sidebar.css"/>
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
            <div class="col-12 col-xl-9 col-md-8">
                <div class="card">
                    <div class="card-block">
                        <div id="calendar" class="m-t-10"></div>
                    </div>
                </div>
                <!-- /.box -->
            </div>
            <div class="col-12 col-xl-3 col-md-4">
                <div class="card">
                    <div class="card-header bg-white">
                        <div class="float-left mt-1">Drag and Drop Event</div>
                        <div class="float-right">
                            <a href="#" class="btn btn-outline-purple" data-toggle="modal" data-target="#myModal">
                                <i class="ti-plus"></i>
                            </a>
                        </div>
                    </div>
                    <div class="card-block">
                        <div class="form-inline" id='external_events'>
                            <div class='external_event bg-warning w-100 m-t-10 br_25'>Team Out <i class="ti-close event_clear float-right m-t-5" aria-hidden="true"></i></div>
                            <div class='external_event bg-primary w-100 m-t-10 br_25'>Product Seminar <i class="ti-close event_clear float-right m-t-5" aria-hidden="true"></i></div>
                            <div class='external_event bg-danger w-100 m-t-10 br_25'>Client Meeting <i class="ti-close event_clear float-right m-t-5" aria-hidden="true"></i></div>
                            <div class='external_event bg-info w-100 m-t-10 br_25'>Repeating Event <i class="ti-close event_clear float-right m-t-5" aria-hidden="true"></i></div>
                            <div class='external_event bg-success w-100 m-t-10 br_25'>Event Celebrations <i class="ti-close event_clear float-right m-t-5" aria-hidden="true"></i></div>
                        </div>
                        <div class="m-t-20">
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id='drop-remove'>
                                <span class="custom-control-indicator"></span>
                                <span class="custom-control-description">Remove after drop</span>
                            </label>
                        </div>
                    </div>
                    <div class="card-footer bg-white">
                        <a href="#" class="btn btn-success btn-block br_25" data-toggle="modal" data-target="#myModal">Create event</a>
                    </div>
                </div>
                <!-- /.box -->
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="myModalLabel1">
                            <i class="fa fa-plus"></i>
                            Create Event
                        </h6>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group">
                            <input type="text" id="new_event" class="form-control" placeholder="Event">
                            <div class="input-group-btn">
                                <button type="button" class="color-chooser-btn btn btn-default text-white dropdown-toggle" data-toggle="dropdown">
                                    Default
                                </button>
                                <div class="dropdown-menu float-right cal_modal_type color-chooser">
                                    <a class="color_primary text-center text-white dropdown-item" href="#">
                                        Primary
                                    </a>
                                    <a class="color_success text-center text-white dropdown-item" href="#">
                                        Success
                                    </a>
                                    <a class="color_info text-center text-white dropdown-item" href="#">
                                        Info
                                    </a>
                                    <a class="color_warning text-center text-white dropdown-item" href="#">
                                        warning
                                    </a>
                                    <a class="color_danger text-center text-white dropdown-item" href="#">
                                        Danger
                                    </a>
                                </div>
                            </div>
                            <!-- /btn-group -->
                        </div>
                        <!-- /input-group -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger float-right" data-dismiss="modal">
                            Close
                            <i class="fa fa-times"></i>
                        </button>
                        <button type="button" class="btn btn-success pull-left" id="add_new_event" data-dismiss="modal">
                            <i class="fa fa-plus"></i>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="evt_modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h6 class="modal-title" id="myModalLabel">
                            <i class="fa fa-plus"></i>
                            Edit Event
                        </h6>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div class="input-group">
                            <input type="text" id="event_title" class="form-control" placeholder="Event">
                            <div class="input-group-btn">
                                <button type="button" class="btn btn-default text-white dropdown-toggle color-chooser-btn" data-toggle="dropdown">
                                    Default
                                    <span class="caret"></span>
                                </button>
                                <div class="dropdown-menu float-right cal_modal_type color-chooser">
                                    <a class="color_primary text-center dropdown-item text-white" href="#">
                                        Primary
                                    </a>
                                    <a class="color_success text-center dropdown-item text-white" href="#">
                                        Success
                                    </a>
                                    <a class="color_info text-center dropdown-item text-white" href="#">
                                        Info
                                    </a>
                                    <a class="color_warning text-center dropdown-item text-white" href="#">
                                        warning
                                    </a>
                                    <a class="color_danger text-center dropdown-item text-white" href="#">
                                        Danger
                                    </a>
                                </div>
                            </div>
                            <!-- /btn-group -->
                        </div>
                        <!-- /input-group -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger float-right" data-dismiss="modal">
                            Close
                            <i class="fa fa-times"></i>
                        </button>
                        <button type="button" class="btn btn-success pull-left text_save" data-dismiss="modal">
                            Update
                        </button>
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
                <div class="footer_content"> Copyright ©2017 made by <span class="text text-info">Sohidul Islam</span></div>
            </div>
        </div>
    </div>

</footer>
<script type="text/javascript" src="js/app.js"></script>
<!--end global js -->
<script type="text/javascript" src="js/custom.js"></script>



<script type="text/javascript" src="vendors/moment/js/moment.min.js"></script>
<script type="text/javascript" src="vendors/fullcalendar/js/fullcalendar.min.js"></script>
<script type="text/javascript" src="js/pluginjs/calendarcustom.js"></script>
<script type="text/javascript" src="js/pages/calendar.js"></script>

</body>

<!-- Mirrored from demo.rareadmin.com/light-sidebar/calendar.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 18 Jul 2017 08:11:17 GMT -->
</html>

