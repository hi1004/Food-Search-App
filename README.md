# :pushpin: 안전한 식탁(安全な食卓)

> OPEN API を活用した食物アレルギー食品検索サービス
>
> このサービスは韓国語のみ、検索サービス（製品検索）を提供しています。
>
> [DEMO](https://bit.ly/3ytDaqK)

</br>

![screenshot](https://user-images.githubusercontent.com/80688093/170974289-35a86427-d0fc-4c02-b92f-cb6f5e889bbf.png)

## 1. 製作期間 ＆ 参加人数

-2022 年 1 月 26 日~2 月 25 日（4 週間）

![image](https://user-images.githubusercontent.com/80688093/170995783-3c27d721-e273-4ddd-ad1a-9cce86dbf131.png)

| 名前                                                      |                       役割                        |                                                                                                              詳細 |
| --------------------------------------------------------- | :-----------------------------------------------: | ----------------------------------------------------------------------------------------------------------------: |
| <span style="color:#fdc000">오병헌(オ・ビョンホン)</span> | <span style="color:#fdc000">フロントエンド</sapn> | <span style="color:#fdc000">デザインと企画の意図に合わせて製品検索意見を提案、フロントエンドの全般的に管理</span> |
| 김동훈(キム・ドンフン)                                    |                  フロントエンド                   |                                                                              ログイン機能のデザイン、ログイン実装 |
| 김동욱(キム・ドンウク)                                    |                   バックエンド                    |                                                                      デザイン提案、ログイン機能とバックエンド担当 |
| 윤희원(ユン・フィウォン)                                  |                  デザイン・企画                   |                                                            食品のアレルギーについて情報を集めたり、デザインを提案 |

</br>

## 2. 使った技術

#### `Front-End`

- HTML5
- scss
- node.js
- vue(Nuxt)
- express
- bootstrap
- webpack
- gsap
- chart
- swiper
- Heroku

#### `Back-End`

- Django(DRF)
- nginx
- SQLite
- Distribute:AWS EC2

<details>
	<summary><b>協業ツール</b></summary>

![image](https://user-images.githubusercontent.com/80688093/170994885-cbc0279d-3c6a-4ec8-aeec-5e6a363f49fd.png)

コミュニケーションツールは`Slack`や`kakaoTalk`を使い、効率的に働く環境でプロジェクトをすんなりと進めることができました。

![image](https://user-images.githubusercontent.com/80688093/170995680-cba3695b-655f-4332-a16c-e60d5d52949b.png)

`git`を活用し、協業することでお互いにコミュニケーションの重要性を知りました。

</details>

<br>

## 3. 開発した理由

- フロントエンドだけではなく、バックエンド、企画者（デザイナー）のポジションの人と一緒に作品を作り上げたかったから。
- WEB 開発の全般的な知識やプロセスが知りたかったから。
- バックエンドと連携して、open API やデータベース、ログイン機能などフロントエンドでは難しいことをサービスしたかったから。
- Vue の Nuxt ライブラリーで SSR を実装してみたかったから。
- 変わる時代に新しい技術を使って、WEB 開発をしてみたかったら。

<details>
	<summary><b>開発した理由の詳細説明</b></summary>
	<div markdown="1">

釜山 IT 連合サークルの活動の時、４週間プロジェクト発表会があり、迷わず参加することにしました。

初めて出会った人と協業することは有意味だと判断し、４人で企画・フロントエンド・バックエンドなどそれぞれの担当を担ってプロジェクトを始めました。

限られた時間内に最後までやり遂げた結果一つの WEB サイトが完成できて、WEB 開発の全般的な知識やプロセスが分かりました。

</div>
</details>

</br>

## 4. コア機能

![image](https://user-images.githubusercontent.com/80688093/170995344-250b3b62-6982-445d-8077-875c7d11563d.png)

- 製品検索
- ログイン機能の実装
  - ログインした場合：製品検索サービス、製品の栄養や詳細について、製品のアレルギー成分の有無が分かるようになっています。
  - ログインしていない場合：製品検索サービス、製品の栄養や詳細について分かるようになっています。
- Infinite Loading

<details>
	<summary><b>コードで見るコア機能</b></summary>
  
  ### 4.1. Search
  - **製品検索 apply methods** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/components/Search/Search.vue#L54-L64)
  - **製品検索 server-middleware** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/server-middleware/food.js)
  - **製品検索サービス store** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/store/search.js)
  
  ### 4.2. ログイン機能
  - **ログイン store** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/store/signIn.js)
  - **sign in** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/pages/signIn.vue#L47-L68)
  - **sign up** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/pages/signUp.vue#L71-L158)

### 4.3. Infinite Loading

- **1 秒後に Data を持ってくる** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/components/Search/FoodList.vue#L52-L66)
- **scroll するたびに実行** :pushpin: [コード確認](https://github.com/hi1004/Food-Search-App/blob/master/App/store/search.js#L104-L143)

</details>
</br>

## 成果 & 感じたこと

- サークル内でプロジェクトの満足度が一番高く評価されました。
- バックエンドと企画（デザイン）のプロセスが理解できました。
- ログイン機能を実装した経験ができて、サービスを配布・提供できるようになりました。
- チームワークの大切さを知りました。
- リーダーとして責任感を感じ、フィードバックの重要性を知りました。
- やり甲斐がありました。
