showHome()
function showHome(){
    let html = ``;
    html += `
    <!-- ***** Header Area Start ***** -->
  <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <!-- ***** Logo Start ***** -->
                    <a href="index.html" class="logo">
                        <img src="assets/images/logo.png" alt="SnapX Photography Template" style="max-height: 54px">
                    </a>
                    <!-- ***** Logo End ***** -->
                    <!-- ***** Menu Start ***** -->
                    <ul class="nav">
                        <li><a href="index.html" class="active">Home</a></li>
                        <li class="has-sub">
                            <a href="javascript:void(0)">Photos &amp; Videos</a>
                            <ul class="sub-menu">
                                <li><a href="contests.html">Contests</a></li>
                                <li><a href="contest-details.html">Single Contest</a></li>
                            </ul>
                        </li>
                        <li><a href="categories.html">Categories</a></li>
                        <li><a href="users.html">Users</a></li>
                    </ul>   
                    <div class="border-button">
                      <a id="modal_trigger" href="#modal" class="sign-in-up"><i class="fa fa-user"></i> Sign In/Up</a>
                    </div>
                    <a class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    <!-- ***** Menu End ***** -->
                </nav>
            </div>
        </div>
    </div>
  </header>
  <!-- ***** Header Area End ***** -->

  <div id="modal" class="popupContainer" style="display:none;">
    <div class="popupHeader">
        <span class="header_title">Login</span>
        <span class="modal_close"><i class="fa fa-times"></i></span>
    </div>

    <section class="popupBody">
        <!-- Social Login -->
        <div class="social_login">
            <div class="">
                <a href="#" class="social_box fb">
                    <span class="icon"><i class="fab fa-facebook"></i></span>
                    <span class="icon_title">Connect with Facebook</span>

                </a>

                <a href="#" class="social_box google">
                    <span class="icon"><i class="fab fa-google-plus"></i></span>
                    <span class="icon_title">Connect with Google</span>
                </a>
            </div>

            <div class="centeredText">
                <span>Or use your Email address</span>
            </div>

            <div class="action_btns">
                <div class="one_half"><a href="#" id="login_form" class="btn">Login</a></div>
                <div class="one_half last"><a href="#" id="register_form" class="btn">Sign up</a></div>
            </div>
        </div>

        <div class="user_login">
            <form action="" method="post">
                <label>Email / Username</label>
                <input name="username" type="text" id="username" />
              <br />

                <label>Password</label>
                <input name="password" type="password" id="password" />
              <br />

                <div class="checkbox">
                    <input id="remember" type="checkbox" />
                    <label for="remember">Remember me on this computer</label>
                </div>

                <div class="action_btns">
                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                    <div class="one_half last"><button type="submit" class="btn btn_red">Login</button></div>
                </div>
            </form>

            <a href="#" class="forgot_password">Forgot password?</a>
        </div>

        <div class="user_register">
            <form action="" method="post">
                <label>Username</label>
                <input name="username" type="text" id="username" />
                <br />

                <label>Email Address</label>
                <input name="email" type="email" id="email" />
                <br />

                <label>Password</label>
                <input name="password" type="password" id="password" />
                <br />

                <div class="checkbox">
                    <input id="send_updates" type="checkbox" />
                    <label for="send_updates">Send me occasional email updates</label>
                </div>

                <div class="action_btns">
                    <div class="one_half"><a href="#" class="btn back_btn"><i class="fa fa-angle-double-left"></i> Back</a></div>
                    <div class="one_half last"><button type="submit" class="btn btn_red">Register</button></div>
                </div>
            </form>
        </div>
        
    </section>
  </div>

  <!-- ***** Main Banner Area Start ***** -->
  <div class="main-banner">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-1">
          <div class="header-text">
            <h2>Bướm <em>Thâm</em> &amp; <em>Hồng</em> <br> Có chồng thì giữ</h2>
            <p>Thức ăn cho chim<em> "chất lượng cao"</em></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ***** Main Banner Area End ***** -->


  <section class="featured-items" id="featured-items">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-features owl-carousel" style="position: relative; z-index: 5;">
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-01.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature </h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1.000 + Camera Nikon</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-02.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Smile In The Nature </h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-03.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Happy In The Nature </h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-01.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature </h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $8,400 + Canon EOS R1</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-02.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Run In The Nature </h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $5,500 + Canon EOS R3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-03.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Stay In The Nature</h4>
                    <ul>
                      <li><span>Contest Winner:</span> Thomas Eddy</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $4,400 + Canon EOS R5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-01.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Walk In The Nature</h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $3,800 + Canon EOS R6</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-02.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Shoot In The Nature</h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $2,400 + Canon EOS R7</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="thumb">
                <img src="assets/images/featured-03.jpg" alt="">
                <div class="hover-effect">
                  <div class="content">
                    <h4>Fly In The Nature</h4>
                    <ul>
                      <li><span>Contest Winner:</span> Vincent Adam</li>
                      <li><span>Contest Author:</span> Anthony Soft</li>
                      <li><span>Awards:</span> $1,200 + Canon EOS R10</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="popular-categories">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6">
          <div class="section-heading">
            <h6>Bộ sưu tập</h6>
            <h4>ĐƯỢC SỬ DỤNG <em>NHIỀU NHẤT</em></h4>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="main-button">
            <a href="categories.html">Xem tất cả sản phẩm</a>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-01.png" alt="">
              </div>
              <div class="right">
                <h4>Nature Pic Contest</h4>
                <span><em>126</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-01.png" alt="">
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Nature Pic Contests</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-02.png" alt="">
              </div>
              <div class="right">
                <h4>Random Pic Contest</h4>
                <span><em>116</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-02.png" alt="">
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Random Pic Contests</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-03.png" alt="">
              </div>
              <div class="right">
                <h4>Portrait Pic Contest</h4>
                <span><em>164</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-03.png" alt="">
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Portrait Pic Contests</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6">
          <div class="popular-item">
            <div class="top-content">
              <div class="icon">
                <img src="assets/images/icon-04.png" alt="">
              </div>
              <div class="right">
                <h4>Space Pic Contest</h4>
                <span><em>135</em> Available Contests</span>
              </div>
            </div>
            <div class="thumb">
              <img src="assets/images/popular-04.png" alt="">
              <span class="category">Top Contest</span>
              <span class="likes"><i class="fa fa-heart"></i> 256</span>
            </div>
            <div class="border-button">
              <a href="contest-details.html">Browse Space Pic Contests</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="closed-contests">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading text-center">
            <h6>Closed Photography Contests</h6>
            <h4><em>Previous Contests</em> With Handpicked <em>Winners</em></h4>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="owl-features owl-carousel" style="position: relative; z-index: 5;">
            <div class="item">
              <div class="closed-item">
                <div class="thumb">
                  <img src="assets/images/closed-01.jpg" alt="">
                  <span class="winner"><em>Winner:</em> Anthony Soft</span>
                  <span class="price"><em>Award :</em> $1,600</span>
                </div>
                <div class="down-content">
                  <div class="row">
                    <div class="col-7">
                      <h4>88 Participants <br><span>Number Of Artists</span></h4>
                    </div>
                    <div class="col-5">
                      <h4 class="pics">320 Pictures <br><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="closed-item">
                <div class="thumb">
                  <img src="assets/images/closed-02.jpg" alt="">
                  <span class="winner"><em>Winner:</em> Anthony Soft</span>
                  <span class="price"><em>Award :</em> $4,200</span>
                </div>
                <div class="down-content">
                  <div class="row">
                    <div class="col-7">
                      <h4>96 Participants <br><span>Number Of Artists</span></h4>
                    </div>
                    <div class="col-5">
                      <h4 class="pics">410 Pictures <br><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="closed-item">
                <div class="thumb">
                  <img src="assets/images/closed-03.jpg" alt="">
                  <span class="winner"><em>Winner:</em> Anthony Soft</span>
                  <span class="price"><em>Award :</em> $3,200</span>
                </div>
                <div class="down-content">
                  <div class="row">
                    <div class="col-7">
                      <h4>74 Participants <br><span>Number Of Artists</span></h4>
                    </div>
                    <div class="col-5">
                      <h4 class="pics">284 Pictures <br><span>Submited Pics</span></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="border-button text-center">
            <a href="contests.html">Browse Open Contests</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <p>Copyright © 2023 <a href="#">Girl</a> by Team Long Lân Quy Phụng.
            <br>
          Design: <a title="CSS Templates" rel="sponsored" href="https://templatemo.com/page/1" target="_blank">TemplateMo</a></p>
        </div>
      </div>
    </div>
  </footer>
    `
    $("#mainBody").html(html);
}

