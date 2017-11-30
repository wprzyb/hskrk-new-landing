      </div>

    </div>



    <div id="ornament2"></div>



    <footer>

      <div class="container">

        <div class="row">

          <div class="span6 pull-right rightbuttons">

            <div class="sociallinks">

              <a class="gplus" href="https://www.youtube.com/user/HackerspaceKrakow"></a>

              <a class="fb" href="https://www.facebook.com/HackerspaceKrakow"></a>

              <a class="twitter" href="https://twitter.com/hackerspace_krk"></a>

            </div>

            <a class="up" href="#top"></a>

          </div>

          <div class="span6 teledata">

            <span class="name">Fundacja Hackerspace Kraków</span><br />

            <span class="address">ul. Zacisze 5/P1, 31-156 Kraków</span>

          </div>

        </div>

        <div class="row">

          <div class="span12 bottom">

            Design by <a href="http://zimnybartlomiej.pl" rel="nofollow external">Bart Zimny</a>,

            code by <a href="http://pidpawel.eu" rel="nofollow external">pidpawel</a>.<br />

            2012-2014, Hackerspace Kraków, All right reserved and makapaka

          </div>

        </div>

      </div>

    </footer>



    <script src="<?php echo get_template_directory_uri(); ?>/bootstrap/js/bootstrap.min.js"></script>

    <script src="<?php echo get_template_directory_uri(); ?>/scripts/excerpt.min.js"></script>

    <?php if(is_page() && strtolower(get_the_title()) === "darowizny") {

        echo '<script src="' . get_template_directory_uri() . '/scripts/input-blocker.min.js"></script>';

        echo '<script src="' . get_template_directory_uri() . '/scripts/darowizny.min.js"></script>';

     } ?>
    <?php if(is_page() && strtolower(get_the_title()) === "nowy-frontpage") {

        echo '<script src="' . get_template_directory_uri() . '/scripts/wydarzenia.js"></script>';

     } ?>


    <script src="//cdn.rawgit.com/namuol/cheet.js/master/cheet.min.js" type="text/javascript"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/scripts/makapaka.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/scripts/blackout.js"></script>

   <?php wp_footer(); ?>



  </body>

</html>

