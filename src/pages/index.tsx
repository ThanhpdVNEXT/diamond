import Input from "@/components/forms/Input";
import { titleNotifi } from "@/styles/layouts/Home";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="container">
        <Input
          placeholder="キーワードを入力"
          colorBtn="none"
          colorIcon="#929292"
          className="h-center"
        />
        <div className="pt-1">
          <ul className="timeline">
            <li className="task">
              <div className="bd-task">
                <div className="row">
                  <div css={titleNotifi(true)}></div>
                  <div className="col-left">
                    <p>お得なお知らせ</p>
                  </div>
                  <div className="col-right">
                    <p className="h-due">8m ago</p>
                  </div>
                </div>
                <div className="h-row">
                  <p className="truncate">
                    ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・.
                  </p>
                </div>
              </div>
            </li>
            <li className="task">
              <div className="bd-task">
                <div className="row">
                  <div css={titleNotifi(false)}></div>
                  <div className="col-left">
                    <p>お引渡しのご連絡</p>
                  </div>
                  <div className="col-right">
                    <p className="h-due">8m ago</p>
                  </div>
                </div>
                <div className="h-row">
                  <p className="truncate">
                    ・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
