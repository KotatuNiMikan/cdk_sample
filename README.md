# 開発環境初期設定

## git 設定

```bash
git config --global user.name "Your Name"
git config --global user.email you@example.com
git config --global core.editor vim
```

## poetry のインストールと設定

```bash
curl -sSL https://install.python-poetry.org | python3 -
poetry config virtualenvs.in-project true
poetry self add poetry-plugin-export
```

必要なPythonバージョン（3.13.1）が入っていなければインストール

```bash
poetry python list
poetry python install 3.13.1
```

## npmインストール

```bash
npm install --dev
```

## cdkの設定ファイル作成

```bash
export Stage=Xxx
cat cdk.json.template |  envsubst > cdk.json
```
