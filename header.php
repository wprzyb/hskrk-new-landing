<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="utf-8" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title><?php
			global $page, $paged;
			wp_title( '|', true, 'right' );
			bloginfo( 'name' );

			if ( $paged >= 2 || $page >= 2 )
				echo ' | ' . sprintf( __( 'Page %s', 'hskrk' ), max( $paged, $page ) );

			?></title>
	<link rel="space-api" href="http://spaceapi.hskrk.pl" />
    <link rel="Shortcut icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.png" />
    <link href="<?php echo get_template_directory_uri(); ?>/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link href="<?php echo get_template_directory_uri(); ?>/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet" />
    <link href="<?php bloginfo( 'stylesheet_url' ); ?>" rel="stylesheet" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
  <!--[if lt IE 9]>
    <script src="<?php echo get_template_directory_uri(); ?>/bootstrap/js/html5shiv.js"></script>
  <![endif]-->

	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	<?php wp_head();?>

  </head>
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '678254018995382');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=678254018995382&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

  <body <?php body_class(); ?>>
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=113890865408642";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
    <div id="top">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div id="mainlogo">
              <a href="<?php echo esc_url( home_url( '/' ) ); ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.svg" alt="Hackerspace Kraków" /></a>
            </div>
          </div>
          <div class="span8">
            <div id="topmenu">
              <?php wp_nav_menu( array(
									'theme_location' => 'primary',
									'depth' => 1,
									'container' => false,
									'menu_class'=> 'nav nav-pills',
                  'items_wrap' => '<ul  id="menu-gorne-menu" class="nav nav-pills">%3$s</ul>'
									 ) ); ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="ornament1"></div>

    <div id="middle">
      <div class="container">
      	<a name="top"></a>
