import React, { Component } from "react";
import style from "../style/footer.module.css";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <footer className={style.footer}>
        <span className="text-muted">
          All Rights Reserved 2020 &#169; Roy Foundation
        </span>
      </footer>
    );
  }
}

export default Footer;
