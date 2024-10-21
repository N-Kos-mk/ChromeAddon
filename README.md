# ChromeAddon
Chromeの拡張機能です

Kos製なのでKosが使うサイトのみ

- [ChromeAddon](#chromeaddon)
- [更新情報](#更新情報)
- [適用方法](#適用方法)
- [各機能紹介](#各機能紹介)
  - [Google Classroom アーカイブ](#google-classroom-アーカイブ)
    - [使い方](#使い方)
  - [Twitter Adblock](#twitter-adblock)
  - [YouTube Adblock](#youtube-adblock)
  - [Game8 AdBlock](#game8-adblock)
  - [pixiv](#pixiv)



# 更新情報
- 2024/10/22 アップロード

# 適用方法
このgithubからファイルを[ダウンロード](https://github.com/N-Kos-mk/ChromeAddon/archive/refs/heads/main.zip "ダウンロード")、中のpackフォルダを取り出す。

[拡張機能管理ページ](chrome://extensions/ "Chrome拡張機能")にアクセス、右上のデベロッパーモードをonに。

出てきた「パッケージ化されていない拡張機能を読み込む」から、先ほどのpackフォルダを選択。

ChromeAddon-mainフォルダを選んだり別のフォルダを選ぶと読み込まれないので注意。
これで適用完了。ときどきアップデートするかもしれない。

# 各機能紹介
## Google Classroom アーカイブ
classroomの、教師にアーカイブされてないが脱退したくないclassを見栄え上除去します。

### 使い方
google classroomにアクセス、F12または右クリック→検証で開発者ツールを表示し、
「要素」タブを表示

![image](https://github.com/user-attachments/assets/956b9ac9-1765-4aa8-bb45-d8e2ad9cf9cc)

「要素」タブでCtrl-Fを押し、検索で「gHz6xd Aopndd rZXyy」を検索

![image](https://github.com/user-attachments/assets/8fd86959-5030-477b-a994-40f5c78767cb)

いくつかの検索結果(黄色にハイライトされている部分)にマウスをホバーさせると画面上で青くなることを確認

残したいクラスが青くなっているとき、赤い部分のcourse-idをコピー

![image](https://github.com/user-attachments/assets/00958ee7-ce28-47c7-8920-e0d96eac2dea)

holdIdに追加する。上の場合123456789012と987654321098が残る。

## Twitter Adblock

![image](https://github.com/user-attachments/assets/e2e177de-7523-4ce5-9d17-7ddaf68848df)

これだるいので全部消す

## YouTube Adblock
最近広告の質がひどいので全部ブロックします

ただ、完全な非表示ではなく、表示された瞬間に広告を報告→ブロックするクリック動作が自動で行われる仕組みです。

## Game8 AdBlock
Game8さん有用なサイトなんですが、最近24h継続の動画広告を見せてくるので除去。

## pixiv
pixivプレミアム無料体験！といって人気検索結果を表示してくるやつをクリックすると購入ページに飛ばされるので、怒りの直アクセス。すいません課金すべきです。


[def]: #
