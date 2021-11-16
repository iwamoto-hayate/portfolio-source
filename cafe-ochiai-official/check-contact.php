<?php
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$textarea = $_POST['textarea'];
?>
<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cafe-ochiai oficial</title>
  <link rel="stylesheet" href="styles/vendors/destyle.css">
  <link rel="stylesheet" href="styles/style.css">
  <script>
    (function(d) {
      var config = {
          kitId: 'hiq6kmz',
          scriptTimeout: 3000,
          async: true
        },
        h = d.documentElement,
        t = setTimeout(function() {
          h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0],
        a;
      h.className += " wf-loading";
      tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
      tk.async = true;
      tk.onload = tk.onreadystatechange = function() {
        a = this.readyState;
        if (f || a && a != "complete" && a != "loaded") return;
        f = true;
        clearTimeout(t);
        try {
          Typekit.load(config)
        } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s)
    })(document);
  </script>
  <style>
    table {
      margin: 0 auto;
      border-collapse: collapse;
    }

    th {
      width: 30%;
      padding: 1em;
      text-align: left;
    }

    td {
      width: 70%;
      padding: 1em;
      text-align: left;
    }

    input[type=submit] {
      display: block;
      background-color: #E4CFB1;
      padding: 1em 0;
      text-align: center;
      border-radius: 2em;
      border: solid 1px #E4CFB1;
      color: #fff;
      width: 300px;
      margin: 0 auto;
      margin-top: 40px;
      transition: all .3s;
    }

    input[type=submit]:hover {
      background-color: #fff;
      color: #E4CFB1;
    }
  </style>
</head>

<body>
  <div id="global-container">
    <div id="container">
      <div class="mobile-menu__cover">
        <nav class="mobile-menu">
          <ul class="mobile-menu__main">
            <li class="mobile-menu__item"><a class="mobile-menu__link" href="index.html">HOME</a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="index.html#concept">CONCEPT</a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="menu.html">MENU</a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="#">SERVICE</a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="index.html#access">ACCESS</a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="contact.html">CONATCT</a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="#"><span><img class="mobile-menu__icon" src="images/imatagram.png" alt="instagram"></span></a>
            </li>
            <li class="mobile-menu__item">
              <a class="mobile-menu__link" href="#"><span><img class="mobile-menu__icon" src="images/twitter.png" alt="twitter"></span></a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="nav-trigger"></div>
      <!-- ↓　header -->
      <header class="header">
        <div class="header__inner">
          <nav class="global-nav">
            <div class="logo">
              <h1>cafe ochiai</h1>
            </div>
            <ul class="global-nav__ul">
              <div class="global-nav__li"><a href="index.html">HOME</a></div>
              <div class="global-nav__li"><a href="index.html#concept">CONCEPT</a></div>
              <div class="global-nav__li"><a href="index.html#news">NEWS</a></div>
              <div class="global-nav__li"><a href="menu.html">MENU</a></div>
              <div class="global-nav__li"><a href="#">SERVICE</a></div>
              <div class="global-nav__li"><a href="index.html#access">ACCESS</a></div>
              <div class="global-nav__li"><a href="contact.html">CONTACT</a></div>
            </ul>
            <div class="sns-link">
              <div class="instagram"><img src="images/imatagram.png" alt=""></div>
              <div class="twitter"><img src="images/twitter.png" alt=""></div>
            </div>
          </nav>
          <button class="mobile-menu__btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <main　class="main">
        <section class="service-page">
          <div class="wrapper">
            <div class="page-top__bg">
              <h2 class="page-top__title">SERVICE</h2>
            </div>
            <div class="form-container">
              <h3 class="page-sec__title">お問い合わせ内容確認画面</h3>
              <table>
                <tr>
                  <th>お名前</th>
                  <td><?php print($name); ?></td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td><?php print($email); ?></td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td><?php print($tel); ?></td>
                </tr>
                <tr>
                  <th>お問い合わせ内容</th>
                  <td><?php print($textarea); ?></td>
                </tr>
              </table>
              <form action="result-contact.php" method="post">
                <input type="submit" value="送信">
              </form>
            </div>
          </div>
        </section>
      </main>
      <!-- ↑ header -->
      <footer class="footer">
        <div class="wrapper">
          <p class="copy-right"><small>&copy;2020 cafe-ochiai oficial</small></p>
        </div>
      </footer>
    </div>
  </div>
</body>

</html>