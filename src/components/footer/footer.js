import React, { Component } from "react";

import "./footer.scss";

export default class footer extends Component {
  render() {
    return (
      <footer class="social-footer">
        <div class="icons-social">
          <a
            class="contact"
            href="https://michelcamilo.squarespace.com/contact/"
            target="_blank"
          >
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>

          <a
            class="facebook"
            href="https://www.facebook.com/MichelCamiloArtistPage/"
            target="_blank"
          >
            <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
          </a>

          <a
            class="spotify"
            href="https://open.spotify.com/artist/5FSlmspNfoVInmejanELTq"
            target="_blank"
          >
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>

          <a
            class="instagram"
            href="https://www.instagram.com/camilomichel/"
            target="_blank"
          >
            <i class="fab fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </div>
        <div className="contact">
          Copyright &copy;
          <a href="https://prabhakar9107.github.io/">Prabhakar Kumar</a>
        </div>
      </footer>
    );
  }
}
