name: バグ報告
description: バグを報告するためのテンプレート
title: "[Bug] "
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        ## バグ報告ありがとうございます！

  - type: input
    id: environment
    attributes:
      label: 発生環境
      description: OS / ブラウザ / バージョンなど
      placeholder: 例: Windows 11 / Chrome 126

  - type: textarea
    id: steps
    attributes:
      label: 再現手順
      description: バグの再現方法を記述してください
      placeholder: |
        1. 〜を開く
        2. 〜をクリックする
        3. エラー発生
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: 本来の期待動作
      placeholder: 正常に動作するとどうなるか

  - type: textarea
    id: logs
    attributes:
      label: ログ・スクリーンショット
      description: あれば貼ってください
