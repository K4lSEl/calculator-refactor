export class NumberFormatter {
  // 桁数の上限を覚える
  constructor(private readonly maxDigits: number) {}

  // 計算結果を文字列で返す
  public formatForDisplay(result: number): string {
    const resultText = String(result);

    if (resultText.replace(/[.\-]/g, "").length > this.maxDigits) {
      const exponentialText = result.toExponential(this.maxDigits - 1);
      // 指定した文字を区切りにして、文字列を分ける処理
      const parts = exponentialText.split("e");
      // 不要な「0」を消す
      const mantissa = Number(parts[0]);

      return mantissa + "e" + parts[1];
    }

    return resultText;
  }

  // 受け取った数値が最大桁数に収まるか
  public fits(n: number): boolean {
    const resultText = String(n);
    if (resultText.replace(/[.\-]/g, "").length <= this.maxDigits) {
      return true;
    } else {
      return false;
    }
  }
}
