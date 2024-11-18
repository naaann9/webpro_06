# webpro_06
2024/10/29



## 挨拶１

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/show.ejs | 挨拶１のejsファイル

### 使用手順

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/hello1 にアクセスする

### フローチャート

```mermaid
flowchart TD;

start["開始"]
one["変数１に挨拶１を代入"]
two["変数２に挨拶２を代入"]
three["変数をそれぞれ表示"]
end1["終了"]

start --> one
one --> two
two --> three
three --> end1
```



## 挨拶２

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/show.ejs | 挨拶２のejsファイル

### 使用手順

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/hello2 にアクセスする

### フローチャート

```mermaid
flowchart TD;

start["開始"]
one["挨拶1,挨拶2をそれぞれ表示"]
end1["終了"]

start --> one
one --> end1
```



## アイコン

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/icon.ejs | アイコンのejsファイル
views/Apple_logo_black.svg | 表示する画像ファイル

### 使用手順

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/icon にアクセスする

### フローチャート

```mermaid
flowchart TD;

start["開始"]
one["画像ファイルを読み込む"]
two["画像を表示"]
end1["終了"]

start --> one
one --> two
two --> end1
```



## おみくじ

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/luck.ejs | おみくじのejsファイル

### 使用方法

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/luck にアクセスする

### フローチャート

```mermaid
flowchart TD;

start["開始"]
one["1~6のランダムな整数をnumに代入"]
two["numの値に応じて結果を割り当てる"]
three["結果の表示"]
end1["終了"]

start --> one
one --> two
two --> three
three --> end1
```



## じゃんけん

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
public/janken.html | じゃんけんの開始画面
views/janken.ejs | じゃんけんのejsファイル

### 使用手順

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/janken.html にアクセスする
1. 自分の手を入力する

### フローチャート

```mermaid
flowchart TD;

start["開始"];
cpu["cpuにランダムな手を代入"]
end1["終了"]
if{"自分の手がcpuに勝つ"}
win["勝ち"]
mat["勝利数を1増やす"]
loose["負け"]
match["試合数を1増やす"]
dis["自分の手,勝利数,試合数,勝敗を表示"]

start --> cpu
cpu --> if
if -->|yes| win
win --> mat
mat --> match
if -->|no| loose
loose --> match
match --> dis
dis --> end1
```



## 二乗

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
public/squar.html | 二乗の開始画面
views/squar.ejs | 二乗のejsファイル

### 使用方法

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/public/squar.html にアクセスする
1. 2乗したい整数を入力する

### フローチャート

```mermaid
flowchart TD;

start["開始"]
one["入力された整数を2乗した結果をans に代入"]
two["ans を表示"]
end1["終了"]

start --> one
one --> two
two --> end1
```



## 性格診断

### ファイル一覧

ファイル名 | 説明
-|-
app5.js | プログラム本体
views/color.ejs | 性格診断のejsファイル

### 使用方法

1. app5.js を起動する
1. Webブラウザでlocalhost:8080/color にアクセスする

### フローチャート

```mermaid
flowchart TD;

start["開始"]
one["入力された値から色を判別"]
two["色に応じた文章をans に代入"]
three["ans を表示]
end1["終了"]

start --> one
one --> two
two --> three
three --> end1
```