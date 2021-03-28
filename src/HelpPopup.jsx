// ヘルプ用のポップアップ
// スタイルはCSSで固定の値にさせる。

import React from "react";
// testよう
import Icon_right from "./img/right.png";
import Icon_left from "./img/left.png";
import Icon_circle from "./img/circle.png";
import Icon_triangle from "./img/triangle.png";
import Icon_square from "./img/square.png";

//Help用の画像が必要
//
//

export default class HelpPopup extends React.Component {
  constructor(props) {
    super(props);
    //クローズ用にAppのフラグを変える関数が必要
    //
    this.change_page = this.change_page.bind(this);
    this.set_img_src = this.set_img_src.bind(this);
    this.state = {
      page: 1 //ヘルプ用のページ番号
    };
  }

  // ページ更新用関数
  change_page(flg) {
    console.log("--function change_page--");

    var tmp = this.state.page;

    if (flg === true) {
      tmp = tmp + 1;
      console.log(tmp);

      if (tmp === 4) {
        tmp = 1;
      }
    } else {
      tmp = tmp - 1;
      console.log(tmp);
      if (tmp === 0) {
        tmp = 3;
      }
    }

    this.setState({ page: tmp });
  }

  // ページに応じて画像のsrcを返却
  set_img_src(page_n) {
    console.log("--function set_img_src--");
    var src;
    var img_obj;
    if (page_n === 1) {
      img_obj = { Icon_circle };
    } else if (page_n === 2) {
      img_obj = { Icon_triangle };
    } else if (page_n === 3) {
      img_obj = { Icon_square };
    } else if (page === 4) {
      img_obj = { Icon_square };
    } else {
      img_obj = { Icon_square };
    }

    src = Object.values(img_obj);
    console.log(src);
    return src;
  }

  render() {
    const closebtn = (
      <div>
        <p className="close_btn" onClick={this.props.close_fnc}>
          close x
        </p>
      </div>
    );
    const help_messsage = (
      <div>
        <p>help</p>
      </div>
    );
    var page = this.state.page;
    // ヘルプ用の画像
    const help_img = (
      <div>
        <img
          src={this.set_img_src(page)}
          alt=""
          onDragStart={(event) => console.log("st" + event.clientX)}
          onDrag={(event) => console.log("dg" + event.clientX)}
          onDragEnd={(event) => console.log("ed" + event.clientX)}
          onDrop={(event) => console.log("dp" + event.clientX)}
        ></img>
      </div>
    );
    // ヘルプの切り替え用画像：左
    const help_img_change_left = (
      <img
        src={Icon_left}
        onClick={() => this.change_page(false)}
        className="Img_select add_border_b"
        alt=""
        width="20px"
        height="50px"
      ></img>
    );
    // ヘルプの切り替え用画像：右
    const help_img_change_right = (
      <img
        src={Icon_right}
        onClick={() => this.change_page(true)}
        className="Img_select add_border_b"
        alt=""
        width="20px"
        height="50px"
      ></img>
    );

    const return_img = (
      <div className="">
        {help_img_change_left}
        <a>説明</a>
        {help_img_change_right}
      </div>
    );

    const result = (
      <div>
        <div className="help_menu">
          <div>{closebtn}</div>
          <div>{help_messsage}</div>
          {page}
          {help_img}
          {return_img}
        </div>
        <div className="help_menu2"></div>
      </div>
    );

    return result;
  }
}
