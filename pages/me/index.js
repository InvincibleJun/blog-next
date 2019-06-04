import React, { Component } from "react";
import Layout from "../../components/Layout";
import style from "./index.scss";
import Process from '../../components/me/Process';

export default class Me extends Component {
  render() {
    return (
      <Layout title="me">
        <div className={style.box}>
          <div>
            <img src={require("../../static/images/head.jpeg")} />
            <div className={style.me}>
              <p>
                陈君
                <span className={style.career}>Coder</span>
              </p>
            </div>
          </div>
          <div className={style.desc}>
            &nbsp;&nbsp;&nbsp;&nbsp;乐于钻研代码，爱折腾，寻找更好or最佳的实践方式。
          </div>
          <div className={style.ad}>
            <p>
              Email:{/* <i className={style["i-mail"]} /> */}
              <span>jarvan1215@gmail.com</span>
            </p>
            <p>
              Github:
              {/* <i className={style["i-github"]} /> */}
              <span>https://github.com/InvincibleJun</span>
            </p>
//             <p>
//               Facebook:
//               {/* <i className={style["i-github"]} /> */}
//               <span>https://github.com/InvincibleJun</span>
//             </p>
          </div>
          {/* <div className={style.skill}>
            <Process name="javascript" percent="80" />
            <Process name="vue" />
            <Process name="react" />
            <Process name="nodejs" />
            <Process name="webpack" />
          </div> */}
        </div>
      </Layout>
    );
  }
}
