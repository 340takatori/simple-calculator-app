# simple-calculator-app

このリポジトリは、GitHub Pages で公開するシンプルな計算機 Web アプリを作るためのプロジェクトです。開発ステップ 1 として、バニラな React + Vite のセットアップと GitHub Pages デプロイのワークフローを用意しました。

## ローカル開発
1. 依存関係をインストール:
   ```bash
   npm install
   ```
2. 開発サーバーを起動:
   ```bash
   npm run dev
   ```
3. 本番ビルドを確認:
   ```bash
   npm run build
   npm run preview
   ```

## GitHub Pages デプロイ
このリポジトリには、`main` ブランチへの push で自動的にビルドし、`gh-pages` ブランチへ公開する GitHub Actions ワークフロー `.github/workflows/deploy.yml` を用意しています。

- Vite の `base` 設定を `/simple-calculator-app/` に指定しているので、GitHub Pages 上でも正しくパスが解決されます。
- ワークフローが完了すると GitHub Pages (環境名 `github-pages`) にデプロイされます。

## プロジェクトの目的と今後のステップ
- **目的:** ブラウザ上で動作する計算機 Web アプリを作成すること。
- **今回 (開発ステップ 1):** React 開発環境の準備と GitHub Pages デプロイ設定。
- **今後:** 開発ステップ 2 でコンポーネント実装、開発ステップ 3 で CSS スタイリングを行います。

トップページにはリポジトリ名「simple-calculator-app」を表示しています。今後の実装で計算機コンポーネントを追加し、スタイルを整えていきます。
